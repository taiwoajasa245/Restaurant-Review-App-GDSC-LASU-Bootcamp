import axios from 'axios';
import React, { useState } from 'react'

const Comingsoon = () => {
    const [emailname, setemailName] = useState('');
    

    function submitEmail(event) {
        event.preventDefault();
        axios.post('http://localhost:4000/create', { emailname })
            .then(res => {
                console.log(res)
                
            }).catch(err => {
                console.log(err);
            })

    }


    return (
        <div>
            <div className="bg-gray-100 dark:bg-gray-800">
                <div className="min-h-screen flex items-center justify-center">
                    <div className="max-w-2xl w-full px-4">
                        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Coming Soon!</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">Our website is under construction. We'll be back soon!
                        </p>
                        <form onSubmit={submitEmail} className="flex flex-col md:flex-row justify-center items-center gap-4">
                            <input className="w-full md:w-80  py-2 px-4 border text-gray-800 dark:text-white border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700" onChange={e => setemailName(e.target.value)} type="email" placeholder="Enter your email address" />
                            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 border dark:bg-blue-800">Notify Me</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comingsoon;