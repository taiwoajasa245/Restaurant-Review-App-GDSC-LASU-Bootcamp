import React, { useState, useEffect } from 'react';
import axios from "axios";

function Fetchdata() {
    const [data, setData] = useState(null);
    const url = process.env.REACT_APP_SERVER_URL;

 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/api/data`);
                setData(response);
                // console.log(response);

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
