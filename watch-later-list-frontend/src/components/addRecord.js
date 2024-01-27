import React, { useState } from 'react';
import { platformOptions, genreOptions } from './options';
import './master.css';

const AddRecord = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [platform, setPlatform] = useState('');
  const [genre, setGenre] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !platform || !genre || !link) return;
    onAdd({ name, platform, genre, link });
    setName('');
    setPlatform('');
    setGenre('');
    setLink('');
  };

  return (
    <div className="add-record-container">
      <h2>Add New Record</h2>
      <form onSubmit={handleSubmit} className="add-record-form">
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div>
          <label>Platform:</label>
          <select value={platform} onChange={(e) => setPlatform(e.target.value)} required>
            <option value="">Select Platform</option>
            {platformOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Genre:</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)} required>
            <option value="">Select Genre</option>
            {genreOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Link:</label>
          <input type="text" value={link} onChange={(e) => setLink(e.target.value)} required/>
        </div>
        <button type="submit">Add Record</button>
      </form>
    </div>
  );
};

export default AddRecord;
