import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ payableOrder }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { _id, price, name, email } = payableOrder;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ----------HANDLE ALL ERRORS------------

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setSuccess('');
        setProcessing(true);

        // ----------CONFIRM PAYMENTS------------
        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            });
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        } else {
            setCardError('');
            console.log(paymentIntent);
            setTransactionId(paymentIntent.id);
            setSuccess('Congratulation!!! Payment Success.');
            // ------------UPDATE DATABASE---------------
            const payment = {
                order: _id,
                transactionId: paymentIntent.id,
            };
            fetch(`http://localhost:5000/orders/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    setProcessing(false);
                    console.log(data);
                });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="mt-3">
                <CardElement
                    className="border px-1 lg:px-2 py-3 rounded"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className="btn btn-primary rounded-full text-white px-6 mt-6"
                    type="submit"
                    disabled={!stripe || !clientSecret || success}
                >
                    Pay now
                </button>
            </form>
            {cardError && <p className="text-red-500">{cardError}</p>}
            {success && (
                <div className="text-green-500">
                    <p>{success}</p>
                    <p>
                        Your Transaction Id:{' '}
                        <span className="text-secondary font-bold">
                            {transactionId}
                        </span>
                    </p>
                </div>
            )}
        </>
    );
};

export default CheckoutForm;
