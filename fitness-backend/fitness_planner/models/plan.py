from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Plan(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fitness_plan = db.Column(db.Text, nullable=False)
    ai_response = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f"<Plan {self.id}>"


class AdvancedPlan(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fitness_plan = db.Column(db.String(500))
    ai_response = db.Column(db.String(500))

class TrialPlan(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fitness_plan = db.Column(db.String(500))
    ai_response = db.Column(db.String(500))
