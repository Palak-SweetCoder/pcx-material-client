import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex flex-col items-center mt-4">
                        <div className="avatar">
                            <div className="mb-3">
                                <img
                                    className="rounded-full"
                                    src={review.img}
                                    style={{ width: 90, height: 90 }}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className="text-xl font-semibold text-secondary">
                                {review.name}
                            </h4>
                            <small className="text-yellow-400">
                                Rating: {review.rating}
                            </small>
                        </div>
                    </div>
                    <p>{review.review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
