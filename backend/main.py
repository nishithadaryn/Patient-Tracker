from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

class Patient(BaseModel):
    name: str
    age: int
    condition: str

class Patients(BaseModel):
    patients: List[Patient]

app = FastAPI()

origins = [
    "http://localhost:5173",  # for local development
    "https://your-vercel-project-name.vercel.app"  # 🟢 your deployed frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

memory_db = {"patients": []}

@app.get("/")
def root():
    return {"message": "FastAPI is running!"}

@app.get("/patients", response_model=Patients)
def get_patients():
    return Patients(patients=memory_db["patients"])

@app.post("/patients")
def add_patient(patient: Patient):
    memory_db["patients"].append(patient)
    return patient
