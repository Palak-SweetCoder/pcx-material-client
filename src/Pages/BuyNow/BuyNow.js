import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const BuyNow = () => {
    const { partsId } = useParams();
    const [part, setPart] = useState({});
    const [user] = useAuthState(auth);

    // To load specific data depending on specific id
    useEffect(() => {
        const url = `http://localhost:5000/parts/${partsId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPart(data));
    }, [part, partsId]);

    return (
        <div className="container mx-auto p-4 lg:p-0 lg:flex items-center justify-around">
            <div className="card card-compact lg:w-96 bg-base-100 shadow-xl mt-20 mb-20">
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
                            // onClick={() => navigateToBuyNow(part._id)}
                            className="btn btn-secondary rounded-full text-white"
                        >
                            Purchase
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-primary rounded-3xl lg:w-96">
                <div className="p-6">
                    <form>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">
                                    Name
                                </span>
                            </label>
                            <input
                                type="text"
                                disabled
                                defaultValue={user?.displayName}
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">
                                    Email
                                </span>
                            </label>
                            <input
                                type="email"
                                disabled
                                defaultValue={user?.email}
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">
                                    Address
                                </span>
                            </label>
                            <input
                                type="address"
                                placeholder="Your address"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">
                                    Phone
                                </span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your Phone"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>

                        <input
                            className="btn w-full max-w-xs text-white btn-secondary mt-3"
                            type="submit"
                            value="Complete purchase"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;
