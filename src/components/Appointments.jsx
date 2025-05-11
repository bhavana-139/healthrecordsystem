import React, { useState } from 'react';
import './Appointments.css';

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: 'John Doe',
      date: '2024-03-15',
      time: '10:00',
      type: 'Follow-up',
      status: 'Scheduled',
      notes: 'Regular checkup',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      date: '2024-03-15',
      time: '11:30',
      type: 'New Patient',
      status: 'Scheduled',
      notes: 'Initial consultation',
    },
  ]);

  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    date: '',
    time: '',
    type: 'Follow-up',
    status: 'Scheduled',
    notes: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setAppointments(prev => prev.map(appointment => 
        appointment.id === editingId ? { ...newAppointment, id: editingId } : appointment
      ));
      setIsEditing(false);
      setEditingId(null);
    } else {
      setAppointments(prev => [...prev, { ...newAppointment, id: Date.now() }]);
    }
    setNewAppointment({
      patientName: '',
      date: '',
      time: '',
      type: 'Follow-up',
      status: 'Scheduled',
      notes: '',
    });
  };

  const handleEdit = (appointment) => {
    setNewAppointment(appointment);
    setIsEditing(true);
    setEditingId(appointment.id);
  };

  const handleDelete = (id) => {
    setAppointments(prev => prev.filter(appointment => appointment.id !== id));
  };

  const handleStatusChange = (id, newStatus) => {
    setAppointments(prev => prev.map(appointment => 
      appointment.id === id ? { ...appointment, status: newStatus } : appointment
    ));
  };

  return (
    <div className="appointments-container">
      <h2>Appointment Management</h2>
      
      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={newAppointment.patientName}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="date"
            value={newAppointment.date}
            onChange={handleInputChange}
            required
          />
          <input
            type="time"
            name="time"
            value={newAppointment.time}
            onChange={handleInputChange}
            required
          />
          <select
            name="type"
            value={newAppointment.type}
            onChange={handleInputChange}
            required
          >
            <option value="Follow-up">Follow-up</option>
            <option value="New Patient">New Patient</option>
            <option value="Emergency">Emergency</option>
            <option value="Consultation">Consultation</option>
          </select>
          <textarea
            name="notes"
            placeholder="Appointment Notes"
            value={newAppointment.notes}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          {isEditing ? 'Update Appointment' : 'Add Appointment'}
        </button>
      </form>

      <div className="appointments-list">
        <h3>Upcoming Appointments</h3>
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Type</th>
              <th>Status</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.patientName}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.type}</td>
                <td>
                  <select
                    value={appointment.status}
                    onChange={(e) => handleStatusChange(appointment.id, e.target.value)}
                    className={`status-select ${appointment.status.toLowerCase()}`}
                  >
                    <option value="Scheduled">Scheduled</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="No Show">No Show</option>
                  </select>
                </td>
                <td>{appointment.notes}</td>
                <td>
                  <button
                    onClick={() => handleEdit(appointment)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(appointment.id)}
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

export default Appointments; 