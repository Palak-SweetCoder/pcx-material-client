import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input
                    id="dashboard-sidebar"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content lg:w-2/3 p-4 container mx-auto">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="dashboard-sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-48 bg-primary mb-10 rounded text-white  ">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link to="/dashboard">Welcome Page</Link>
                        </li>
                        <div className="divider"></div>
                        <li>
                            <Link to="/dashboard/my-profile">My Profile</Link>
                        </li>
                        <div className="divider"></div>
                        <li>
                            <Link to="/dashboard/my-orders">My Order</Link>
                        </li>
                        <div className="divider"></div>
                        <li>
                            <Link to="/dashboard/add-review">Add Review</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
