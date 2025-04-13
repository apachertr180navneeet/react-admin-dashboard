// src/pages/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ setAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin Dashboard</h2>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>
      <div className="alert alert-success">Welcome, Admin!</div>
    </div>
  );
};

export default Dashboard;
