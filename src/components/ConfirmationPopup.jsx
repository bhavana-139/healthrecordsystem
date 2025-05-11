import React from 'react';
import './ConfirmationPopup.css';

const ConfirmationPopup = ({ message, onClose }) => {
  if (!message) return null;
  return (
    <div className="confirmation-popup-overlay">
      <div className="confirmation-popup">
        <div className="confirmation-message">{message}</div>
        <button className="close-btn" onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default ConfirmationPopup; 