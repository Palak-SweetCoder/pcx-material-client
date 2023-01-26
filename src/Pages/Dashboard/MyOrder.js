import axios from 'axios';
import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from '@tanstack/react-query';
import MyOrderTable from './MyOrderTable';

const MyOrder = () => {
    const [user] = useAuthState(auth);

    const {
        data: orders,
        isLoading,
        refetch,
    } = useQuery(['orders', user], () =>
        axios.get(`http://localhost:5000/orders?email=${user.email}`)
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
        <div>
            <h2 className="text-4xl text-primary font-bold text-center">
                Here all my orders: {orders.data?.length}
            </h2>

            <div className="overflow-x-auto">
                <table className="table w-full mt-9">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Parts name</th>
                            <th>Email</th>
                            <th>Delete</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.data?.map((order, index) => (
                            <MyOrderTable
                                index={index}
                                key={order._id}
                                order={order}
                                refetch={refetch}
                            ></MyOrderTable>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;
