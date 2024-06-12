import React from 'react';

import { useParams } from 'react-router-dom';
import DietAndWorkoutPlan from './Dietandworkoutplan'; // Adjust the path accordingly

const Plan = ({planId}) => {

    const { id } = useParams();
    console.log(id);
    const dietPlans = [
      {
        "Monday": {
          "breakfast": ["Oatmeal with fruits", "Egg omelette with vegetables"],
          "lunch": ["Grilled chicken salad", "Brown rice"],
          "dinner": ["Salmon with quinoa", "Steamed broccoli"],
          "evening_snacks": ["Greek yogurt with berries", "Almonds"]
        }
      },
      {
        "Tuesday": {
          "breakfast": ["Whole grain toast with avocado", "Smoothie with spinach and banana"],
          "lunch": ["Quinoa salad with veggies", "Grilled tofu"],
          "dinner": ["Turkey chili", "Mixed green salad"],
          "evening_snacks": ["Apple slices with peanut butter", "Trail mix"]
        }
      },
      {
        "Wednesday": {
          "breakfast": ["Scrambled eggs with spinach", "Whole grain toast"],
          "lunch": ["Brown rice bowl with black beans and veggies", "Grilled shrimp"],
          "dinner": ["Stir-fried tofu with vegetables", "Cauliflower rice"],
          "evening_snacks": ["Cottage cheese with pineapple", "Walnuts"]
        }
      },
      {
        "Thursday": {
          "breakfast": ["Greek yogurt with granola", "Mixed berries"],
          "lunch": ["Quinoa sushi rolls", "Edamame"],
          "dinner": ["Baked chicken with sweet potatoes", "Steamed asparagus"],
          "evening_snacks": ["Carrot sticks with hummus", "Rice cakes"]
        }
      },
      {
        "Friday": {
          "breakfast": ["Whole grain pancakes with maple syrup", "Turkey bacon"],
          "lunch": ["Mediterranean wrap with falafel", "Tabbouleh salad"],
          "dinner": ["Grilled steak with roasted potatoes", "Green beans"],
          "evening_snacks": ["Greek yogurt with honey", "Pistachios"]
        }
      },
      {
        "Saturday": {
          "breakfast": ["Vegetable omelette", "Whole wheat bagel"],
          "lunch": ["Quinoa-stuffed bell peppers", "Grilled chicken"],
          "dinner": ["Baked salmon with couscous", "Roasted vegetables"],
          "evening_snacks": ["Hummus with cucumber slices", "Cherry tomatoes"]
        }
      },
      {
        "Sunday": {
          "breakfast": ["Blueberry pancakes", "Turkey sausage"],
          "lunch": ["Brown rice bowl with tofu and vegetables", "Stir-fried vegetables"],
          "dinner": ["Grilled shrimp skewers", "Quinoa pilaf"],
          "evening_snacks": ["Greek yogurt with mango", "Cashews"]
        }
      }
    ];
    

  const WorkoutPlans= {
    "Monday": [
      "Yoga for 1 hour",
      "Rest day"
    ],
    "Tuesday": [
      "High-intensity interval training (HIIT) for 20 minutes",
      "Outdoor activity (hiking, cycling, etc.) for 1.5 hours"
    ],
    "Wednesday": [
      "Strength training for 45 minutes",
      "Rest day"
    ],
    "Thursday": [
      "Cardio for 30 minutes"
    ],
    "Friday": [
      "Rest day",
      "Yoga for 1 hour"
    ],
    "Saturday": [
      "Outdoor activity (hiking, cycling, etc.) for 1.5 hours"
    ],
    "Sunday": [
      "High-intensity interval training (HIIT) for 20 minutes",
      "Strength training for 45 minutes",
      "Cardio for 30 minutes"
    ]
  }
  

  return (
    <div>
      <DietAndWorkoutPlan  dietPlans={dietPlans} WorkoutPlans={WorkoutPlans} />
    </div>
  );
};

export default Plan;