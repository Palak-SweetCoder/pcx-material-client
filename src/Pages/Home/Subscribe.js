import React from 'react';
import { BiPaperPlane } from 'react-icons/bi';

const Subscribe = () => {
    return (
        <section className="container mx-auto text-center mb-20 p-4 lg:p-0">
            <h2 className="text-4xl text-primary font-bold mb-10">
                SUBSCRIBE TO OUR NEWSLETTER
            </h2>
            <div className="mx-auto shadow-2xl rounded-2xl p-10">
                <h4 className="text-secondary text-3xl">
                    To get all news about <br /> new business ideas and product
                    stock.
                </h4>
                <div className="mt-10 md:flex lg:flex justify-center">
                    <input
                        type="text"
                        placeholder="Enter your email here"
                        className="input input-bordered w-full max-w-xs mb-4 lg:mb-0"
                    />
                    <button className="btn btn-secondary text-white lg:ml-2 md:ml-2 ml-0">
                        <BiPaperPlane className="text-white mr-2"></BiPaperPlane>
                        <span>Subscribe</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
