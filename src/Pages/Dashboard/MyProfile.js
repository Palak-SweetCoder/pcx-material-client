import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <h2 className="text-4xl text-primary font-bold text-center">
                Welcome to your profile
            </h2>
            <div className="p-4">
                <div className="card lg:w-96 bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">{user.displayName}</h2>
                        <p>Email: {user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
