import React from 'react';
import './LabReports.css';

const labResults = [
  {
    date: '2024-05-01',
    test: 'Hemoglobin',
    value: '13.5 g/dL',
    normalRange: '12-16 g/dL',
  },
  {
    date: '2024-05-01',
    test: 'WBC',
    value: '6,200 /µL',
    normalRange: '4,000-11,000 /µL',
  },
];

const reportImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/QR_code_example.svg/1200px-QR_code_example.svg.png'; // Example barcode/QR

const LabReports = () => {
  return (
    <div className="lab-reports-panel">
      <h2>Recent Lab Test Results</h2>
      <table className="lab-results-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Test</th>
            <th>Result</th>
            <th>Normal Range</th>
          </tr>
        </thead>
        <tbody>
          {labResults.map((result, idx) => (
            <tr key={idx}>
              <td>{result.date}</td>
              <td>{result.test}</td>
              <td>{result.value}</td>
              <td>{result.normalRange}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="lab-report-image-section">
        <h3>Report Image / Barcode</h3>
        <img src={reportImage} alt="Lab Report Barcode" className="lab-report-image" />
      </div>
    </div>
  );
};

export default LabReports; 