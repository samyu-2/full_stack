import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentStatistics.css';

const StudentStatistics = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = () => {
    // Perform any logic here if needed (e.g., form validation, API calls)
    
    // Redirect to the desired page
    navigate('/StudentStat');
  };

  return (
    <>
      <div className="student-statistics-container">
        <div className="student-form">
          <div className="form-group">
            <label htmlFor="student-name">STUDENT NAME *</label>
            <input type="text" id="student-name" placeholder="Type here..." />
          </div>
          <div className="form-group">
            <label htmlFor="statement-title">PROBLEM STATEMENT TITLE :</label>
            <input type="text" id="statement-title" placeholder="Type here..." />
          </div>
          <div className="form-group">
            <label htmlFor="department">DEPARTMENT *</label>
            <input type="text" id="department" placeholder="Type here..." />
          </div>
          <button className="submit-button" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="SEARCH STUDENT NAME..." />
      </div>
    </>
  );
};

export default StudentStatistics;
