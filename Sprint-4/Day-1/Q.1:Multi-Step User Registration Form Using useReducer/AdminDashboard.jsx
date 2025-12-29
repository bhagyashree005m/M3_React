//This component is used to add the logic for update driver and delete vehicle,  incorporating the required edge case handling.
//src/assets/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddFleetForm from './AddFleetForm';
const AdminDashboard = () => {
    const [fleets, setFleets] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        fetchFleets();
        fetchDrivers();
        fetchVehicles();
    }, []);

    const fetchFleets = async () => {
        try {
            const response = await axios.get('/api/fleets');
            setFleets(response.data);
        } catch (err) {
            setError('Failed to fetch fleets.');
        }
    };      
    const fetchDrivers = async () => {
        try {
            const response = await axios.get('/api/drivers');
            setDrivers(response.data);
        }
        catch (err) {
            setError('Failed to fetch drivers.');
        }
    };
    const fetchVehicles = async () => {
        try {
            const response = await axios.get('/api/vehicles');
            setVehicles(response.data);
        } catch (err) {
            setError('Failed to fetch vehicles.');
        }
    };
    const handleFleetAdded = (newFleet) => {
        setFleets([...fleets, newFleet]);

    };

    const handleDeleteVehicle = async (vehicleId) => {
        try {
            await axios.delete(`/api/vehicles/${vehicleId}`);
            setVehicles(vehicles.filter(vehicle => vehicle.id !== vehicleId));
        }
        catch (err) {
            setError('Failed to delete vehicle.');
        }

    };
    const handleUpdateDriver = async (driverId, updatedData) => {
        try {
            const response = await axios.put(`/api/drivers/${driverId}`, updatedData);      
            setDrivers(drivers.map(driver => driver.id === driverId ? response.data : driver));
        } catch (err) {

            setError('Failed to update driver.');
        }
    }
    return (
        <div>
            <h1>Admin Dashboard</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <h2>Fleets</h2>
            <AddFleetForm onFleetAdded={handleFleetAdded} />
            <ul>
                {fleets.map(fleet => (
                    <li key={fleet.id}>{fleet.name} - {fleet.type}</li>
                ))}     
            </ul>
            <h2>Drivers</h2>
            <ul>
                {drivers.map(driver => (
                    <li key={driver.id}>
                        {driver.name} - {driver.licenseNumber}
                        <button onClick={() => handleUpdateDriver(driver.id, { name: 'Updated Name' })}>
                            Update
                        </button>
                    </li>
                ))}
            </ul>       
            <h2>Vehicles</h2>
            <ul>
                {vehicles.map(vehicle => (
                    <li key={vehicle.id}>
                        {vehicle.make} {vehicle.model}
                        <button onClick={() => handleDeleteVehicle(vehicle.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default AdminDashboard;
