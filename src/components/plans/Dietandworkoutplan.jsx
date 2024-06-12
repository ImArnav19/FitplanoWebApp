import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Disclaimerpage from '../../pages/Disclaimerpage';

const DietAndWorkoutPlan = ({ dietPlans, WorkoutPlans }) => {
  const { planid } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrev = () => setActiveIndex(prevIndex => (prevIndex === 0 ? dietPlans.length - 1 : prevIndex - 1));
  const handleNext = () => setActiveIndex(prevIndex => (prevIndex === dietPlans.length - 1 ? 0 : prevIndex + 1));

  const additionalData = {
    fitnessGoal: 'Weight loss',
    age: 30,
    height: "5'10\"",
    weight: '180 lbs',
    generatedDate: '2024-04-20',
  };

  const [loader, setLoader] = useState(false);
  const downloadPDF = () => {
    const capture = document.querySelector('.print');
    setLoader(true);
    html2canvas(capture).then(canvas => {
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('Plan.pdf');
    })
  }

  return (
    <>
      <Header />
      <div className="container animated slideInDown">
        <div className="mt-5 mb-5 d-flex justify-content-between">
          <Link to="/plans" className="btn btn-success btn-lg mr-4">Back to Plans</Link>
          <button className="btn btn-danger btn-lg" onClick={downloadPDF} disabled={!(loader === false)}>
            {loader ? (<span>Downloading</span>) : (<span>Download PDF</span>)}
          </button>
        </div>
        <div className='print'>
          <div className="text-center mt-3 mb-4 ">
            <a href className="navbar-brand p-0" alt='true'>
              <h1 className="m-0 text-primary">fitplano</h1>
            </a>
            <h2>Diet and Workout Plan for Plan ID: {planid}</h2>
          </div>
          <div className='container'>
            <div className="mb-5">
              <div className="card mb-5">
                <div className="card-body">
                  <p className="card-text"><strong>Fitness Goal:</strong> <span className="text-info">{additionalData.fitnessGoal}</span></p>
                  <p className="card-text"><strong>Age:</strong> <span className="text-info">{additionalData.age}</span></p>
                  <p className="card-text"><strong>Height:</strong> <span className="text-info">{additionalData.height}</span></p>
                  <p className="card-text"><strong>Weight:</strong> <span className="text-info">{additionalData.weight}</span></p>
                  <p className="card-text"><strong>Generated Date:</strong> <span className="text-info">{additionalData.generatedDate}</span></p>
                </div>
              </div>
              <h3>Diet Plans</h3>
              <div className="row">
                {dietPlans.map((dayPlan, index) => (
                  <div key={index} className="col-sm-4">
                    <div className="mb-4">
                      <Card>
                        <Card.Body>
                          <h5 className="card-title font-weight-bold">{Object.keys(dayPlan)[0]}</h5>
                          <ul className="list-group list-group-flush">
                            {Object.entries(Object.values(dayPlan)[0]).map(([meal, items]) => (
                              <li key={meal} className="list-group-item"><strong>{meal}:</strong> <span className="text-info">{items.join(', ')}</span></li>
                            ))}
                          </ul>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3>Workout Plans</h3>
              <div className="row">
                {Object.entries(WorkoutPlans).map(([day, exercises]) => (
                  <div key={day} className="col-sm-4">
                    <div className="mb-4">
                      <Card>
                        <Card.Body>
                          <h5 className="card-title font-weight-bold">{day}</h5>
                          <ul className="list-group list-group-flush">
                            {exercises.map((exercise, index) => (
                              <li key={index} className="list-group-item"><span className="text-info">{exercise}</span></li>
                            ))}
                          </ul>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Disclaimerpage />
        </div>
        
        
      </div>
      <Footer />
      
    </>
  );
}

export default DietAndWorkoutPlan;
