import React, { useState } from 'react';
import ReactSelect from 'react-select';
import CreatableSelect from 'react-select/creatable';

// Header Component
const Header = () => {
  return (
    <div className='profile-header'>
    <div className="container light-style flex-grow-1 container-p-y  ">
     <h1 className="text-white mb-5 mt-5 animated  wow fadeInUp ">UserProfile</h1>
    </div>
    </div>
  );
};


// Footer Component
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


// Profile Component
const Profile = () => {
  const [updatedUser, setUpdatedUser] = useState({
    name: '',
    gender: '',
    email: '',
    dateOfBirth: '',
    height: '',
    weight: '',
    goalWeight: '',
    country: '',
    dietaryPreferences: '',
    cuisinePreference: '',
    avatar: '' 
  });
  const [file, setFile] = useState();
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser(prevUser => ({ ...prevUser, [name]: value }));
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSaveChanges = () => {
    // Log updated user details to the console
    console.log('Updated User Details:', updatedUser);
  };
  const handleReset = () => {
    // Reset the user state to initial empty state
    setUpdatedUser(initialUserState);
    // Clear the file input
    setFile('');
  };


  return (
    <>
    <div className="profile-page">
    <Header />
    <div className="container light-style flex-grow-1 br-5 container-p-y fadeInUp">
      <div className="card overflow-hidden bg--primary">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="card-body media align-items-center">
            <img src={file} alt="" className="d-block ui-w-80" />
          </div>

          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links">
              <a className="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">General</a>
              <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-info">Info</a>
            </div>
          </div>

          <div className="col-md-9">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="account-general">
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" className="form-control labelname" id="name" name="name" value={updatedUser.name} onChange={handleChange} placeholder="Enter name" />
                  </div>

                  <div className="form-group">
                    <label className="form-label " htmlFor="gender">Gender</label>
                    <ReactSelect
                      id="gender"
                      name="gender"
                      
                      value={{ value: updatedUser.gender, label: updatedUser.gender }}
                      onChange={(selectedOption) => handleChange({ target: { name: 'gender', value: selectedOption.value } })}
                      options={[
                        { value: 'Male', label: 'Male' },
                        { value: 'Female', label: 'Female' }
                      ]}
                      placeholder="Select Gender"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">E-mail</label>
                    <input type="text" className="form-control mb-1 labelname" id="email" name="email" value={updatedUser.email} onChange={handleChange} placeholder="Enter email" />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="mobileNumber">Mobile Number</label>
                    <input type="text" className="form-control labelname" id="mobileNumber" name="mobileNumber" value={updatedUser.mobileNumber} onChange={handleChange} placeholder="Enter mobile number" />
                  </div>
                  
                </div>
              </div>

              <div className="tab-pane fade" id="account-info">
                <div className="card-body pb-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="dateOfBirth">Date-of-Birth</label>
                    <input type="text" className="form-control labelname" id="dateOfBirth" name="dateOfBirth" value={updatedUser.dateOfBirth} onChange={handleChange} placeholder="Enter date of birth" />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="height">Height (in cm)</label>
                    <input type="number" className="form-control labelname" id="height" name="height" value={updatedUser.height} onChange={handleChange} placeholder="Enter height in cm" />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="weight">Weight</label>
                    <input type="number" className="form-control labelname" id="weight" name="weight" value={updatedUser.weight} onChange={handleChange} placeholder="Enter weight" min={0} max={200} />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="goalWeight">Goal-Weight</label>
                    <input type="number" className="form-control labelname" id="goalWeight" name="goalWeight" value={updatedUser.goalWeight} onChange={handleChange} placeholder="Enter goal weight" min={0} max={200} />
                  </div>
                  
                  <div className="form-group">
  <label className="form-label" htmlFor="country">Country</label>
  <CreatableSelect
    id="country"
    name="country"
    value={{ value: updatedUser.country, label: updatedUser.country }}
    onChange={(selectedOption) => handleChange({ target: { name: 'country', value: selectedOption.value } })}
    options={[
      { value: 'India', label: 'India' },
      { value: 'USA', label: 'USA' },
      { value: 'Canada', label: 'Canada' },
      { value: 'UK', label: 'UK' },
      { value: 'Germany', label: 'Germany' },
      { value: 'France', label: 'France' }
    ]}
    onCreateOption={(inputValue) => {
      const newOption = { value: inputValue, label: inputValue };
      handleChange({ target: { name: 'country', value: inputValue } });
    }}
    formatCreateLabel={(inputValue) => ` ${inputValue}`}
    placeholder="Select or create country"
  />
</div>
                  
        <div className="form-group">
          <label htmlFor="dietaryPreferences" className="form-label">Dietary Preferences</label>
          <CreatableSelect
            id="dietaryPreferences"
            name="dietaryPreferences"
            value={{ value: updatedUser.dietaryPreferences, label: updatedUser.dietaryPreferences }}
            onChange={(selectedOption) => handleChange({ target: { name: 'dietaryPreferences', value: selectedOption.value } })}
            options={[
              { value: '', label: 'Select dietary preference' },
              { value: 'northIndian', label: 'North Indian' },
              { value: 'southIndian', label: 'South Indian' },
              { value: 'italian', label: 'Italian' },
              { value: 'mexican', label: 'Mexican' },
              { value: 'chinese', label: 'Chinese' },
              { value: 'japanese', label: 'Japanese' },
              { value: 'thai', label: 'Thai' },
              { value: 'mediterranean', label: 'Mediterranean' },
              { value: 'french', label: 'French' },
              { value: 'greek', label: 'Greek' },
              { value: 'turkish', label: 'Turkish' },
              { value: 'lebanese', label: 'Lebanese' },
              { value: 'indonesian', label: 'Indonesian' },
              { value: 'korean', label: 'Korean' },
              { value: 'vietnamese', label: 'Vietnamese' }
            ]}
            onCreateOption={(inputValue) => {
              const newOption = { value: inputValue, label: inputValue };
              handleChange({ target: { name: 'dietaryPreferences', value: inputValue } });
            }}
            formatCreateLabel={(inputValue) => `Create dietary preference: ${inputValue}`}
            placeholder="Select or create dietary preference"
          />
        </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="cuisinePreference">Cuisine Preference</label>
                    <input type="text" className="form-control labelname" id="cuisinePreference" name="cuisinePreference" value={updatedUser.cuisinePreference} onChange={handleChange} placeholder="Enter cuisine preference" />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-3 w-2 mr-5 animated fadeIn slideInLeft ">
          <button type="button" className="btn btn-outline-primary btn-default" onClick={handleSaveChanges}>Save changes</button>&nbsp;
          <button type="button" className="btn btn-default ">Cancel</button>
        </div>
      </div>
    </div>
    
    <div className='mt-5 '>
      <Footer handleReset={handleReset} />
    </div>
 

     </>  
  );
};

export default Profile;

