import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/admin-dashboard/*" element={<AdminDashboard />} /> {/* This will handle all routes within AdminDashboard */}
        
        {/* Add more top-level routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
