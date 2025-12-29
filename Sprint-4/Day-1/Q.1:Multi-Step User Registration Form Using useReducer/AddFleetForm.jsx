//This component now includes checks for required fields and correctly clears the form upon submission.
//src/components/AddFleetForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddFleetForm = ({ onFleetAdded }) => {
  const [fleetName, setFleetName] = useState('');
  const [fleetType, setFleetType] = useState('');
  const [error, setError] = useState('');  
    const [successMessage, setSuccessMessage] = useState('');           

    const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!fleetName || !fleetType) {
      setError('Please fill in all required fields.');
      return;
    }
    try {
      const response = await axios.post('/api/fleets', {
        name: fleetName,
        type: fleetType,
        });
        setSuccessMessage('Fleet added successfully!');
        setError('');
        setFleetName('');
        setFleetType('');
        onFleetAdded(response.data);
    } catch (err) {
      setError('Failed to add fleet. Please try again.');
      setSuccessMessage('');
    }
    };
    return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Fleet Name:</label>
        <input
          type="text"
          value={fleetName}
          onChange={(e) => setFleetName(e.target.value)}
        />
      </div>
      <div>
        <label>Fleet Type:</label>
        <input
          type="text"
          value={fleetType}
          onChange={(e) => setFleetType(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <button type="submit">Add Fleet</button>
    </form> 
    );
};
export default AddFleetForm;
