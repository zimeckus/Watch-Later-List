import React, { useState } from 'react';
import UpdateRecordForm from './updateRecordForm.js';
import './master.css';

const Record = ({ record, onUpdate, onDelete }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleUpdateClick = () => {
    setShowUpdateForm(true);
  };

  const handleUpdateClose = () => {
    setShowUpdateForm(false);
  };

  return (
    <>
      <tr className="record-row">
        {/* <td className="record-cell">{record.name}</td> */}
        <td className="record-cell">
          <a className="record-link" href={record.link} target="_blank" rel="noopener noreferrer">{record.name}</a>
        </td>
        <td className="record-cell">{record.platform}</td>
        <td className="record-cell">{record.genre}</td>
        <td className="record-cell">
          <a className="record-link" href={record.link} target="_blank" rel="noopener noreferrer">{record.link}</a>
        </td>
        <td className="record-cell">
          <button className="record-update-button" onClick={handleUpdateClick}>Update</button>
        </td>
        <td className="record-cell">
          <button className="record-delete-button" onClick={() => onDelete(record._id)}>Delete</button>
        </td>
      </tr>
      {showUpdateForm && (
        <tr>
          <td colSpan="6">
            <UpdateRecordForm record={record} onUpdate={onUpdate} onClose={handleUpdateClose} />
          </td>
        </tr>
      )}
    </>
  );
};

export default Record;
