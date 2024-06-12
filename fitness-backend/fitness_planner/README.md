# Fitness Planner Application

## Overview

The Fitness Planner Application is designed to help users create personalized fitness plans. It utilizes user's personal data such as age, weight, height, gender, activity level, health goals, dietary preferences, and other considerations to generate a comprehensive fitness report. This report (which can be trial report or an advanced one) includes tailored diet plans, training routines, recommended supplements, and suggested habit changes.

## Features

- Personalized fitness reports based on user's fitness plan parameters.
- Diet plan suggestions.
- Training routine recommendations.
- Supplement guidance.
- Habit change advice.

## Prerequisites

- Python 3.x
- Access to an external API for generating fitness reports (API key required).

## Installation

- Clone the repository to your local machine.
- open the root folder "fitness-planner" on your IDE and run the following command in the terminal:

```
   pip install .
```

## Setup

- Before running the application, ensure you have the necessary API key stored in an env file as so:

```
    OPENAI_API_KEY="***your-api-key-here***"
```

- Edit the following line to have your env file path to the env file (in fitness_api.py under api folder):

```python
    load_dotenv(dotenv_path='***your-file-path-here***')
```

## Usage

After installation and setup, you can start using the Fitness Planner API to generate fitness plans. Here's an example of how to use it in your Python code (for Advanced version):

```python
from fitness_planner.api.fitness_api import get_fitness_plan, AdvancedFitnessPlanParameters

# Define the parameters for the fitness plan
parameters = AdvancedFitnessPlanParameters(
    age="29",
    gender="male",
    weight="67",
    height="189",
    activity_level="sedentary",
    health_goals="general fitness",
    dietary_preferences="indian non vegetarian",
    workout_preferences="weight training",
    health_conditions="diabetes",
    fitness_background="none",
    time_availability="3 hrs per day",
    lifestyle_habits="doesnt eat a lot",
    specific_concerns="none"
)

fitness_plan = get_fitness_plan(parameters, 'advanced')
```

Now for the trial version:

```python
parameters = TrialFitnessPlanParameters(
        age="42",
        weight="67",
        height="189",
        health_goals="general fitness"
    )

    fitness_plan = get_fitness_plan(parameters, 'trial')
```
