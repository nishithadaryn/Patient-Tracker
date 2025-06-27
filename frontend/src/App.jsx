import './App.css';
import React from 'react';
import PatientList from './components/Patients';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Patient Tracker</h1>
      </header>
      <main>
        <PatientList />
      </main>
    </div>
  );
};

export default App;
