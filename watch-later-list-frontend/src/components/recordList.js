import React, { useState } from 'react';
import Record from './record';
import { platformOptions, genreOptions } from './options';
import './master.css';

const RecordList = ({ records, onDelete, onUpdate }) => {
  const [platformFilter, setPlatformFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');

  const handlePlatformFilterChange = (e) => {
    setPlatformFilter(e.target.value);
  };

  const handleGenreFilterChange = (e) => {
    setGenreFilter(e.target.value);
  };

  const filteredRecords = records.filter(record => {
    if (platformFilter && record.platform !== platformFilter) {
      return false;
    }
    if (genreFilter && record.genre !== genreFilter && genreFilter !== 'All') {
      return false;
    }
    return true;
  });

  return (
    <div className="record-list-container">
      <div className="filter-container">
      <h2>My Watch List</h2>
        <div className="filter">
          <label className='filtertype'>Platform:</label>
          <select value={platformFilter} onChange={handlePlatformFilterChange}>
            <option value="">All Platforms</option>
            {platformOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="filter">
          <label className='filtertype'>Genre:</label>
          <select value={genreFilter} onChange={handleGenreFilterChange}>
            {genreOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="record-table-container">
        <table className="record-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Platform</th>
              <th>Genre</th>
              <th>Link</th>
              <th>Actions</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map(record => (
              <Record key={record._id} record={record} onDelete={onDelete} onUpdate={onUpdate} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecordList;
