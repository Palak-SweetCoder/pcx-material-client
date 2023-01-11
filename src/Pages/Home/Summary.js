import React from 'react';
import { AiOutlineFlag } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';
import { MdOutlineReviews } from 'react-icons/md';

const Summary = () => {
    return (
        <section className="container mx-auto mb-20 p-4 lg:p-0">
            <div className="text-center">
                <h2 className="text-primary text-4xl font-bold mb-10">
                    OUR BUSINESS SUMMARY
                </h2>
            </div>
            <div>
                <div className="flex justify-center">
                    <div className="stats stats-vertical lg:stats-horizontal shadow text-white text-center w-full bg-primary">
                        <div className="stat p-6">
                            <AiOutlineFlag
                                className="mx-auto mb-3"
                                size={70}
                            ></AiOutlineFlag>
                            <div className="stat-value text-5xl font-bold mb-6">
                                31
                            </div>
                            <h2 className="stat-title text-4xl">Countries</h2>
                        </div>

                        <div className="stat p-6">
                            <IoIosPeople
                                className="mx-auto mb-3"
                                size={70}
                            ></IoIosPeople>
                            <div className="stat-value text-5xl font-bold mb-6">
                                2,100+
                            </div>
                            <h2 className="stat-title text-4xl">
                                Happy Clients
                            </h2>
                        </div>

                        <div className="stat p-6">
                            <MdOutlineReviews
                                className="mx-auto mb-3"
                                size={70}
                            ></MdOutlineReviews>
                            <div className="stat-value text-5xl font-bold mb-6">
                                1,900+
                            </div>
                            <h2 className="stat-title text-4xl">Reviews</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;
