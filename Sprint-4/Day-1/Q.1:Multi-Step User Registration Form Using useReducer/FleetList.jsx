//This just passes the data and handlers down.
//code/src/FleetList.jsx
import React from 'react';
import AddFleetForm from './AddFleetForm';
const FleetList = ({ fleets, onFleetAdded }) => {
    return (
        <div>
            <h2>Fleet List</h2> 
            <AddFleetForm onFleetAdded={onFleetAdded} />
            <ul>
                {fleets.map(fleet => (
                    <li key={fleet.id}>{fleet.name} - {fleet.type}</li>
                ))}
            </ul>
        </div>
    );
}   
export default FleetList;