import os
import json
from openai import OpenAI
from dotenv import load_dotenv

class BaseFitnessPlanParameters:
    def __init__(self, age, weight, height, health_goals):
        self.age = age
        self.weight = weight
        self.height = height
        self.health_goals = health_goals

class TrialFitnessPlanParameters(BaseFitnessPlanParameters):
    def __init__(self, age, weight, height, fitness_goal):
        super().__init__(age, weight, height, health_goals=fitness_goal)

class AdvancedFitnessPlanParameters(BaseFitnessPlanParameters):
    def __init__(self, age, weight, height, gender, activity_level='moderately active',
                 health_goals='general fitness', dietary_preferences='omnivore', workout_preferences=None,
                 health_conditions=None, fitness_background=None, time_availability=None,
                 lifestyle_habits=None, specific_concerns=None, fitness_goal=None):
        super().__init__(age, weight, height, health_goals=fitness_goal)
        self.gender = gender
        self.activity_level = activity_level
        self.dietary_preferences = dietary_preferences
        self.workout_preferences = workout_preferences
        self.health_conditions = health_conditions
        self.fitness_background = fitness_background
        self.time_availability = time_availability
        self.lifestyle_habits = lifestyle_habits
        self.specific_concerns = specific_concerns
        self.fitness_goal = fitness_goal


load_dotenv(dotenv_path='C:/Fitness project/apikey.env')

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def create_query_trial(parameters):
    query = (f"I am a {parameters.age}-year-old, weighing {parameters.weight} kg and {parameters.height} cm tall. "
             f"My goals are {parameters.health_goals}.")

    query += (
    "Given this information, please provide a general fitness report (trial version, with just 1 day) with the following guidelines:\n\n"

    "1. **Diet Plan**:\n"
    "- Offer general dietary advice focused on food types and eating habits beneficial for the specified health and fitness goals, without specifying exact amounts. "
    "Suggest meal types and frequency, emphasizing balance and nutritional content (e.g., a focus on fruits, vegetables, lean proteins, and whole grains).\n\n"
    
    "2. **Training Routine**:\n"
    "- Propose a basic weekly training outline, highlighting types of exercises suitable for the individual's goals. "
    "Describe exercise categories (e.g., cardiovascular, strength training, flexibility) and general recommendations for frequency and duration, without specific sets, reps, or weights.\n\n"
    
    "3. **Recommended Supplements**:\n"
    "- If applicable, list general supplement types that might support the individual's health and fitness objectives, with a note on consulting a healthcare provider for personalized advice. Avoid specific dosage recommendations.\n\n"
    
    "4. **Suggested Habit Changes**:\n"
    "- Suggest actionable lifestyle adjustments for improving overall fitness and well-being, such as incorporating more activity into daily routines or adopting better sleep practices.\n\n"
    
    "This request focuses on general guidance and qualitative advice to ensure the plan is safe and applicable to a wide audience without relying on specific numerical data that may not be accurately calculated by this AI model.\n"
    "Ensure that the report is tailored to the individual.\n"
    "Consider the importance of each parameter provided and how they might influence the general fitness advice, paying close attention to health conditions, age, and other significant factors.\n"

    "The generated json response must include 3 sections that are:\n"
    "1.The response workout plan for every day\n"
    "2.The response diet plan for every day\n"
    "3.The response supplement recommendations\n"
    "The workout plan must also be divided into each day of the week, which is further divided per each exercise (dont forget to mention sets and repetitions or time durations where necessary)\n" 
    "The diet plan must be further divided into each day of the week, which is further divided into each necessary meal and snack\n"
    )

    return query


def create_query_advanced(parameters):
    query = (f"I am a {parameters.age}-year-old {parameters.gender}, weighing {parameters.weight} kg and {parameters.height} cm tall. "
             f"My activity level is {parameters.activity_level}, and my goals are {parameters.health_goals}. I prefer a {parameters.dietary_preferences} diet.")

    if parameters.workout_preferences:
        query += f" My workout preferences: {parameters.workout_preferences}."
    if parameters.health_conditions:
        query += f" I am dealing with health conditions such as {parameters.health_conditions}."
    if parameters.fitness_background:
        query += f" My fitness background includes {parameters.fitness_background}."
    if parameters.time_availability:
        query += f" I have {parameters.time_availability} available for workouts."
    if parameters.lifestyle_habits:
        query += f" My lifestyle habits include {parameters.lifestyle_habits}."
    if parameters.specific_concerns:
        query += f" With specific concerns like {parameters.specific_concerns}."

    query += (
    "Given this information, please create a comprehensive fitness report with the following details:\n\n"

    "1. **Diet Plan**:\n"
    "- Provide a **daily diet plan** for a week, specifying meal suggestions with exact amounts in grams or servings. "
    "Each meal should include caloric intake and macronutrient breakdown (proteins, carbohydrates, fats).\n"
    "- For example, for breakfast, specify '100g of oats (350 kcal, 10g protein, 60g carbs, 5g fat)', and so on for each meal.\n"
    "- Summarize daily total caloric intake and macronutrient goals based on the specified health and fitness goals.\n\n"
    
    "2. **Training Routine**:\n"
    "- Outline a **detailed weekly training schedule**, specifying exercises, sets, reps, rest intervals, and any cardio protocols.\n"
    "- Detail a workout split such as 'Day 1: Push (Chest, Shoulders, Triceps), Day 2: Pull (Back, Biceps), Day 3: Legs & Core', with specific exercises for each day.\n"
    "- Include instructions for sets and reps, for example, 'Bench Press: 3 sets of 12 reps (90 seconds rest between sets)'.\n"
    "- Mention any warm-up or cool-down routines, specifying exercises and durations.\n\n"
    
    "3. **Recommended Supplements**:\n"
    "- Suggest supplements to support the health and fitness goals, including specific dosages and the best time of day for consumption.\n"
    "- For instance, 'Whey Protein: 25g post-workout, Vitamin D: 1000 IU in the morning'.\n"
    "- Explain the purpose of each supplement in relation to the fitness plan and goals.\n\n"
    
    "4. **Suggested Habit Changes**:\n"
    "- Recommend specific lifestyle or habit changes that could enhance fitness progress or general well-being.\n"
    "- Suggestions should be actionable and detailed, for example, 'Incorporate a 10-minute stretching routine every morning to improve flexibility and reduce injury risk'.\n\n"
    
    "Ensure each part of the report is actionable, detailed, and personalized, with clear instructions that can be easily followed. The goal is to create a plan that is both comprehensive and tailored specifically to the individual's detailed profile and fitness objectives.\n"
    "I am aware of the limitations of AI and I dont need you to remind me of it. I dont need you to tell me that the report you are generating for me doesnt replace the help of an actual professional either.\n"
    "IMPORTANT: please dont say anything like 'certainly, here you go' or anything else anywhere, I just want the report itself in your reply.\n"
    "Ensure that the report is tailored to the individual.\n"

    "The order of importance of the parameters are as follows (from most to least important): Health conditions, Age and Gender, Weight and Height, Goals, Fitness Background, Dietary Preferences, Exercise Preferences, Activity Level, Time Availability, Lifestyle Habits, Specific Concerns.\n"

    "Consider the affect of the parameters with a high degree of accuracy and importance.\n"
    "- For example, affects of age on report generated doesnt vary linearly as kids and aged must be treated with special care (For instance, no 10 year old or 90 year old should be deadlifting, should they? Tailor responses for training routine accordingly). KIDS AND THE OLD-AGED MUSTNT BE GIVEN HEAVY WORKOUTS WITH HIGH WEIGHTS\n"
    "- Health conditions would require extreme caution and even medical assistance in certain cases.\n"
    "- Weight again doesnt vary linearly as overweight and underweight individuals must be treated as such.\n"
    "- Goals of an individual must be vetoed if he/she is extremely unfit, to bring the person to a healthy, safe and fit state before focusing on his/her desires (especially if it's teenagers with body dysmorphia or any other cases that calls for similar concerns.)\n"
    "- Fitness Background: Understanding the individual's current level of fitness and exercise experience helps tailor the intensity and progression of the fitness plan.\n"
    "- Dietary Preferences: Important for designing a nutrition plan that aligns with individual preferences, ethical considerations, nutritional needs, and goals, affecting adherence and satisfaction. Supplements must be avoided if unnecassary for kids (they can take fish oils and multivitamins, but at a young age, whey and creatine are not necessary). It must also be avoided if dangerous for the oldage.\n"
    "- Activity Level: Gives insight into the individual's current lifestyle, helping to estimate daily caloric expenditure and tailor the fitness plan's activity recommendations, not only with the aspect of their weight loss/gain goals but also their cardiovascular health\n."
    "- Time Availability: Determines how much time the individual can dedicate to exercise, crucial for designing a feasible and realistic workout schedule.\n"
    "- Lifestyle Habits: Including sleep patterns, work schedule, and overall lifestyle, which impact energy levels, recovery, and the practicality of implementing the fitness and diet plan.\n"
    "- Specific Concerns: Tailors the plan to address any particular issues or preferences the individual has, such as preparing for a specific event, focusing on posture improvement, or managing stress through exercise.\n"

    "Lastly (VERY VERY IMPORTANT), study the relationship between parameters before generating the report... A man weighing 80 kilos with muscle gain goals should be educated to lose weight first if he's 10 yrs old and 50 cm tall as that would make him severely overweight at a young age. (Just an example, look for all possible extreme cases in relation to relationship between parameters. Do tailor exercises accordingly as well, another example would be a 150 kg man who is 27 years old and 170 cm tall who wants to lose his weight and has never worked out before, cannot physically perform pull ups, hence it must not be asked of him to do so.\n"
    
    "The generated json response must include 3 sections that are:\n"
    "1.The response workout plan for every day\n"
    "2.The response diet plan for every day\n"
    "3.The response supplement recommendations\n"
    "The workout plan must also be divided into each day of the week, which is further divided per each exercise (dont forget to mention sets and repetitions or time durations where necessary and include a good number of exercises to ensure effective training of every muscle in split if goal is to gain muscle)\n" 
    "The diet plan must be further divided into each day of the week, which is further divided into each necessary meal and snack (dont forget to include calorie intake per dish/meal)\n"
    )

    return query



def get_fitness_plan_generic(parameters, model_version):
    if isinstance(parameters, TrialFitnessPlanParameters):
        query = create_query_trial(parameters)
    elif isinstance(parameters, AdvancedFitnessPlanParameters):
        query = create_query_advanced(parameters)
    else:
        raise ValueError("Invalid parameters instance. Must be TrialFitnessPlanParameters or AdvancedFitnessPlanParameters.")
    
    chat_completion = client.chat.completions.create(
        messages=[{"role": "user", "content": query}],
        model=model_version,
    )

    response_content = chat_completion.choices[0].message.content
    response_dict = {
        "query": query,
        "response": response_content
    }

    return response_dict


def get_fitness_plan_trial(parameters):
    if not isinstance(parameters, TrialFitnessPlanParameters):
        raise ValueError("parameters must be an instance of TrialFitnessPlanParameters for the trial plan.")
    return get_fitness_plan_generic(parameters, "gpt-3.5-turbo")

def get_fitness_plan_advanced(parameters):
    if not isinstance(parameters, AdvancedFitnessPlanParameters):
        raise ValueError("parameters must be an instance of AdvancedFitnessPlanParameters for the advanced plan.")
    return get_fitness_plan_generic(parameters, "gpt-3.5-turbo") # will change to gpt-4 once we gain access to the model

def get_fitness_plan(parameters, plan_type):
    if plan_type == 'trial':
        return get_fitness_plan_trial(parameters)
    elif plan_type == 'advanced':
        return get_fitness_plan_advanced(parameters)
    else:
        raise ValueError("Invalid plan type specified. Please choose 'trial' or 'advanced'.")
