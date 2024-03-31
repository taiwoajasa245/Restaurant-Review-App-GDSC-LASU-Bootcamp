import React, { useState } from 'react';

const Place = ({ totalStars }) => {
    const [cardData, setCardData] = useState([
        {
            imageUrl: process.env.PUBLIC_URL + "/img/food.jpeg",
            restaurantName: 'Fog Harbor Fish House',
            recommendation: 'Do you recommend this business?',
            isVisible: true // Add isVisible property to each card
        },
        {
            imageUrl: process.env.PUBLIC_URL + "/img/food.jpeg",
            restaurantName: 'Fog House',
            recommendation: 'Do you recommend this business?',
            isVisible: true // Add isVisible property to each card
        },
        {
            imageUrl: process.env.PUBLIC_URL + "/img/food.jpeg",
            restaurantName: ' Harbor House',
            recommendation: 'Do you recommend this business?',
            isVisible: true // Add isVisible property to each card
        },
        {
            imageUrl: process.env.PUBLIC_URL + "/img/food.jpeg",
            restaurantName: 'Fish House',
            recommendation: 'Do you recommend this business?',
            isVisible: true // Add isVisible property to each card
        },
        {
            imageUrl: process.env.PUBLIC_URL + "/img/food.jpeg",
            restaurantName: 'Fog  Fish House',
            recommendation: 'Do you recommend this business?',
            isVisible: true // Add isVisible property to each card
        },
        // Add more card data objects as needed
    ]);

    const removeCard = (indexToRemove) => {
        setCardData(prevCardData =>
            prevCardData.filter((_, index) => index !== indexToRemove)
        );
    };

    const handleRatingChange = (event) => {
        const selectedRating = parseInt(event.target.value, 10);
        console.log(`User rated: ${selectedRating} stars`);
    };

    return (
        <div className='w-full p-5'>
            <h1 className='text-lg font-extrabold pb-7'>Visited one of these places recently?</h1>
            {cardData.map((card, index) => (
                <PlaceCard key={index} card={card} index={index} removeCard={removeCard} handleRatingChange={handleRatingChange} />
            ))}
            <div className='my-10 mb-15'>
                <p className='text-center font-bold text-blue-500 hover:underline'>
                    Show more suggestions
                </p>
            </div>
        </div>
    );
};

const PlaceCard = ({ card, index, removeCard, handleRatingChange }) => {
    const handleCancel = () => {
        removeCard(index);
    };

    return (
        <div className={`mt-2 ${card.isVisible ? '' : 'hidden'}`}>
            <div className='bg-white rounded-lg flex p-2 shadow-md'>
                {/* Image */}
                <div className='m-1 mr-2'>
                    <img
                        src={card.imageUrl}
                        alt="Card Image"
                        className="w-[80px] rounded"
                    />
                </div>

                {/* Details */}
                <div className="w-full">
                    <h2 className="font-bold mb-2">{card.restaurantName}</h2>
                    <p className="text-xs">{card.recommendation}</p>

                    {/* Star rating button */}
                    <div className='mt-3 flex'>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <label key={value} className="">
                                <img
                                    src={process.env.PUBLIC_URL + "/img/star.png"}
                                    alt="Star Icon"
                                    value={value}
                                    onClick={handleRatingChange}
                                />
                            </label>
                        ))}
                    </div>

                </div>
                {/* Cancel Button */}
                <div className='h-auto'>
                    <button onClick={handleCancel} className="pb-14">
                        <img src={process.env.PUBLIC_URL + "/img/cancel.png"} alt="Dismiss Icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Place;
