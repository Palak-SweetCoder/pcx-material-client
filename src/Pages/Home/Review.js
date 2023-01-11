import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex flex-col items-center mt-4">
                        <div className="avatar">
                            <div className="mb-3">
                                <img src={review.img} alt="" />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-secondary">
                                {review.name}
                            </h4>
                        </div>
                    </div>
                    <p>{review.review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
