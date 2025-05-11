import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const PatientDashboard = ({ userName = 'Patient' }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-greeting">Welcome, {userName}!</h1>
      <div className="dashboard-nav">
        <button className="dashboard-btn" onClick={() => navigate('/patient-info')}>
          My Information
        </button>
        <button className="dashboard-btn" onClick={() => navigate('/medical-history')}>
          Medical History
        </button>
        <button className="dashboard-btn" onClick={() => navigate('/lab-reports')}>
          Lab Reports
        </button>
        <button className="dashboard-btn" onClick={() => navigate('/prescriptions')}>
          My Prescriptions
        </button>
        <button className="dashboard-btn" onClick={() => navigate('/doctor-selection')}>
          Find a Doctor
        </button>
        <button className="dashboard-btn" onClick={() => navigate('/health-analytics')}>
          Health Analytics
        </button>
      </div>
    </div>
  );
};

export default PatientDashboard; 