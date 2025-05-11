import React from 'react';
import './MedicalHistory.css';

const medicalHistory = {
  chronicConditions: [
    'Hypertension',
    'Type 2 Diabetes',
    'Asthma',
  ],
  surgicalHistory: [
    'Appendectomy (2010)',
    'Knee Arthroscopy (2018)',
  ],
  familyBackground: [
    'Father: Heart Disease',
    'Mother: Type 2 Diabetes',
    'Sister: Asthma',
  ],
};

const MedicalHistory = () => {
  return (
    <div className="medical-history-card">
      <h2>Medical History</h2>
      <table className="medical-history-table">
        <thead>
          <tr>
            <th>Chronic Conditions</th>
            <th>Surgical History</th>
            <th>Family Medical Background</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ul>
                {medicalHistory.chronicConditions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {medicalHistory.surgicalHistory.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {medicalHistory.familyBackground.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MedicalHistory; 