from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from summarizer import LabReportAnalyzer
import os
from dotenv import load_dotenv
from flask_cors import CORS



load_dotenv()


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ["DB_CREDENTIALS"]
db = SQLAlchemy(app)
CORS(app)


class Summarizer(db.Model):
    id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False, unique=True)
    mobile = db.Column(db.Integer, nullable=False, unique=True)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    health_condition = db.Column(db.Text, nullable=False)
    medical_history = db.Column(db.Text, nullable=False)
    current_symptoms = db.Column(db.Text, nullable=False)
    lab_report = db.Column(db.Text, nullable=False)
    summary = db.Column(db.Text)    


@app.route("/")
def home():
    return "<p>Home Page</p>"

@app.route('/report', methods=['POST'])
def submit_report():
    data = request.form

    required_keys = ('name', 'mobile', 'email', 'age', 'gender', 'healthCondition', 'medicalHistory', 'currentSymptoms')
    print(data)
    if not data or not all(key in data for key in required_keys):
        print("Condition is true: Missing or incomplete data")
        return jsonify({'error': 'Missing or incomplete data'}), 400

    # Get the lab report file
    name = data['name']
    email = data['email']
    age = data['age']
    gender = data['gender']
    mobile=data['mobile']
    health_condition = data['healthCondition']
    medical_history = data['medicalHistory']
    current_symptoms = data['currentSymptoms']
    lab_report_file = request.files['labReport']
    
    # Check if lab report file is provided
    if not lab_report_file:
        return jsonify({'error': 'Lab report file is missing'}), 400

    # Read the lab report content
    lab_report_content = lab_report_file.read().decode('iso-8859-1')
    
    # Analyze the lab report text and generate summary
    analyzer = LabReportAnalyzer(name=name, email = email , age=age, gender=gender,mobile=mobile,
                                health_condition=health_condition, medical_history=medical_history,
                                current_symptoms=current_symptoms,lab_report=lab_report_content)
    summary = analyzer.generate_summary_using_text()

    # Create a new report object with summary
    new_report = Summarizer(name=name, email=email, age=age, gender=gender,mobile=mobile,
                            health_condition=health_condition, medical_history=medical_history,
                            current_symptoms=current_symptoms,lab_report=lab_report_content, summary=summary)

    # Add the report to the database session
    db.session.add(new_report)

    try:
        # Commit changes to the database
        db.session.commit()
        return jsonify({'message': 'Report added successfully!', 'summary': summary}), 201
    except Exception as e:
        # Handle database errors
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
