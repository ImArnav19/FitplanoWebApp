from api.fitness_api import get_fitness_plan, AdvancedFitnessPlanParameters
import json

try:
    parameters = AdvancedFitnessPlanParameters(
        age="39",  
        weight="67",  
        height="189",
        fitness_goal="general fitness",
        gender="male",
        activity_level="sedentary",
        dietary_preferences="indian non vegetarian",
        workout_preferences="weight training",
        health_conditions="diabetes",
        fitness_background="none",
        time_availability="3 hrs per day",
        lifestyle_habits="doesn't eat a lot",
        specific_concerns="none"
    )


    fitness_plan = get_fitness_plan(parameters, 'advanced')
    
    for key, value in fitness_plan.items():
        if isinstance(value, dict):  # If the value is another dictionary, iterate through its key-value pairs too
            print(f"{key}:")
            for sub_key, sub_value in value.items():
                print(f"    {sub_key}: {sub_value}")
        elif isinstance(value, list):  # If the value is a list, iterate through its elements
            print(f"{key}:")
            for item in value:
                print(f"    - {item}")
        else:
            print(f"{key}: {value}")  # For simple key-value pairs

except Exception as e:
    print(f"An error occurred: {str(e)}")
