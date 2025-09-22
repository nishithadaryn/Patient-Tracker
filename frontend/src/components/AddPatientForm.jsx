import React, { useState } from 'react';

const AddPatientForm = ({ addPatient }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    bloodGroup: '',
    phone: '',
    address: '',
    condition: '',
    allergies: '',
    doctor: '',
    room: '' // ✅ added
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate: name, age, and condition are mandatory
    if (formData.name && formData.age && formData.condition) {
      addPatient(formData);
      setFormData({
        name: '',
        age: '',
        gender: '',
        bloodGroup: '',
        phone: '',
        address: '',
        condition: '',
        allergies: '',
        doctor: '',
        room: '' // ✅ reset
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Patient Name"
      />
      <input
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
        type="number"
      />
      
      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      {/* ✅ Blood Group dropdown */}
      <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
        <option value="">Blood Group</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
      </select>

      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <input
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
      />
      <input
        name="condition"
        value={formData.condition}
        onChange={handleChange}
        placeholder="Condition"
      />
      <input
        name="allergies"
        value={formData.allergies}
        onChange={handleChange}
        placeholder="Allergies"
      />
      <input
        name="doctor"
        value={formData.doctor}
        onChange={handleChange}
        placeholder="Doctor Assigned"
      />
      <input
        name="room"
        value={formData.room}
        onChange={handleChange}
        placeholder="Room Number"
      />

      <button type="submit">Add Patient</button>
    </form>
  );
};

export default AddPatientForm;
