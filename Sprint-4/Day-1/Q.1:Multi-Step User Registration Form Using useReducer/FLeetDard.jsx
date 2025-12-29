//this update the card component to receive the handler functions vis props and add the required buttons.
//src/components/DriverCard.jsx
import React from 'react';
const DriverCard = ({ driver, onUpdateDriver, onDeleteDriver }) => {
    const handleUpdate = () => {
        const updatedData = { ...driver, name: driver.name + ' Updated' };
        onUpdateDriver(driver.id, updatedData);
    };  
    const handleDelete = () => {
        onDeleteDriver(driver.id);
    }
    return (
        <div className="driver-card">
            <h3>{driver.name}</h3>
            <p>License: {driver.license}</p>
            <button onClick={handleUpdate}>Update Driver</button>
            <button onClick={handleDelete}>Delete Driver</button>
        </div>
    );
}
export default DriverCard;


