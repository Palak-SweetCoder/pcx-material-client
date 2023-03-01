import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery(['reviews'], () =>
        fetch('https://gentle-rose-purse.cyclic.app/reviews', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return (
            <div className="text-center p-20">
                <button className="btn loading text-white btn-secondary">
                    loading...
                </button>
            </div>
        );
    }

    return (
        <section className="container mx-auto p-4 lg:p-0 mb-20">
            <div className="text-center mb-10">
                <h3 className="text-secondary text-xl font-semibold mb-3">
                    TESTIMONIALS
                </h3>
                <h2 className="text-4xl text-primary font-bold">
                    WHAT OUR CLIENT SAYS?
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {reviews?.map((review) => (
                    <Review key={review._id} review={review}></Review>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
