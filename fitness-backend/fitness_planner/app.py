from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from models.plan import AdvancedPlan, TrialPlan
from api.fitness_api import AdvancedFitnessPlanParameters, TrialFitnessPlanParameters, get_fitness_plan_advanced, get_fitness_plan_trial
from config.config import Config

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)


# Define route to create tables
@app.route('/create_tables')
def create_tables():
    # Create all tables in the database
    db.create_all()
    return 'Tables created successfully.'


@app.route('/plans', methods=['POST'])
def generate_plan():
    try:
        # Extract request data
        data = request.json

        # Validate request
        required_fields = ['age', 'height', 'fitness_goal', 'plan_type']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400

        # Determine plan type
        plan_type = data.get('plan_type')
        if plan_type not in ['trial', 'advanced']:
            return jsonify({'error': 'Invalid plan type'}), 400

        # Convert request data to appropriate parameter object
        if plan_type == 'trial':
            parameters = TrialFitnessPlanParameters(
                age=data['age'],
                weight=data['weight'],
                height=data['height'],
                fitness_goal=data['fitness_goal']
            )
            fitness_plan_response = get_fitness_plan_trial(parameters)
            PlanModel = TrialPlan
        else:
            # Ask for additional parameters
            additional_parameters = ['gender', 'activity_level', 'dietary_preferences',
                                      'workout_preferences', 'health_conditions', 'fitness_background',
                                      'time_availability', 'lifestyle_habits', 'specific_concerns']

            missing_parameters = [param for param in additional_parameters if param not in data]
            if missing_parameters:
                return jsonify({'error': f'Missing required parameters for advanced plan: {", ".join(missing_parameters)}'}), 400

            # Create instance of AdvancedFitnessPlanParameters
            parameters = AdvancedFitnessPlanParameters(
                age=data['age'],
                weight=data['weight'],
                height=data['height'],
                gender=data['gender'],
                activity_level=data['activity_level'],
                dietary_preferences=data['dietary_preferences'],
                workout_preferences=data['workout_preferences'],
                health_conditions=data['health_conditions'],
                fitness_background=data['fitness_background'],
                time_availability=data['time_availability'],
                lifestyle_habits=data['lifestyle_habits'],
                specific_concerns=data['specific_concerns'],
                health_goals=data['fitness_goal']
            )
            fitness_plan_response = get_fitness_plan_advanced(parameters)
            PlanModel = AdvancedPlan

        # Save plan and AI response to database
        new_plan = PlanModel(fitness_plan=fitness_plan_response['response'], ai_response=fitness_plan_response['response'])
        db.session.add(new_plan)
        db.session.commit()

        # Return fitness plan response
        return jsonify(fitness_plan_response), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
