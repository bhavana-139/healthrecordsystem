import React from 'react';
import './Dashboard.css';

const Dashboard = ({ userName = 'User' }) => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-greeting">Hello, {userName}!</h1>
      <div className="dashboard-nav">
        <button className="dashboard-btn">Patient Information</button>
        <button className="dashboard-btn">Medical History</button>
        <button className="dashboard-btn">Lab Reports</button>
        <button className="dashboard-btn">Prescriptions</button>
        <button className="dashboard-btn">Doctor Selection</button>
        <button className="dashboard-btn">Health Analytics</button>
      </div>
    </div>
  );
};

export default Dashboard; 