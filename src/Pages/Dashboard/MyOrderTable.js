import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyOrderTable = ({ index, order, refetch }) => {
    const { name, partsName, email, _id, price, paid, transactionId } = order;

    const handleCancel = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You want to cancel this order!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7258DB',
            cancelButtonColor: '#f77225',
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(
                        `https://gentle-rose-purse.cyclic.app/orders?id=${_id}`
                    )
                    .then(() => refetch());
                Swal.fire(
                    'Deleted!',
                    'Your order has been cancelled.',
                    'success'
                );
            }
        });
    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{partsName}</td>
            <td>{email}</td>
            <td>
                {!paid && (
                    <button
                        onClick={handleCancel}
                        className="btn btn-secondary rounded-full text-white"
                    >
                        Cancel
                    </button>
                )}
            </td>
            <td>
                {price && !paid && (
                    <Link to={`/dashboard/payment/${_id}`}>
                        <button className="btn btn-primary rounded-full text-white">
                            payment
                        </button>
                    </Link>
                )}
                {price && paid && (
                    <div className="text-center">
                        <span className="text-primary">Paid</span>
                        <br />
                        <small>Transaction Id:</small>
                        <br />
                        <small className="text-green-500">
                            {transactionId}
                        </small>
                    </div>
                )}
            </td>
        </tr>
    );
};

export default MyOrderTable;
