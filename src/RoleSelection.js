import React from 'react';
import { Link } from 'react-router-dom';

const RoleSelection = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Select Your Role</h1>
      <Link to="/admin-login">
        <button>Admin</button>
      </Link>
      {/* Add more roles as needed */}
    </div>
  );
};

export default RoleSelection;
