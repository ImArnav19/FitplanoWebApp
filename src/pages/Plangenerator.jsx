import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// import ReactSelect from 'react-select';
import CreatableSelect from 'react-select/creatable';
import Planresult from './Planresult';
import axios from 'axios';
// import 'react-select/dist/react-select.css';

// Header component
const Header = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  return (
    <div>
      <header className="d-flex flex-column align-items-center mt-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <h1 className='text-white animated text-center wow fadeInUp ml-5'>Fitness Plan Generator</h1>
            </div>
            <div className="col-auto ml-auto">
              {!isAuthenticated ? (
                <button className="btn btn-primary-gradient rounded-pill py-2 px-4 ml-2" onClick={() => loginWithRedirect()}>Sign In</button>
              ) : null}
            </div>
            <div className="col-auto">
              {isAuthenticated ? (
                <div className="dropdown text-end ms-2">
                  <Link type="button" className="dropdown-toggle btn" data-bs-toggle="dropdown">
                    {isAuthenticated && <p className="text-sm">{user.name}</p>}
                  </Link>
                  <ul className="dropdown-menu block">
                    <li><Link to={"/profile"} className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-500">Profile</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100 " onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Link></li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
          <div>
            <p className='text-white animated text-center wow fadeInUp mr-5 mt-3' >
              Get personalized Diet plans and exercise plans tailored to your needs<br /> Start your fitness
              <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
                journey Today!
              </h2>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

// Footer component
const Footer = () => {

  return (
    <div className="container-fluid bg-primary text-light footer wow fadeIn h-100vh" data-wow-delay="0.1s">
      <a href="#" className="btn btn-lg btn-lg-square back-to-top pt-2"><i className="bi bi-arrow-up text-white" /></a>
    <br/><br/>
    <div className="container px-lg-5">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              © <a className="border-bottom" href="#">fitplano</a>, All Right Reserved. 
              {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
              Designed By <a className="border-bottom" href="https://hirademy.com">Hirademy</a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="/">Home</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

// Plangenerator component
const Plangenerator = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [userForm, setUserForm] = useState({
    height: '',
    weight: '',
    age: '',
    healthgoal: '',
    activityLevel: '',
    DietaryPreferences: '',
    fitnessBackground: '',
    healthConditions:'',
    timeAvailability: '',
    lifestyleHabits: '',
    specificConcerns: '',
    placeGender: ''
  });

  const [result, setResult] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [touchedFields, setTouchedFields] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserForm({ ...userForm, [name]: value });
    setShowResult(false);
    setTouchedFields({ ...touchedFields, [name]: true }); // Mark the field as touched
  };

  useEffect(() => {
    const areAllFieldsFilled = Object.values(userForm).every((value) => value !== '');
    setIsButtonDisabled(!areAllFieldsFilled);
  }, [userForm]);

  const isHeightValid = (userForm.height === '' || (userForm.height >= 100 && userForm.height <= 250));
  const isWeightValid = (userForm.weight === '' || (userForm.weight >= 30 && userForm.weight <= 200));
  const isAgeValid = (userForm.age === '' || (userForm.age >= 18 && userForm.age <= 100));
  const generatePlan = () => {
    console.log("User Form Data:", userForm);
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const exercisePlan = [
        'Cardio for 30 minutes',
        'Strength training for 45 minutes',
        'Rest day',
        'Yoga for 1 hour',
        'High-intensity interval training (HIIT) for 20 minutes',
        'Outdoor activity (hiking, cycling, etc.) for 1.5 hours',
        'Rest day'
    ];
    const dietPlan = [
      {
          // Monday
          breakfast: ['Oatmeal with fruits and nuts'],
          lunch: ['Grilled chicken salad'],
          dinner: ['Baked salmon with quinoa and roasted vegetables'],
          snacks: ['Mixed nuts', 'Greek yogurt with honey']
      },
      {
          // Tuesday
          breakfast: ['Greek yogurt with berries'],
          lunch: ['Apple slices with almond butter'],
          dinner: ['Protein shake'],
          snacks: ['Carrot sticks with hummus', 'Cottage cheese with pineapple']
      },
      {
          // Wednesday
          breakfast: ['Scrambled eggs with spinach and whole wheat toast'],
          lunch: ['Quinoa and black bean salad'],
          dinner: ['Grilled shrimp with couscous and steamed vegetables'],
          snacks: ['Trail mix', 'String cheese']
      },
      {
          // Thursday
          breakfast: ['Avocado toast with poached eggs'],
          lunch: ['Turkey and avocado wrap with mixed greens'],
          dinner: ['Baked chicken breast with sweet potato and broccoli'],
          snacks: ['Yogurt parfait', 'Vegetable sticks with hummus']
      },
      {
          // Friday
          breakfast: ['Smoothie with banana, spinach, and protein powder'],
          lunch: ['Vegetable stir-fry with tofu and brown rice'],
          dinner: ['Salmon teriyaki with stir-fried vegetables'],
          snacks: ['Fruit salad', 'Rice cakes with peanut butter']
      },
      {
          // Saturday
          breakfast: ['Whole grain pancakes with fresh berries'],
          lunch: ['Quinoa salad with mixed vegetables and feta cheese'],
          dinner: ['Grilled steak with roasted potatoes and asparagus'],
          snacks: ['Hard-boiled eggs', 'Greek yogurt with granola']
      },
      {
          // Sunday
          breakfast: ['Whole grain waffles with sliced bananas and honey'],
          lunch: ['Caprese salad with tomato, mozzarella, and basil'],
          dinner: ['Vegetable lasagna with side salad'],
          snacks: ['Mixed fruit bowl', 'Almonds']
      }
  ];
  

    const plans = [];

    for (let i = 0; i < days.length; i++) {
        const plan = {
            day: days[i],
            diet: dietPlan[i],
            exercise: exercisePlan[i]
        };
        plans.push(plan);
    }

    setResult(plans);
    setShowResult(true);
};


  

  useEffect(() => {
    // Scroll result into view when shown
    if (showResult) {
      const resultWrapper = document.getElementById('result-wrapper');
      if (resultWrapper) {
        resultWrapper.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [showResult]);

  return (
    <div id="app">
  <Header />
  <div className="form-and-plan-container wow fadeInUp" >
    <form className='user-form' id="user-form" onSubmit={(event) => event.preventDefault()}>
      {/* Form inputs */}
      
      <div className="row">
        <div className="col-md-6">
          <label className='labelname'  htmlFor="height">Height (cm):</label>
          <input type="number" placeholder="100" id="height" name="height" value={userForm.height} onChange={handleChange}  className={!isHeightValid ? "invalid" : ""} required />
          {!isHeightValid && <span className="error-message text-red">Invalid height</span>}
        </div>
        <div className="col-md-6">
          <label  className='labelname' htmlFor="weight">Weight (kg):</label>
          <input type="number" placeholder="100" id="weight" name="weight" value={userForm.weight} onChange={handleChange} className={!isWeightValid ? "invalid" : ""} required />
          {!isWeightValid && <span className="error-message text-red">Invalid weight</span>}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label className='labelname'  htmlFor="age">Age:</label>
          <input type="number" placeholder="age" id="age" name="age" value={userForm.age} onChange={handleChange} className={!isAgeValid ? "invalid" : ""} required />
          {!isAgeValid && <span className="error-message text-red">Invalid age</span>}
        </div>
        <div className="col-md-6">
          <label className='labelname'  htmlFor="goal">Health Goal:</label>
          <CreatableSelect
            id="goal"
            name="goal"
            value={{ value: userForm.goal, label: userForm.goal }}
            onChange={(selectedOption) => handleChange({ target: { name: 'goal', value: selectedOption.value } })}
            options={[
              { value: 'Weight-loss', label: 'Weight Loss' },
              { value: 'Muscle-gain', label: 'Muscle Gain' },
              { value: 'General-fitness', label: 'General Fitness' }
            ]}
            onCreateOption={(inputValue) => {
              const newOption = { value: inputValue, label: inputValue };
              handleChange({ target: { name: 'goal', value: inputValue } });
            }}
            formatCreateLabel={(inputValue) => `Create health goal: ${inputValue}`}
            placeholder="Select or create health goal"
            required
          />
        </div>
      </div>
      {/* Additional input fields */}
      {isAuthenticated && (
        <div className="row">
        {/* <div className="col-md-6">
          <label className='labelname'  htmlFor="placeGender">Gender:</label>
          <ReactSelect
            id="placeGender"
            name="placeGender"
            value={{ value: userForm.placeGender, label: userForm.placeGender }}
            onChange={(selectedOption) => handleChange({ target: { name: 'placeGender', value: selectedOption.value } })}
            options={[
              { value: 'Male', label: 'Male' },
              { value: 'Female', label: 'Female' }
            ]}
            required
          />
        </div> */}

        <div>
          
        <div className="row">
  <div className="col-md-12">
    <label className='labelname' htmlFor="activityLevel">Activity Level:</label>
    <div className="d-flex align-items-center w-10"> 
      <CreatableSelect
        id="activityLevel"
        name="activityLevel"
        value={{ value: userForm.activityLevel, label: userForm.activityLevel }}
        onChange={(selectedOption) => handleChange({ target: { name: 'activityLevel', value: selectedOption.value } })}
        options={[
          { value: '', label: 'Select activity level' },
          { value: 'Sedentary', label: 'Sedentary (little or no exercise)' },
          { value: 'LightlyActive', label: 'Lightly active (light exercise/sports 1-3 days/week)' },
          { value: 'ModeratelyActive', label: 'Moderately active (moderate exercise/sports 3-5 days/week)' },
          { value: 'VeryActive', label: 'Very active (hard exercise/sports 6-7 days a week)' },
          { value: 'SuperActive', label: 'Super active (very hard exercise/sports & physical job or 2x training)' }
        ]}
        onCreateOption={(inputValue) => {
          const newOption = { value: inputValue, label: inputValue };
          handleChange({ target: { name: 'activityLevel', value: inputValue } });
        }}
        formatCreateLabel={(inputValue) => `${inputValue}`}
        placeholder="Select or create activity level"
        className='w-100'
        required
      />
      <span className="input-description ml-4">Choose the activity level that best matches your daily routine.</span>
    </div>
  </div>
        <div className="col-md-12">
           <label  className='labelname' htmlFor="dietaryPreferences">Dietary Preferences:</label>
           <div className="d-flex align-items-center w-10"> 
              <CreatableSelect
                id="dietaryPreferences"
                name="dietaryPreferences"
                value={{ value: userForm.dietaryPreferences, label: userForm.dietaryPreferences }}
                onChange={(selectedOption) => handleChange({ target: { name: 'dietaryPreferences', value: selectedOption.value } })}
                options={[
                  { value: '', label: 'Select dietary preference' },
                  { value: 'Vegetarian', label: 'Vegetarian' },
                  { value: 'Vegan', label: 'Vegan' },
                  { value: 'Pescatarian', label: 'Pescatarian' },
                  { value: 'LowCarb', label: 'Low-carb' },
                  { value: 'GlutenFree', label: 'Gluten-free' },
                  { value: 'DairyFree', label: 'Dairy-free' },
                  { value: 'NutFree', label: 'Nut-free' },
                  { value: 'Paleo', label: 'Paleo' },
                  { value: 'Mediterranean', label: 'Mediterranean' },
                  { value: 'Ketogenic', label: 'Ketogenic' },
                  { value: 'Flexitarian', label: 'Flexitarian' }
                ]}
                onCreateOption={(inputValue) => {
                  const newOption = { value: inputValue, label: inputValue };
                  handleChange({ target: { name: 'dietaryPreferences', value: inputValue } });
                }}
                formatCreateLabel={(inputValue) => `${inputValue}`}
                placeholder="Select or create dietary preference"
                className='w-100'
                required
              />
               <span className="input-description ml-4">Choose the dietary preference that best fits your eating habits or specify your own.</span>
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10">
              <label className='labelname'  htmlFor="healthConditions">Health Conditions:</label>
              <div className="d-flex align-items-center w-10"> 
              <CreatableSelect
                id="healthConditions"
                name="healthConditions"
                value={{ value: userForm.healthConditions, label: userForm.healthConditions }}
                onChange={(selectedOption) => handleChange({ target: { name: 'healthConditions', value: selectedOption.value } })}
                options={[
                  { value: '', label: 'Select health condition' },
                  { value: 'Hypertension', label: 'Hypertension' },
                  { value: 'Diabetes', label: 'Diabetes' },
                  { value: 'HeartDisease', label: 'Heart Disease' },
                  { value: 'Asthma', label: 'Asthma' },
                  { value: 'Arthritis', label: 'Arthritis' },
                  { value: 'CeliacDisease', label: 'Celiac Disease' },
                  { value: 'Osteoporosis', label: 'Osteoporosis' },
                  { value: 'Migraine', label: 'Migraine' },
                  { value: 'Depression', label: 'Depression' },
                  { value: 'Anxiety', label: 'Anxiety' }
                ]}
                onCreateOption={(inputValue) => {
                  const newOption = { value: inputValue, label: inputValue };
                  handleChange({ target: { name: 'healthConditions', value: inputValue } });
                }}
                formatCreateLabel={(inputValue) => `${inputValue}`}
                placeholder="Select or create health condition"
                className='w-100'
                required
              />
              <span className="input-description ml-4">Select any health conditions you have.</span>
            </div>
          </div>
          </div>
          
          <div className="row">
                          <div className=" col-md-12">
                <label  className='labelname' htmlFor="fitnessBackground">Fitness Background:</label>
                <div className="d-flex align-items-center w-10"> 
                <CreatableSelect
                  id="fitnessBackground"
                  name="fitnessBackground"
                  value={{ value: userForm.fitnessBackground, label: userForm.fitnessBackground }}
                  onChange={(selectedOption) => handleChange({ target: { name: 'fitnessBackground', value: selectedOption.value } })}
                  options={[
                    { value: '', label: 'Select fitness background' },
                    { value: 'Beginner', label: 'Beginner' },
                    { value: 'Intermediate', label: 'Intermediate' },
                    { value: 'Advanced', label: 'Advanced' },
                    { value: 'Fitness Enthusiast', label: 'Fitness Enthusiast' },
                    { value: 'Athlete', label: 'Athlete' }
                  ]}
                  formatCreateLabel={(inputValue) => `${inputValue}`}
                  placeholder="Select or create fitness background"
                  required
                  className='w-100'
                />
                <span className="input-description ml-4">Your previous experience or history with fitness activities.</span>
              </div>
              </div>
              </div>
                    
              <div className="row">
              <div className="col-md-12">
                <label  className='labelname' htmlFor="timeAvailability">Time Availability for fitness:</label>
                <div className="d-flex align-items-center w-10"> 
                <CreatableSelect
                  id="timeAvailability"
                  name="timeAvailability"
                  value={{ value: userForm.timeAvailability, label: userForm.timeAvailability }}
                  onChange={(selectedOption) => handleChange({ target: { name: 'timeAvailability', value: selectedOption.value } })}
                  options={[
                    { value: '', label: 'Select time availability' },
                    { value: 'LessThan30', label: 'Less than 30 minutes per day' },
                    { value: '30to60', label: '30 minutes to 1 hour per day' },
                    { value: '1to2', label: '1 to 2 hours per day' },
                    { value: 'MoreThan2', label: 'More than 2 hours per day' }
                  ]}
                  formatCreateLabel={(inputValue) => `: ${inputValue}`}
                  placeholder="Select or create time availability"
                  className='w-100'
                  required
                />
                <span className="input-description ml-3">The amount of time you have available for exercise each day or week.</span>
              </div>
              </div>
              </div>

              <div className="row">
              <div className="col-md-10 ">
                <label  className='labelname' htmlFor="lifestyleHabits">Lifestyle Habits:</label>
                <div className="d-flex align-items-center w-10"> 
                <CreatableSelect
                  id="lifestyleHabits"
                  name="lifestyleHabits"
                  value={{ value: userForm.lifestyleHabits, label: userForm.lifestyleHabits }}
                  onChange={(selectedOption) => handleChange({ target: { name: 'lifestyleHabits', value: selectedOption.value } })}
                  options={[
                    { value: '', label: 'Select lifestyle habits' },
                    { value: 'Sedentary', label: 'Sedentary lifestyle' },
                    { value: 'Active', label: 'Active lifestyle' },
                    { value: 'RegularExercise', label: 'Regularly exercises' },
                    { value: 'IrregularExercise', label: 'Irregular exercise routine' },
                    { value: 'HealthyEating', label: 'Healthy eating habits' },
                    { value: 'PoorEating', label: 'Poor eating habits' }
                  ]}
                  formatCreateLabel={(inputValue) => `${inputValue}`}
                  placeholder="Select or create lifestyle habits"
                  required
                  className='w-100'
                />
                 <span className="input-description ml-3">Your daily habits and routines that may affect your fitness.</span>
              </div>
              </div>
              </div>

             <div className="row">
                <div className="col-md-16 ">
                  <label className='labelname'  htmlFor="specificConcerns">Specific Health Concerns:</label>
                  <div className="d-flex align-items-center w-10"> 
                  <CreatableSelect
                    id="specificConcerns"
                    name="specificConcerns"
                    value={{ value: userForm.specificConcerns, label: userForm.specificConcerns }}
                    onChange={(selectedOption) => handleChange({ target: { name: 'specificConcerns', value: selectedOption.value } })}
                    options={[
                      { value: '', label: 'Select specific concerns' },
                      { value: 'JointPain', label: 'Joint pain' },
                      { value: 'BackPain', label: 'Back pain' },
                      { value: 'StressManagement', label: 'Stress management' },
                      { value: 'SleepQuality', label: 'Sleep quality' },
                      { value: 'DigestiveIssues', label: 'Digestive issues' },
                      { value: 'InjuryRehabilitation', label: 'Injury rehabilitation' }
                    ]}
                    formatCreateLabel={(inputValue) => `${inputValue}`}
                    placeholder="Select or create specific concerns"
                    className='w-100'
                    required
                  />
                  <span className="input-description ml-3">Any specific concerns or goals you have regarding your fitness.</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
          )}
<br/>
      <div className="button-container">
            <button type="button" className="btn btn-primary" onClick={generatePlan}>Generate Plan</button>
          </div>
        </form>
      </div>
     
      {/* generatorplan result */}
      
      {showResult &&  <Planresult result={result} showResult={showResult} />}

       {/* plan end */}
      
         <Footer isAuthenticated={isAuthenticated} />

    </div>
  );
};

export default Plangenerator;
