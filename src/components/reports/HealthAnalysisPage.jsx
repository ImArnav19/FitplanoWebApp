import React, { useState,useEffect } from 'react';
import Header from '../Header';
import axios from 'axios';
import ReportDisplay from './ReportDisplay';

const HealthAnalysisPage = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [healthCondition, setHealthCondition] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [currentSymptoms, setCurrentSymptoms] = useState('');
  const [labReport, setLabReport] = useState(null);
  const [analysisResult, setAnalysisResult] = useState('');
  

 

  const handleLabReportUpload = (e) => {
    const file = e.target.files[0];
    // File upload logic
    setLabReport(file);
  };

  


  // const handleSubmit = async (e) => {

  //   e.preventDefault();
  //   // Analysis logic
  //   const formData = new FormData();
  //   formData.append('name', name);
  //   formData.append('mobile', mobile);
  //   formData.append('email', email);
  //   formData.append('age', age);
  //   formData.append('gender', gender);
  //   formData.append('healthCondition', healthCondition);
  //   formData.append('medicalHistory', medicalHistory);
  //   formData.append('currentSymptoms', currentSymptoms);
  //   formData.append('labReport', labReport);

    

  //   for (const entry of formData.entries()) {
  //     console.log(entry);
  //   }

  //   const config = {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   };

    
  //     await axios.post('http://127.0.0.1:5000/report', formData,config)
  //     .then((response)=> {
  //       setAnalysisResult(response.data);
  //     })
  //     .catch((e) => {
  //       console.error('Error analyzing report:', e);
  //     });
      
      
    
      
    
  // };


  const handleSubmit = (e) => {
    e.preventDefault()
    const staticSummary = `1. Diagnosis and Analysis:\nBased on the patient's background and lab report, it is evident that the patient, Arnav More, is experiencing serious health issues. The patient is a 20-year-old female who is currently weak and has a history of high fever. The current symptom of fever indicates that the patient's health condition is not improving.\n\n2. Possible Disease Detection or Complications:\nThe presence of a persistent fever in a young individual with a history of high fever raises concerns about a possible underlying infection or inflammatory condition. It is important to further investigate the cause of the fever and address any potential complications that may arise if left untreated.\n\n3. Personalised Suggestions:\n- It is crucial for the patient to seek medical attention immediately to determine the underlying cause of the fever and receive appropriate treatment.\n- The patient should follow the healthcare provider's recommendations for managing the fever and any associated symptoms.\n- Adequate rest, hydration, and nutrition are essential for the patient's recovery. Encourage the patient to consume a balanced diet and stay hydrated.\n- To prevent future episodes of high fever, the patient should focus on maintaining a healthy lifestyle, including regular exercise, proper hygiene practices, and timely vaccinations to prevent infections.\n\nOverall, it is important for the patient to prioritize their health and well-being by seeking timely medical care and following the healthcare provider's recommendations for a speedy recovery and prevention of future health issues.`;
    setAnalysisResult(staticSummary);

    // Scroll the page down to the ReportDisplay component
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    
  }

  useEffect(() => {
    if (analysisResult !== '') {
      // Logic to execute after analysisResult is updated
      console.log('Analysis result:', analysisResult);
    }
  }, [analysisResult]);

  return (
    
    <>
    <Header />
        <div className="container py-4">
      <h1 className="mb-4">Lab Report Analysis</h1>

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="mobile" className="form-label">Mobile Number</label>
            <input type="tel" className="form-control" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="age" className="form-label">Age</label>
            <input type="number" className="form-control" id="age" value={age} onChange={(e)=> setAge(e.target.value)} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select className="form-select" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="healthCondition" className="form-label">Health Condition/Issues</label>
          <textarea className="form-control" id="healthCondition" value={healthCondition} onChange={(e) => setHealthCondition(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="medicalHistory" className="form-label">Medical History</label>
          <textarea className="form-control" id="medicalHistory" value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="currentSymptoms" className="form-label">Current Symptoms</label>
          <textarea className="form-control" id="currentSymptoms" value={currentSymptoms} onChange={(e) => setCurrentSymptoms(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="labReport" className="form-label">Upload Lab Report</label>
          <input type="file" className="form-control" id="labReport" onChange={handleLabReportUpload} />
        </div>

        <button type="submit" className="btn btn-primary" >Analyze Report</button>
      </form>

      {analysisResult && (
          <div className="mt-4">
            

            <ReportDisplay
            id="report-display"
            name={name}
            mobile={mobile}
            email={email}
            age={age}
            gender={gender}
            healthCondition={healthCondition}
            medicalHistory={medicalHistory}
            currentSymptoms={currentSymptoms}
            analysisResult={analysisResult} // Pass the static summary data
          />

        
          </div>
        )}
    </div>
    </>




    
  );
};

export default HealthAnalysisPage;
