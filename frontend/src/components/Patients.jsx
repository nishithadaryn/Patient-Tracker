import React, { useEffect, useState } from 'react';
import api from '../api.js';
import AddPatientForm from './AddPatientForm';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    try {
      const response = await api.get('/patients');
      setPatients(response.data.patients);
    } catch (error) {
      console.error("Error fetching patients", error);
    }
  };

  const addPatient = async (newPatient) => {
    try {
      await api.post('/patients', newPatient);
      fetchPatients();
    } catch (error) {
      console.error("Error adding patient", error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div>
      {/* ✅ Form first */}
      <AddPatientForm addPatient={addPatient} />

      {/* ✅ Patient list below */}
      <h2 className="section-header">Patient List</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>
            <strong>{patient.name}</strong> <br />
            Age: {patient.age || "N/A"} <br />
            Gender: {patient.gender || "N/A"} <br />
            Condition: {patient.condition || "N/A"} <br />
            Allergies: {patient.allergies || "None"} <br />
            Blood Group: {patient.bloodGroup || "N/A"} <br />
            Doctor: {patient.doctor || "Not Assigned"} <br />
            📞 {patient.phone || "N/A"} <br />
            📍 {patient.address || "N/A"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
