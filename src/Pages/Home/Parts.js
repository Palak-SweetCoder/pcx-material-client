import React from 'react';
import useParts from '../../hooks/useParts';
import Part from './Part';

const Parts = () => {
    const [parts] = useParts([]);

    return (
        <>
            <div className="container mx-auto mt-20 mb-16">
                <div className="text-center mb-10">
                    <h3 className="text-secondary text-xl font-semibold">
                        OUR MATERIALS
                    </h3>
                    <h2 className="text-primary text-4xl font-bold mb-20">
                        PARTS WE MANUFACTURES
                    </h2>
                </div>
                {/* -----------parts card start---------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 sm:p-0">
                    {parts.map((part) => (
                        <Part part={part} key={part._id}></Part>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Parts;
