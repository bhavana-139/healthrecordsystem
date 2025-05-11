import React, { useState } from 'react';
import './Prescriptions.css';

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      patientName: 'John Doe',
      drug: 'Metformin',
      dosage: '500 mg',
      frequency: 'Twice daily',
      startDate: '2024-03-01',
      endDate: '2024-04-01',
      notes: 'Take with meals',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      drug: 'Lisinopril',
      dosage: '10 mg',
      frequency: 'Once daily',
      startDate: '2024-03-01',
      endDate: '2024-06-01',
      notes: 'Take in the morning',
    },
  ]);

  const [newPrescription, setNewPrescription] = useState({
    patientName: '',
    drug: '',
    dosage: '',
    frequency: '',
    startDate: '',
    endDate: '',
    notes: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPrescription(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setPrescriptions(prev => prev.map(prescription => 
        prescription.id === editingId ? { ...newPrescription, id: editingId } : prescription
      ));
      setIsEditing(false);
      setEditingId(null);
    } else {
      setPrescriptions(prev => [...prev, { ...newPrescription, id: Date.now() }]);
    }
    setNewPrescription({
      patientName: '',
      drug: '',
      dosage: '',
      frequency: '',
      startDate: '',
      endDate: '',
      notes: '',
    });
  };

  const handleEdit = (prescription) => {
    setNewPrescription(prescription);
    setIsEditing(true);
    setEditingId(prescription.id);
  };

  const handleDelete = (id) => {
    setPrescriptions(prev => prev.filter(prescription => prescription.id !== id));
  };

  return (
    <div className="prescriptions-container">
      <h2>Prescription Management</h2>
      
      <form onSubmit={handleSubmit} className="prescription-form">
        <div className="form-group">
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={newPrescription.patientName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="drug"
            placeholder="Drug Name"
            value={newPrescription.drug}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="dosage"
            placeholder="Dosage"
            value={newPrescription.dosage}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="frequency"
            placeholder="Frequency"
            value={newPrescription.frequency}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="startDate"
            value={newPrescription.startDate}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="endDate"
            value={newPrescription.endDate}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="notes"
            placeholder="Additional Notes"
            value={newPrescription.notes}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          {isEditing ? 'Update Prescription' : 'Add Prescription'}
        </button>
      </form>

      <div className="prescriptions-list">
        <h3>Current Prescriptions</h3>
        <table className="prescriptions-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Drug</th>
              <th>Dosage</th>
              <th>Frequency</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((prescription) => (
              <tr key={prescription.id}>
                <td>{prescription.patientName}</td>
                <td>{prescription.drug}</td>
                <td>{prescription.dosage}</td>
                <td>{prescription.frequency}</td>
                <td>{prescription.startDate}</td>
                <td>{prescription.endDate}</td>
                <td>{prescription.notes}</td>
                <td>
                  <button
                    onClick={() => handleEdit(prescription)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(prescription.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Prescriptions; 