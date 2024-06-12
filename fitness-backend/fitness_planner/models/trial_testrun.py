from api.fitness_api import get_fitness_plan, TrialFitnessPlanParameters
import json

try:
    parameters = TrialFitnessPlanParameters(
        age="42",  
        weight="67",  
        height="189",  
        fitness_goal="general fitness"
    )

    fitness_plan = get_fitness_plan(parameters, 'trial')
    
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

