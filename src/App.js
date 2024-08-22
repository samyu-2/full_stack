import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RoleSelection from './RoleSelection';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
        {/* Add more top-level routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
