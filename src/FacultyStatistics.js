import React from 'react';
import './FacultyStatistics.css';

const FacultyStatistics = () => {
  return (
    <div className="faculty-statistics-container">
      <div className="faculty-form">
        <div className="form-group">
          <label htmlFor="faculty-name">FACULTY NAME *</label>
          <input type="text" id="faculty-name" placeholder="Type here..." />
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
        <input type="text" placeholder="SEARCH FACULTY NAME..." />
      </div>
    </div>
  );
};

export default FacultyStatistics;
