import React from 'react'
import { useState } from 'react';

function BodyFunction() {

    const [searchQuery, setSearchQuery] = useState('');
    const [location, setLocation] = useState('');

    return (

        <div className='w-full p-5 md:flex   md:w-full  md:flex-row-reverse md:items-center md:justify-evenly '>
            <div className=' w-full md:w-auto p-2 '>
                <img src={process.env.PUBLIC_URL + "/img/headerimg.svg"} alt="Your Image" />
            </div>

            <div className='mt-4'>
                <div>
                    <h1 className='font-bold text-2xl mb-5'>
                        Find a business to review
                    </h1>
                </div>

                <div className='mb-2 '>
                    <p className='text-base'>
                        Review anything from your favorite patio spot to your local flower shop.
                    </p>
                </div>

                <div>
                    <div className="p-4 md:flex ">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Try lunch, yoga studio, plumk"
                            className="p-2 rounded shadow-lg bg-white w-full"
                        />
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="San Francisco, CA"
                            className="p-2 rounded shadow-lg bg-white w-full mt-2 md:mt-0"
                        />
                    
                    </div>
                </div>
            </div>

        </div>

    )
}

export default BodyFunction