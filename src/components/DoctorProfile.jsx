import React from 'react';
import './DoctorProfile.css';

const doctor = {
  name: 'Dr. David',
  specialization: 'Cardiologist',
  bio: 'Dr. David is a board-certified cardiologist with over 12 years of experience in treating heart conditions. He is passionate about preventive care and patient education.',
  contact: {
    phone: '+1 555-987-6543',
    email: 'david.cardiology@example.com',
    office: 'Room 210, Heart Care Clinic',
  },
  consultations: [
    { date: '2024-04-10', notes: 'Routine checkup. Blood pressure stable.' },
    { date: '2023-12-15', notes: 'Follow-up after medication adjustment.' },
    { date: '2023-08-22', notes: 'Discussed lifestyle changes and diet.' },
  ],
};

const DoctorProfile = () => {
  return (
    <div className="doctor-profile-card">
      <h2>{doctor.name}</h2>
      <div className="doctor-specialization">{doctor.specialization}</div>
      <div className="doctor-bio">{doctor.bio}</div>
      <div className="doctor-contact">
        <h3>Contact Information</h3>
        <div><span className="label">Phone:</span> {doctor.contact.phone}</div>
        <div><span className="label">Email:</span> {doctor.contact.email}</div>
        <div><span className="label">Office:</span> {doctor.contact.office}</div>
      </div>
      <div className="doctor-history">
        <h3>Previous Consultations</h3>
        <table className="consultation-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {doctor.consultations.map((c, idx) => (
              <tr key={idx}>
                <td>{c.date}</td>
                <td>{c.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorProfile; 