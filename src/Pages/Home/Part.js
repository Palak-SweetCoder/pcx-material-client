import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const navigate = useNavigate();

    const navigateToBuyNow = (id) => {
        navigate(`/buy-now/${id}`);
    };

    return (
        <>
            <div className="card card-compact lg:w-96 mx-auto bg-base-100 shadow-xl">
                <figure>
                    <img className="w-full" src={part.img} alt="" />
                </figure>
                <div className="divider"></div>
                <div className="card-body">
                    <h2 className="card-title">{part.name}</h2>
                    <p>{part.description}</p>
                    <p>Minimum order quantity: {part.minquantity}</p>
                    <p>Available quantity: {part.quantity}</p>
                    <p>Price: {part.price}</p>
                    <div className="card-actions">
                        <button
                            onClick={() => navigateToBuyNow(part._id)}
                            className="btn btn-secondary rounded-full text-white"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Part;
