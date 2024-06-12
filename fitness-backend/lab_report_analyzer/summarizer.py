import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

key = os.environ["OPENAI_API_KEY"] 
client = OpenAI()


class LabReportAnalyzer:
    
    def __init__(self, name, email, age, gender,mobile, health_condition, medical_history, current_symptoms, lab_report):
        self.name = name
        self.email = email
        self.age = age
        self.gender = gender
        self.mobile = mobile
        self.health_condition = health_condition
        self.medical_history = medical_history
        self.current_symptoms = current_symptoms
        self.lab_report = lab_report
        self.summary = None
    
    def get_query(self):
        return f"""Background of the patient: {self.name}, Age: {self.age}, Gender: {self.gender} 
        Health Condition: {self.health_condition}
        Medical History: {self.medical_history}
        Current Symptoms: {self.current_symptoms}
        
        Consider this background of the patient and below lab report: 
        {self.lab_report}
        
        Generate a detailed summary of the report and patient's health condition and give output in the following format.
        1. Give your diagnosis and analysis of the patient's health.
        2. Specify any possible disease detection or complications.
        3. Personalised suggestions to overcome this and to prevent this in the future.
        """
    
    def generate_summary_using_text(self):
        if not self.lab_report or not self.lab_report.strip():
            return "Lab report is not provided."  
        query = self.get_query()
        response = client.chat.completions.create(
            messages=[
                {'role': 'user', 'content': query},
            ],
            model="gpt-3.5-turbo",
            temperature=0,
        )

        self.summary = response.choices[0].message.content
        return self.summary
