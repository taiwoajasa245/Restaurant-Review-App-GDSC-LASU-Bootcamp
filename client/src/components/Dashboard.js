import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Dashboard() {
    const [user, setUser] = useState(null);
    const { userId } = useParams(); // Get the userId parameter from the URL
    const url = process.env.REACT_APP_SERVER_URL;
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage upon login

    useEffect(() => {
        // Fetch user information from the backend
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${url}/api/users/${userId}/dashboard`, {
                    headers: {
                        Authorization: `Bearer ${token}` // Include the Bearer token in the request headers
                    }
                });
                setUser(response.data); // Set user data
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        if (token) {
            fetchUser();
        } else {
            console.error('Token not found ')
        }
    }, [token, url, userId]); // Include token, url, and userId in the dependencies array

    return (
        <div>
            {user && (
                <h1>Hello, {user.name}!</h1>
            )}
            <h1>
                Dashboard
            </h1>

            {/* Add other dashboard content here */}
        </div>
    );
}

export default Dashboard;
