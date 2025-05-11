import React from 'react';
import './PatientInfo.css';

const patient = {
  name: 'Jane Doe',
  dob: '1990-05-15',
  bloodType: 'O+',
  address: '123 Main St, Springfield, USA',
  contact: '+1 555-123-4567',
  email: 'jane.doe@example.com',
};

const PatientInfo = () => {
  return (
    <div className="patient-card">
      <h2>Patient Information</h2>
      <div className="patient-details">
        <div><span className="label">Name:</span> {patient.name}</div>
        <div><span className="label">Date of Birth:</span> {patient.dob}</div>
        <div><span className="label">Blood Type:</span> {patient.bloodType}</div>
        <div><span className="label">Address:</span> {patient.address}</div>
        <div><span className="label">Contact Info:</span> {patient.contact}</div>
        <div><span className="label">Email:</span> {patient.email}</div>
      </div>
    </div>
  );
};

export default PatientInfo; 