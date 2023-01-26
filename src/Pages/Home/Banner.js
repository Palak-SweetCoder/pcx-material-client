import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import bannerimg from '../../assets/images/banner-img.png';
import auth from '../../firebase.init';

const Banner = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const getStarted = () => {
        if (user) {
            navigate('/dashboard');
        } else {
            navigate('/login');
        }
    };

    return (
        <>
            <div className="hero min-h-screens bg-[url('/src/assets/images/banner-bg.png')] w-full lg:h-screen bg-no-repeat bg-cover sm:bg-cover">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={bannerimg}
                        className="sm:max-w-sm lg:max-w-lg lg:ml-10"
                        alt=""
                    />
                    <div className="lg:mr-10">
                        <h2 className="text-3xl text-secondary ">
                            Digital Solution
                        </h2>
                        <h1 className="text-5xl font-bold mt-3 mb-3 text-white">
                            We Are The Best PC
                        </h1>
                        <span className="text-5xl font-bold text-white">
                            Parts Provider
                        </span>
                        <p className="py-6">
                            Welcome to PCX Material, Where we design and
                            <br />
                            manufacture the designs our clients deserve.
                            <br />
                            We help you with the digital parts you need.
                        </p>
                        <button
                            onClick={getStarted}
                            className="btn btn-secondary text-white rounded-full"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
