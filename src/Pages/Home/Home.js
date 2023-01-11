import React from 'react';
import Banner from './Banner';
import Parts from './Parts';
import Reviews from './Reviews';
import About from './About';
import Summary from './Summary';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <Summary />
            <Reviews />
            <About />
            <Subscribe />
        </div>
    );
};

export default Home;
