import React, { useState } from 'react';
import './DoctorSelection.css';
import ConfirmationPopup from './ConfirmationPopup';

const doctors = [
  { name: 'Dr. David', specialty: 'Cardiologist', experience: 12 },
  { name: 'Dr. Thomas', specialty: 'Dermatologist', experience: 8 },
  { name: 'Dr. Alisha', specialty: 'Pediatrician', experience: 10 },
];

const DoctorSelection = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [confirmation, setConfirmation] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  const handleSelect = (doctor) => {
    setSelectedDoctor(doctor.name);
    setConfirmation(`You have selected ${doctor.name} for consultation.`);
    setPopupMessage('Your response has been saved successfully!');
  };

  return (
    <div className="doctor-selection-panel">
      <h2>Select a Doctor for Consultation</h2>
      <div className="doctor-list">
        {doctors.map((doctor, idx) => (
          <div className={`doctor-card${selectedDoctor === doctor.name ? ' selected' : ''}`} key={idx}>
            <div className="doctor-info">
              <div className="doctor-name">{doctor.name}</div>
              <div className="doctor-specialty">{doctor.specialty}</div>
              <div className="doctor-experience">{doctor.experience} years experience</div>
            </div>
            <button
              className="select-doctor-btn"
              onClick={() => handleSelect(doctor)}
              disabled={selectedDoctor === doctor.name}
            >
              {selectedDoctor === doctor.name ? 'Selected' : 'Select'}
            </button>
          </div>
        ))}
      </div>
      {confirmation && <div className="doctor-confirmation">{confirmation}</div>}
      <ConfirmationPopup message={popupMessage} onClose={() => setPopupMessage('')} />
    </div>
  );
};

export default DoctorSelection; 