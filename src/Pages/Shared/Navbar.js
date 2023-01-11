import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </>
    );

    return (
        <>
            <div className="bg-base-100 navbar">
                <div className="navbar-start lg:mx-auto">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {menuItems}
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="btn btn-ghost normal-case text-xl text-primary"
                    >
                        PCX-MATERIAL
                    </Link>
                </div>

                {/* ---------------for desktop view--------------- */}

                <div className="navbar-center hidden lg:flex mx-auto">
                    <ul className="menu menu-horizontal px-1">{menuItems}</ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
