import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
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

    const handlePurchase = (e) => {
        e.preventDefault();
        const order = {
            orderId: partsId,
            name: user.displayName,
            email: user.email,
            partsName: part.name,
            myQuantity: e.target.myQuantity.value,
            price: part.price,
            address: e.target.address.value,
            phone: e.target.phone.value,
        };

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success('Successfully Purchased!!!');
                    e.target.reset();
                }
            });
    };

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
                    <p>Price: ${part.price}</p>
                    <div className="card-actions">
                        <button className="btn btn-secondary rounded-full text-white">
                            Purchase
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-primary rounded-3xl lg:w-96">
                <div className="p-6">
                    <form onSubmit={handlePurchase}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">
                                    Name
                                </span>
                            </label>
                            <input
                                name="name"
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
                                name="email"
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
                                name="address"
                                type="text"
                                required
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
                                name="phone"
                                type="number"
                                required
                                placeholder="Your Phone"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">
                                    My quantity
                                </span>
                            </label>
                            <input
                                min={part.minquantity}
                                max={part.quantity}
                                name="myQuantity"
                                type="number"
                                required
                                placeholder="Minimum quantity: 10"
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
