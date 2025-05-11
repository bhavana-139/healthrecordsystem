import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const DoctorDashboard = ({ userName = 'Doctor' }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-greeting">Welcome, Dr. {userName}!</h1>
      <div className="dashboard-nav">
        <button className="dashboard-btn" onClick={() => navigate('/patient-list')}>
          My Patients
        </button>
        <button className="dashboard-btn" onClick={() => navigate('/appointments')}>
          Appointments
        </button>
        <button className="dashboard-btn" onClick={() => navigate('/doctor-profile')}>
          My Profile
        </button>
        <button className="dashboard-btn" onClick={() => navigate('/prescriptions')}>
          Write Prescriptions
        </button>
        <button className="dashboard-btn" onClick={() => navigate('/lab-reports')}>
          View Lab Reports
        </button>
        <button className="dashboard-btn" onClick={() => navigate('/medical-history')}>
          Patient Records
        </button>
      </div>
    </div>
  );
};

export default DoctorDashboard; 