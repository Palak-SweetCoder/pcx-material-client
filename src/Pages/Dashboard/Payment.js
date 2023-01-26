import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
    'pk_test_51MPqaHK3moeJG2vrcjW08DMxKkYXc95JQYdrtGUIJokbc570TiRXodjBjeVh3VtxGfTv1UmfMqwoIn3FTZ4Ra4TZ002DsH5ioi'
);

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`;
    const { data: payableOrder, isLoading } = useQuery(
        ['payableOrder', id],
        () => fetch(url).then((res) => res.json())
    );
    if (isLoading) {
        return (
            <div className="text-center p-20">
                <button className="btn loading text-white btn-secondary">
                    loading...
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto flex justify-center mt-16 p-4 lg:p-0">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-3xl text-primary font-bold">
                        Please pay for:{' '}
                        <span className="text-secondary text-xl">
                            {payableOrder.partsName}
                        </span>
                    </h2>
                    <p>Your name: {payableOrder.name}</p>
                    <p>Email: {payableOrder.email}</p>
                    <p>Total: ${payableOrder.price}</p>

                    <Elements stripe={stripePromise}>
                        <CheckoutForm payableOrder={payableOrder} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
