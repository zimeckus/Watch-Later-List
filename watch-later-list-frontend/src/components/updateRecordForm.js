import React, { useState } from 'react';
import { platformOptions, genreOptions } from './options';
import './master.css';

const UpdateRecordForm = ({ record, onUpdate, onClose }) => {
  const [updatedRecord, setUpdatedRecord] = useState({
    name: record.name,
    platform: record.platform,
    genre: record.genre,
    link: record.link,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecord({ ...updatedRecord, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(record._id, updatedRecord);
    onClose();
  };

  return (
    <div className="update-record-form">
      <h2>Update Record</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Name:</label>
          <input type="text" name="name" value={updatedRecord.name} onChange={handleChange} />
        </div>
        <div className="form-row">
          <label>Platform:</label>
          <select name="platform" value={updatedRecord.platform} onChange={handleChange}>
            <option value="">Select Platform</option>
            {platformOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <label>Genre:</label>
          <select name="genre" value={updatedRecord.genre} onChange={handleChange}>
            <option value="">Select Genre</option>
            {genreOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <label>Link:</label>
          <input type="text" name="link" value={updatedRecord.link} onChange={handleChange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateRecordForm;
