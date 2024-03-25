import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {

    const classN = "text-gray-500  hover:underline hover:text-blue-600 "

    return (
        <>
            <footer className="  text-black bg-[#F7F7F7] ">
                <div className=" px-6 py-12 mx-auto text-black">

                    <div className=" hidden md:flex md:items-center md:justify-between  mt-12 ">
                        <div>
                            <h3 className="font-bold">Product</h3>

                            <div className="flex flex-col items-start mt-4 space-y-4">
                                <a href="#" className={classN}>Overview</a>
                                <a href="#" className={classN}>Features</a>
                                <a href="#" className={classN}>Solutions</a>
                                <a href="#" className={classN}>Tutorials</a>
                                <a href="#" className={classN}>Pricing</a>
                                <a href="#" className={classN}>Releases</a>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-bold ">Company</h2>

                            <div className="flex flex-col items-start mt-4 space-y-4">
                                <a href="#" className={classN}>About us</a>
                                <a href="#" className={classN}>Careers</a>
                                <a href="#" className={classN}>Press</a>
                                <a href="#" className={classN}>News</a>
                                <a href="#" className={classN}>Media kit</a>
                                <a href="#" className={classN}>Contact</a>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold">Resources</h3>

                            <div className="flex flex-col items-start mt-4 space-y-4">
                                <a href="#" className={classN}>Blog</a>
                                <a href="#" className={classN}>Newsletter</a>
                                <a href="#" className={classN}>Events</a>
                                <a href="#" className={classN}>Help center</a>
                                <a href="#" className={classN}>Tutorials</a>
                                <a href="#" className={classN}>Supports</a>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h2 className="font-bold ">Language</h2>

                                <div className="flex flex-col items-start mt-4 space-y-4">
                                    <a href="#" className={classN}>About us</a>


                                </div>
                            </div>

                            <div>
                                <h2 className="font-bold ">Country</h2>

                                <div className="flex flex-col items-start mt-4 space-y-4">
                                    <a href="#" className={classN}>About us</a>


                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='md:hidden'>
                        <div>
                            <h2 className="font-bold ">Language</h2>

                            <div className="flex flex-col items-start mt-4 space-y-4">
                                <a href="#" className={classN}>About us</a>


                            </div>
                        </div>

                        <div>
                            <h2 className="font-bold ">Country</h2>

                            <div className="flex flex-col items-start mt-4 space-y-4">
                                <a href="#" className={classN}>About us</a>


                            </div>
                        </div>

                        <div> 
                            <a href='#' className=''>
                                About
                            </a>
                        </div>



                    </div>



                    <div className="md:flex mt-24 mb-10 ">
                        <p className="text-sm text-gray-500 sm:mt-0 ">Copyright © 2004–2024 Yelp Inc. Yelp,</p>
                        <a href="#">
                            <img src={process.env.PUBLIC_URL + "/img/logo_desktop.png"} className='w-10' alt="Your Image" />
                        </a>
                        <span>,</span>
                        <a href="#">
                            <img src={process.env.PUBLIC_URL + "/img/flower.png"} alt="Your Image" />
                        </a>

                        <p className=" text-sm text-gray-500 sm:mt-0 "> and related marks are registered trademarks of Yelp.</p>


                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;