import React from 'react';
import error from '../../assets/images/notfound.png';

const NotFound = () => {
    return (
        <div className="container mx-auto p-5">
            <h2 className="text-primary text-4xl font-bold text-center">
                The page you are looking for
            </h2>
            <h2 className="text-primary text-4xl font-bold text-center">
                that's not found!!!
            </h2>
            <div className="flex justify-center">
                <img src={error} alt="" />
            </div>
        </div>
    );
};

export default NotFound;
