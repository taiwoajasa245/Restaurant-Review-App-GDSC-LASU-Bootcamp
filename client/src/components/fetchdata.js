import React, { useState, useEffect } from 'react';

function Fetchdata() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://restaurant-review-app-gdsc-lasu-bootcamp-server.vercel.app/api/data');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    {/* Render fetched data here */}
                    <ul>
                        {data.data.map(item => (
                            <li key={item.id}>{[item.name, item.price]}</li>
                        ))}

                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Fetchdata; 
