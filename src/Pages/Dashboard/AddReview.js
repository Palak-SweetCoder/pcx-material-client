import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {
    const addReview = (e) => {
        e.preventDefault();
        const clientReview = {
            name: e.target.name.value,
            img: e.target.img.value,
            rating: e.target.rating.value,
            review: e.target.review.value,
        };

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(clientReview),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success('Success: your review submitted');
                    e.target.reset();
                }
            });
    };

    return (
        <div>
            <h2 className="text-4xl text-primary font-bold text-center">
                Want's to say something?
            </h2>
            <div className="flex justify-center mt-10">
                <div className="bg-primary rounded-3xl lg:w-96">
                    <div className="p-6">
                        <form onSubmit={addReview}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white">
                                        Name
                                    </span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    required
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white">
                                        Image
                                    </span>
                                </label>
                                <input
                                    name="img"
                                    type="text"
                                    required
                                    placeholder="Your image url"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white">
                                        Rating
                                    </span>
                                </label>
                                <input
                                    name="rating"
                                    type="number"
                                    min={1}
                                    max={5}
                                    required
                                    placeholder="Write your review"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white">
                                        Review
                                    </span>
                                </label>
                                <input
                                    name="review"
                                    type="text"
                                    required
                                    placeholder="Write your review"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>

                            <input
                                className="btn w-full max-w-xs text-white btn-secondary mt-5"
                                type="submit"
                                value="Submit review"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
