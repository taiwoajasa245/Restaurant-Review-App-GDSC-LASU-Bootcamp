import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const handleLogin = () => {
        console.log('/login')
    };

    return (
        <nav className="bg-whiteb border p-4 border-b-gray mb-6 ">
            <div className="w-full flex justify-between items-center ">

                {/* Logo */}
                <div className="">
                    <Link to="/" className="text-gray-800 text-xl font-bold">
                        <div >
                            <img src={process.env.PUBLIC_URL + "/img/yelp_logo.svg"} className="w-16 " alt="Your Image" />
                        </div>
                    </Link>
                </div>

                <div className='flex'>
                    <div className='mr-4'>
                        <Link to='/login'>
                            <button onClick={handleLogin} className="bg-white border-gray-300 border text-black font-semibold  py-2 px-5 rounded">
                                Log In
                            </button>
                        </Link>
                    </div>

                    <div className='mr-4 hidden md:flex'>
                        <Link to="/Signup">
                            <button onClick={handleLogin} className="bg-[#d21313] text-white border-gray-300 border  font-semibold  py-2 px-5 rounded">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;

