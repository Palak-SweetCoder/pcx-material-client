import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const MyOrderTable = ({ index, order, refetch }) => {
    const { name, partsName, email, _id } = order;

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
                        `https://pcx-material-server.up.railway.app/orders?id=${_id}`
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
                <button
                    onClick={handleCancel}
                    className="btn btn-secondary rounded-full text-white"
                >
                    Cancel
                </button>
            </td>
            <td>
                <button className="btn btn-primary rounded-full text-white">
                    payment
                </button>
            </td>
        </tr>
    );
};

export default MyOrderTable;
