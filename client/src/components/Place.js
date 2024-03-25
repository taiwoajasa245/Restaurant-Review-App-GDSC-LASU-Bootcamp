import React from 'react'
import { useState } from 'react';


function Place({ totalStars }) {
    // Replace with actual data (e.g., image URL, restaurant name, location, rating)
    const imageUrl = process.env.PUBLIC_URL + "/img/food.jpeg";
    const restaurantName = 'Fog Harbor Fish House ';
    const recommendation = 'Do you recommend this business?'



    const [rating, setRating] = useState(null);

    const handleRatingChange = (event) => {
        const selectedRating = parseInt(event.target.value, 10);
        setRating(selectedRating);
        console.log(`User rated: ${selectedRating} stars`);
    };

    const [isVisible, setIsVisible] = useState(true);

    const handleCancel = () => {
        // Hide the card when Cancel button is clicked
        setIsVisible(false);
    };




    const [selectedStars, setSelectedStars] = useState(0);

    const handleStarClick = (starIndex) => {
        setSelectedStars(starIndex + 1);
        console.log(starIndex);
    };


    return (
        <div className='w-full p-5'>

            <div>
                <h1 className='text-lg font-extrabold pb-7'>
                    Visited one of theses places recently?
                </h1>
            </div>

            <div className='mt-2'>
                <div className={`bg-white rounded-lg flex p-2  shadow-md ${isVisible ? '' : 'hidden'}`}>
                    {/* Image */}
                    <div className='m-1 mr-2'>
                        <img
                            src={imageUrl}
                            alt="Card Image"
                            className="w-[80px] rounded"
                        />
                    </div>


                    {/* Details */}
                    <div className="w-full">
                        <h2 className=" font-bold mb-2">{restaurantName}</h2>

                        <p className=" text-xs ">
                            {recommendation}
                        </p>
                        <div className="">
                            {/* Star rating button */}

                            <div>

                                <div className='flex mt-3'>
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <label key={value} className="">
                                            {/* <input
                                                type="radio"
                                                name="rating"
                                                value={value}
                                                onChange={handleRatingChange}
                                            /> */}
                                            <img
                                                src={process.env.PUBLIC_URL + "/img/star.png"}
                                                alt="Card Image"
                                                name="rating"
                                                value={value}
                                                onClick={handleRatingChange}


                                            />

                                        </label>
                                    ))}
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className='h-auto'>
                        <button
                            onClick={handleCancel}
                            className="pb-14"
                        >
                            <img src={process.env.PUBLIC_URL + "/img/cancel.png"} alt="diss miss " />
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-2'>
                <div className={`bg-white rounded-lg flex p-2  shadow-md ${isVisible ? '' : 'hidden'}`}>
                    {/* Image */}
                    <div className='m-1 mr-2'>
                        <img
                            src={imageUrl}
                            alt="Card Image"
                            className="w-[80px] rounded"
                        />
                    </div>


                    {/* Details */}
                    <div className="w-full">
                        <h2 className=" font-bold mb-2">{restaurantName}</h2>

                        <p className=" text-xs ">
                            {recommendation}
                        </p>
                        <div className="">
                            {/* Star rating button */}

                            <div>

                                <div className='flex mt-3'>
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <label key={value} className="">
                                            {/* <input
                                                type="radio"
                                                name="rating"
                                                value={value}
                                                onChange={handleRatingChange}
                                            /> */}
                                            <img
                                                src={process.env.PUBLIC_URL + "/img/star.png"}
                                                alt="Card Image"
                                                name="rating"
                                                value={value}
                                                onClick={handleRatingChange}


                                            />

                                        </label>
                                    ))}
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className='h-auto'>
                        <button
                            onClick={handleCancel}
                            className="pb-14"
                        >
                            <img src={process.env.PUBLIC_URL + "/img/cancel.png"} alt="diss miss " />
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-2'>
                <div className={`bg-white rounded-lg flex p-2  shadow-md ${isVisible ? '' : 'hidden'}`}>
                    {/* Image */}
                    <div className='m-1 mr-2'>
                        <img
                            src={imageUrl}
                            alt="Card Image"
                            className="w-[80px] rounded"
                        />
                    </div>


                    {/* Details */}
                    <div className="w-full">
                        <h2 className=" font-bold mb-2">{restaurantName}</h2>

                        <p className=" text-xs ">
                            {recommendation}
                        </p>
                        <div className="">
                            {/* Star rating button */}

                            <div>

                                <div className='flex mt-3'>
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <label key={value} className="">
                                            {/* <input
                                                type="radio"
                                                name="rating"
                                                value={value}
                                                onChange={handleRatingChange}
                                            /> */}
                                            <img
                                                src={process.env.PUBLIC_URL + "/img/star.png"}
                                                alt="Card Image"
                                                name="rating"
                                                value={value}
                                                onClick={handleRatingChange}


                                            />

                                        </label>
                                    ))}
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className='h-auto'>
                        <button
                            onClick={handleCancel}
                            className="pb-14"
                        >
                            <img src={process.env.PUBLIC_URL + "/img/cancel.png"} alt="diss miss " />
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-2'>
                <div className={`bg-white rounded-lg flex p-2  shadow-md ${isVisible ? '' : 'hidden'}`}>
                    {/* Image */}
                    <div className='m-1 mr-2'>
                        <img
                            src={imageUrl}
                            alt="Card Image"
                            className="w-[80px] rounded"
                        />
                    </div>


                    {/* Details */}
                    <div className="w-full">
                        <h2 className=" font-bold mb-2">{restaurantName}</h2>

                        <p className=" text-xs ">
                            {recommendation}
                        </p>
                        <div className="">
                            {/* Star rating button */}

                            <div>

                                <div className='flex mt-3'>
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <label key={value} className="">
                                            {/* <input
                                                type="radio"
                                                name="rating"
                                                value={value}
                                                onChange={handleRatingChange}
                                            /> */}
                                            <img
                                                src={process.env.PUBLIC_URL + "/img/star.png"}
                                                alt="Card Image"
                                                name="rating"
                                                value={value}
                                                onClick={handleRatingChange}


                                            />

                                        </label>
                                    ))}
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className='h-auto'>
                        <button
                            onClick={handleCancel}
                            className="pb-14"
                        >
                            <img src={process.env.PUBLIC_URL + "/img/cancel.png"} alt="diss miss " />
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-2'>
                <div className={`bg-white rounded-lg flex p-2  shadow-md ${isVisible ? '' : 'hidden'}`}>
                    {/* Image */}
                    <div className='m-1 mr-2'>
                        <img
                            src={imageUrl}
                            alt="Card Image"
                            className="w-[80px] rounded"
                        />
                    </div>


                    {/* Details */}
                    <div className="w-full">
                        <h2 className=" font-bold mb-2">{restaurantName}</h2>

                        <p className=" text-xs ">
                            {recommendation}
                        </p>
                        <div className="">
                            {/* Star rating button */}

                            <div>

                                <div className='flex mt-3'>
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <label key={value} className="">
                                            {/* <input
                                                type="radio"
                                                name="rating"
                                                value={value}
                                                onChange={handleRatingChange}
                                            /> */}
                                            <img
                                                src={process.env.PUBLIC_URL + "/img/star.png"}
                                                alt="Card Image"
                                                name="rating"
                                                value={value}
                                                onClick={handleRatingChange}


                                            />

                                        </label>
                                    ))}
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className='h-auto'>
                        <button
                            onClick={handleCancel}
                            className="pb-14"
                        >
                            <img src={process.env.PUBLIC_URL + "/img/cancel.png"} alt="diss miss " />
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-2'>
                <div className={`bg-white rounded-lg flex p-2  shadow-md ${isVisible ? '' : 'hidden'}`}>
                    {/* Image */}
                    <div className='m-1 mr-2'>
                        <img
                            src={imageUrl}
                            alt="Card Image"
                            className="w-[80px] rounded"
                        />
                    </div>


                    {/* Details */}
                    <div className="w-full">
                        <h2 className=" font-bold mb-2">{restaurantName}</h2>

                        <p className=" text-xs ">
                            {recommendation}
                        </p>
                        <div className="">
                            {/* Star rating button */}

                            <div>

                                <div className='flex mt-3'>
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <label key={value} className="">
                                            {/* <input
                                                type="radio"
                                                name="rating"
                                                value={value}
                                                onChange={handleRatingChange}
                                            /> */}
                                            <img
                                                src={process.env.PUBLIC_URL + "/img/star.png"}
                                                alt="Card Image"
                                                name="rating"
                                                value={value}
                                                onClick={handleRatingChange}


                                            />

                                        </label>
                                    ))}
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className='h-auto'>
                        <button
                            onClick={handleCancel}
                            className="pb-14"
                        >
                            <img src={process.env.PUBLIC_URL + "/img/cancel.png"} alt="diss miss " />
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-2'>
                <div className={`bg-white rounded-lg flex p-2  shadow-md ${isVisible ? '' : 'hidden'}`}>
                    {/* Image */}
                    <div className='m-1 mr-2'>
                        <img
                            src={imageUrl}
                            alt="Card Image"
                            className="w-[80px] rounded"
                        />
                    </div>


                    {/* Details */}
                    <div className="w-full">
                        <h2 className=" font-bold mb-2">{restaurantName}</h2>

                        <p className=" text-xs ">
                            {recommendation}
                        </p>
                        <div className="">
                            {/* Star rating button */}

                            <div>

                                <div className='flex mt-3'>
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <label key={value} className="">
                                            {/* <input
                                                type="radio"
                                                name="rating"
                                                value={value}
                                                onChange={handleRatingChange}
                                            /> */}
                                            <img
                                                src={process.env.PUBLIC_URL + "/img/star.png"}
                                                alt="Card Image"
                                                name="rating"
                                                value={value}
                                                onClick={handleRatingChange}


                                            />

                                        </label>
                                    ))}
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className='h-auto'>
                        <button
                            onClick={handleCancel}
                            className="pb-14"
                        >
                            <img src={process.env.PUBLIC_URL + "/img/cancel.png"} alt="diss miss " />
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-2'>
                <div className={`bg-white rounded-lg flex p-2  shadow-md ${isVisible ? '' : 'hidden'}`}>
                    {/* Image */}
                    <div className='m-1 mr-2'>
                        <img
                            src={imageUrl}
                            alt="Card Image"
                            className="w-[80px] rounded"
                        />
                    </div>


                    {/* Details */}
                    <div className="w-full">
                        <h2 className=" font-bold mb-2">{restaurantName}</h2>

                        <p className=" text-xs ">
                            {recommendation}
                        </p>
                        <div className="">
                            {/* Star rating button */}

                            <div>

                                <div className='flex mt-3'>
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <label key={value} className="">
                                            {/* <input
                                                type="radio"
                                                name="rating"
                                                value={value}
                                                onChange={handleRatingChange}
                                            /> */}
                                            <img
                                                src={process.env.PUBLIC_URL + "/img/star.png"}
                                                alt="Card Image"
                                                name="rating"
                                                value={value}
                                                onClick={handleRatingChange}


                                            />

                                        </label>
                                    ))}
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className='h-auto'>
                        <button
                            onClick={handleCancel}
                            className="pb-14"
                        >
                            <img src={process.env.PUBLIC_URL + "/img/cancel.png"} alt="diss miss " />
                        </button>
                    </div>
                </div>
            </div>

            <div className='my-10 mb-15'>
                <p className='text-center font-bold text-blue-500 hover:underline '>
                    Show more suggestions
                </p>
            </div>

        </div>
    )
}

export default Place