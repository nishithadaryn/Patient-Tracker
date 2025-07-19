from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change "*" to your frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Patient data model
class Patient(BaseModel):
    name: str
    age: int
    condition: str

# Temporary in-memory database
memory_db = {"patients": []}

@app.get("/patients")
def get_patients():
    return {"patients": memory_db["patients"]}

@app.post("/patients")
def add_patient(patient: Patient):
    memory_db["patients"].append(patient)
    print("✅ Current DB:", memory_db["patients"])  # Debug print
    return patient
