import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


    return (
        <nav className="bg-whiteb border p-4 border-b-gray mb-6 ">
            <div className="w-full">

                {/* Logo */}
                <div className="">
                    <Link to="/" className="text-gray-800 text-xl font-bold">
                        <div >
                            <img src={process.env.PUBLIC_URL + "/img/yelp_logo.svg"} className="w-16 " alt="Your Image" />
                        </div>
                    </Link>
                </div>

               
            </div>
        </nav>
    );
};

export default Navbar;

