# from flask import Flask, request, jsonify
# from fitness_planner.api.fitness_api import AdvancedFitnessPlanParameters, get_fitness_plan_advanced
# from flask_sqlalchemy import SQLAlchemy
#
# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:90353@localhost:5432/plans'
# db = SQLAlchemy(app)
#
#
# class Plan(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     fitness_plan = db.Column(db.String(500))
#     ai_response = db.Column(db.String(500))
#
#     def __repr__(self):
#         return f'<Plan {self.id}>'
#
#
# @app.route('/Plans', methods=['POST'])
# def generate_plan():
#     try:
#         # Extract request data
#         data = request.json
#
#         # Validate request
#         required_fields = ['age', 'weight', 'height', 'gender', 'health_goals', 'health_conditions']
#         for field in required_fields:
#             if field not in data:
#                 return jsonify({'error': f'Missing required field: {field}'}), 400
#
#         # Convert request data to AdvancedFitnessPlanParameters object
#         parameters = AdvancedFitnessPlanParameters(**data)
#
#         # Call AI library to generate fitness plan
#         fitness_plan_response = get_fitness_plan_advanced(parameters)
#
#         # Save plan and AI response to database
#         new_plan = Plan(fitness_plan=fitness_plan_response['response'], ai_response=fitness_plan_response['response'])
#         db.session.add(new_plan)
#         db.session.commit()
#
#         # Return fitness plan response
#         return jsonify(fitness_plan_response), 200
#
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500
#
#
# if __name__ == '__main__':
#     app.run(debug=True)
