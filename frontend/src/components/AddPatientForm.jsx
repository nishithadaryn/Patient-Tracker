import React, { useState } from 'react';

const AddPatientForm = ({ addPatient }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    condition: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.age && formData.condition) {
      addPatient(formData);
      setFormData({ name: '', age: '', condition: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Patient Name" />
      <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" type="number" />
      <input name="condition" value={formData.condition} onChange={handleChange} placeholder="Condition" />
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default AddPatientForm;
