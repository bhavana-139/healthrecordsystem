import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import PatientDashboard from './components/PatientDashboard';
import DoctorDashboard from './components/DoctorDashboard';
import PatientInfo from './components/PatientInfo';
import MedicalHistory from './components/MedicalHistory';
import LabReports from './components/LabReports';
import Prescriptions from './components/Prescriptions';
import DoctorSelection from './components/DoctorSelection';
import HealthAnalytics from './components/HealthAnalytics';
import DoctorProfile from './components/DoctorProfile';
import Appointments from './components/Appointments';
import './App.css';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('username');
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Dashboard Route component that renders the appropriate dashboard
const DashboardRoute = () => {
  const userType = localStorage.getItem('userType');
  const userName = localStorage.getItem('username');

  if (userType === 'doctor') {
    return <DoctorDashboard userName={userName} />;
  }
  return <PatientDashboard userName={userName} />;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardRoute />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/patient-info" 
          element={
            <ProtectedRoute>
              <PatientInfo />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/medical-history" 
          element={
            <ProtectedRoute>
              <MedicalHistory />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lab-reports" 
          element={
            <ProtectedRoute>
              <LabReports />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/prescriptions" 
          element={
            <ProtectedRoute>
              <Prescriptions />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/appointments" 
          element={
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/doctor-selection" 
          element={
            <ProtectedRoute>
              <DoctorSelection />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/health-analytics" 
          element={
            <ProtectedRoute>
              <HealthAnalytics />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/doctor-profile" 
          element={
            <ProtectedRoute>
              <DoctorProfile />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
