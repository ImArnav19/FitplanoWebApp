import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    """Application configuration."""
    SQLALCHEMY_DATABASE_URI = os.getenv('DB_CREDENTIALS') or 'postgresql://postgresOKO:90353@localhost:5432/Plans'
    SQLALCHEMY_TRACK_MODIFICATIONS = False