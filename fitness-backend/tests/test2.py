# # test2.py
#
# from flask import Flask, request, jsonify
# from flask_sqlalchemy import SQLAlchemy
# # from api.fitness_api import get_fitness_plan
#
# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:90353@localhost:5432/Plans'
# db = SQLAlchemy(app)
#
#
# def serialize(self):
#     return {
#         'id': self.id,
#         'gender': self.gender,
#         'dob': str(self.dob),  # Convert to string for serialization
#         'age': self.calculate_age(),
#         'weight': self.weight,
#         'height': self.height,
#         'food_preference': self.food_preference,
#         'cuisine_preference': self.cuisine_preference,
#         'goal': self.goal,
#         'email': self.email  # Include email field in serialization
#     }
#
#
# # Define User model
# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(100), unique=True, nullable=False)
#     email = db.Column(db.String(100), unique=True, nullable=False)
#     password = db.Column(db.String(100), nullable=False)
#     age = db.Column(db.Integer)
#     weight = db.Column(db.Float)
#     height = db.Column(db.Float)
#     gender = db.Column(db.String(10))
#     activity_level = db.Column(db.String(20))
#     dietary_preferences = db.Column(db.String(100))
#     health_conditions = db.Column(db.String(200))
#     fitness_background = db.Column(db.String(200))
#     time_availability = db.Column(db.String(100))
#     lifestyle_habits = db.Column(db.String(200))
#     specific_concerns = db.Column(db.String(200))
#
#
# # Define the Plans model
# class Plans(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer)
#     workout_plan = db.Column(db.String(500))
#     diet_plan = db.Column(db.String(500))
#
#
# with app.app_context():
#     db.create_all()
#
#
#     def __init__(self, user_id, workout_plan, diet_plan):
#         self.user_id = user_id
#         self.workout_plan = workout_plan
#         self.diet_plan = diet_plan
#
#
# # Define the /generate-plans API
# @app.route('/generate-plans', methods=['POST'])
# def generate_plans():
#     data = request.json
#
#     # Extract parameters from the request
#     age = data['age']
#     weight = data['weight']
#     height = data['height']
#     gender = data['gender']
#     activity_level = data['activity_level']
#     goals = data['goals']
#     dietary_preferences = data['dietary_preferences']
#     health_conditions = data.get('health_conditions', '')
#     fitness_background = data.get('fitness_background', '')
#     time_availability = data.get('time_availability', '')
#     lifestyle_habits = data.get('lifestyle_habits', '')
#     specific_concerns = data.get('specific_concerns', '')
#
#     # Create query string
#     query = (f"I am a {age}-year-old {gender}, weighing {weight} kg and {height} cm tall. "
#              f"My activity level is {activity_level}, and my goals are {goals}. I prefer a {dietary_preferences} diet.")
#     if health_conditions:
#         query += f" I am dealing with health conditions such as {health_conditions}."
#     if fitness_background:
#         query += f" My fitness background includes {fitness_background}."
#     if time_availability:
#         query += f" I have {time_availability} available for workouts."
#     if lifestyle_habits:
#         query += f" My lifestyle habits include {lifestyle_habits}."
#     if specific_concerns:
#         query += f" With specific concerns like {specific_concerns}."
#
#     # Call AI-library with the query to get plans
#     # workout_plan, diet_plan = generate_plans_from_query(query)
#     # Replace this with actual call to AI-library
#
#     # Dummy response from AI-library
#     workout_plan = "Sample workout plan"
#     diet_plan = "Sample diet plan"
#
#     # Save the plans to the database
#     new_plan = Plans(user_id=1, workout_plan=workout_plan, diet_plan=diet_plan)
#     db.session.add(new_plan)
#     db.session.commit()
#
#     # Return the response
#     response_data = {
#         'query': query,
#         'workout_plan': workout_plan,
#         'diet_plan': diet_plan
#     }
#     return jsonify(response_data)
#
#
# if __name__ == '__main__':
#     app.run(debug=True)
