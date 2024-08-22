import React from 'react';
import './StudentStatistics.css';

const StudentStatistics = () => {
  return (
    <div className="Student-statistics-container">
      <div className="Student-form">
        <div className="form-group">
          <label htmlFor="Student-name">Student NAME *</label>
          <input type="text" id="Student-name" placeholder="Type here..." />
        </div>
        <div className="form-group">
          <label htmlFor="statement-title">PROBLEM STATEMENT TITLE *</label>
          <input type="text" id="statement-title" placeholder="Type here..." />
        </div>
        <div className="form-group">
          <label htmlFor="department">DEPARTMENT *</label>
          <input type="text" id="department" placeholder="Type here..." />
        </div>
        <button className="submit-button">SUBMIT</button>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="SEARCH Student NAME..." />
      </div>
    </div>
  );
};

export default StudentStatistics;
