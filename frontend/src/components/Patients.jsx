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
      <h2>Patient List</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>
            <strong>{patient.name}</strong> (Age: {patient.age}) - {patient.condition}
          </li>
        ))}
      </ul>
      <AddPatientForm addPatient={addPatient} />
    </div>
  );
};

export default PatientList;
