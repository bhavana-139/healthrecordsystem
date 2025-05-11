import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';
import './HealthAnalytics.css';

// Example data
const adherenceData = [
  { name: 'Jan', Adherence: 95 },
  { name: 'Feb', Adherence: 90 },
  { name: 'Mar', Adherence: 92 },
  { name: 'Apr', Adherence: 88 },
  { name: 'May', Adherence: 93 },
];

const heartRateData = [
  { date: 'Mon', bpm: 72 },
  { date: 'Tue', bpm: 75 },
  { date: 'Wed', bpm: 70 },
  { date: 'Thu', bpm: 74 },
  { date: 'Fri', bpm: 73 },
  { date: 'Sat', bpm: 76 },
  { date: 'Sun', bpm: 71 },
];

const statsData = [
  { name: 'Chronic', value: 3 },
  { name: 'Acute', value: 1 },
];
const COLORS = ['#667eea', '#764ba2'];

const HealthAnalytics = () => {
  return (
    <div className="health-analytics-panel">
      <h2>Health Analytics</h2>
      <div className="charts-row">
        <div className="chart-card">
          <h3>Medication Adherence (%)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={adherenceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[80, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="Adherence" fill="#667eea" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-card">
          <h3>Heart Rate Trends (bpm)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={heartRateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="bpm" stroke="#764ba2" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-card">
          <h3>Patient Statistics</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={statsData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                label
              >
                {statsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default HealthAnalytics; 