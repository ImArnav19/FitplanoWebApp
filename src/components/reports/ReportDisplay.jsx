import React, { useEffect,useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const ReportDisplay = ({ name, mobile, email, age, gender, healthCondition, medicalHistory, currentSymptoms, analysisResult }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const formatParagraph = (paragraph) => {
    const startsWithNumberAndDot = /^\d+\./;
    if (startsWithNumberAndDot.test(paragraph)) {
      return <p><strong>{paragraph}</strong></p>;
    }
    return <p>{paragraph}</p>;
  };

  const renderAnalysisResult = () => {
    const paragraphs = analysisResult.split('\n');
    return paragraphs.map((paragraph, index) => (
      <React.Fragment key={index}>
        {formatParagraph(paragraph)}
      </React.Fragment>
    ));
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
    <button className="btn btn-danger btn-lg" onClick={downloadPDF} disabled={!(loader === false)}>
            {loader ? (<span>Downloading</span>) : (<span>Download PDF</span>)}
          </button>

<div className="container py-4 print">
      <div className="card mb-3">
        <div className="card-body">
          <h1 className="card-title mb-4">Lab Report Analysis</h1>
          
          <div className="card mb-3">
            <div className="card-body">
              
              <div className="row">
                <div className="col-md-6">
                  <p><strong>Name:</strong> {name}</p>
                  <p><strong>Mobile:</strong> {mobile}</p>
                  <p><strong>Email:</strong> {email}</p>
                  <p><strong>Age:</strong> {age}</p>
                  <p><strong>Gender:</strong> {gender}</p>
                </div>
                <div className="col-md-6">
                  <p><strong>Health Condition/Issues:</strong> {healthCondition}</p>
                  <p><strong>Medical History:</strong> {medicalHistory}</p>
                  <p><strong>Current Symptoms:</strong> {currentSymptoms}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Analysis Result</h2>
              {renderAnalysisResult()}
            </div>
          </div>

          <div ref={scrollRef} />
        </div>
      </div>
    </div>
    </>
    
    
  );
};

export default ReportDisplay;
