import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './AdminDashboard.css'; 
import FacultyStatistics from './FacultyStatistics'; 
import StudentStatistics from './StudentStatistics';
import RegisterPS from './RegisterPS';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>PRODUCT DEVELOPMENT PORTAL</h1>
        <div className="menu-icon">
          <span>☰</span>
        </div>
      </header>
      <div className="admin-body">
        <nav className="sidebar">
          <ul>
            <li>
              <Link to="register-ps">Registered PS</Link>
            </li>
            <li>
              <Link to="faculty-statistics">Faculty Statistics</Link>
            </li>
            <li>
              <Link to="student-statistics">Student Statistics</Link>
            </li>
          </ul>
        </nav>
        <div className="admin-content">
          <Routes>
            <Route path="faculty-statistics" element={<FacultyStatistics />} />
            <Route path="student-statistics" element={<StudentStatistics/>} />
            <Route path="register-ps" element={<RegisterPS/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
