import React from 'react';
import { Card } from 'react-bootstrap';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Planresult = ({ result }) => {
  const downloadPDF = () => {
    const capture = document.querySelector('.result');
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
      pdf.save('Plan.pdf');
    });
  };

  return (
    <>
    <div className='container'>
      <div className="result">
      <div className="text-center mt-3 mb-4 ">
          <h2>Diet and Workout Plan </h2>
        </div>
        <div className="diet-plans dayplan-title">
        
          <h3>Diet Plans</h3>
          <div id="diet-plan-wrapper" className="plan-wrapper">
            <div className="row">
              {result &&
                result.length > 0 &&
                result.map((dayPlan, index) => (
                  <div key={index} className="col-md-4 mb-3">
                    <div className="diet-plan">
                    <Card className="my-3" style={{  width: '100%', marginBottom: '20px' }}>
                    <Card.Body >
                            <h5>{dayPlan.day}</h5>
                            <div className="border-bottom mb-3">
                                <p><strong>Breakfast:</strong></p>
                                <ul className="list-unstyled mb-0" style={{ fontWeight: 500 }}>
                                {dayPlan.diet && dayPlan.diet.breakfast.map((meal, i) => (
                                    <li key={i} className="mb-1">{meal}</li> 
                                ))}
                                </ul>
                            </div>
                            <div className="border-bottom mb-3" >
                                <p><strong>Lunch:</strong></p>
                                <ul className="list-unstyled mb-0" style={{ fontWeight: 500 }}>
                                {dayPlan.diet && dayPlan.diet.lunch.map((meal, i) => (
                                    <li key={i} className="mb-1">{meal}</li> 
                                ))}
                                </ul>
                            </div>
                            <div className="border-bottom mb-3">
                                <p><strong>Dinner:</strong></p>
                                <ul className="list-unstyled mb-0" style={{ fontWeight: 500 }}>
                                {dayPlan.diet && dayPlan.diet.dinner.map((meal, i) => (
                                    <li key={i} className="mb-1">{meal}</li> 
                                ))}
                                </ul>
                            </div>
                            <div>
                                <p><strong>Snacks:</strong></p>
                                <ul style={{ fontWeight: 500 }}>
                                {dayPlan.diet && dayPlan.diet.snacks.map((snack, i) => (
                                    <li key={i} className="mb-1">{snack}</li> 
                                ))}
                                </ul>
                            </div>
                            </Card.Body>
                            </Card>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="workout-plans dayplan-title">
          <h3>Workout Plans</h3>
          <div id="workout-plan-wrapper" className="plan-wrapper">
            <div className="row">
              {result &&
                result.length > 0 &&
                result.map((dayPlan, index) => (
                  <div key={index} className="col-md-4 mb-3">
                    <div className="workout-plan">
                      <Card className="my-3" style={{  width: '100%', marginBottom: '10px' }}>
                        <Card.Body style={{ fontWeight: 500 }}>
                          <h5>{dayPlan.day}</h5>
                          <p><strong>Exercise Plan:</strong> {dayPlan.exercise}</p>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex   mr-5 ">
        {/* Empty space to align button to the right */}
        <button className="btn btn-danger btn-lg ml-auto" onClick={downloadPDF}>Download PDF</button>
      </div>
      </div>
    </>
  );
};

export default Planresult;
