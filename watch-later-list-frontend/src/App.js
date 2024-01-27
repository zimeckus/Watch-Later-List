import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddRecord from './components/addRecord';
import RecordList from './components/recordList';

function App() {
  const [records, setRecords] = useState([]);
  console.count();
  useEffect(() => {
    axios.get('http://localhost:5000/api/records')
      .then(res => setRecords(res.data))
      .catch(err => console.error(err));
  }, []);

  const addRecord = (record) => {
    axios.post('http://localhost:5000/api/records', record)
      .then(res => {
        setRecords([...records, res.data]);
      })
      .catch(err => console.error(err));
  };

  const deleteRecord = (id) => {
    axios.delete(`http://localhost:5000/api/records/${id}`)
      .then(() => {
        setRecords(records.filter(record => record._id !== id));
      })
      .catch(err => console.error(err));
  };

  const updateRecord = (id, updatedRecord) => {
    axios.put(`http://localhost:5000/api/records/${id}`, updatedRecord)
      .then(() => {
        setRecords(records.map(record => {
          if (record._id === id) {
            return { ...record, ...updatedRecord };
          }
          return record;
        }));
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      <h1 style={{display: 'flex',justifyContent: 'center', marginTop: '10px'}}>Watch Later List</h1>
      <AddRecord onAdd={addRecord} />
      <RecordList records={records} onDelete={deleteRecord} onUpdate={updateRecord} />
    </div>
  );
}

export default App;
