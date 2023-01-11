import React from 'react';
import { ImFacebook, ImInstagram, ImLinkedin, ImTwitter } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 lg:p-20">
                    <div>
                        <h3 className="text-white text-3xl font-bold mb-3">
                            CONTACT US
                        </h3>
                        <p>
                            Email: pcxhelp@gmail.com <br />
                            Phone: +14-698-254-3658
                        </p>
                        <p>
                            &copy; COPYRIGHT ELECTRO MAX{' '}
                            {new Date().getFullYear()}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-white">
                            IMPORTANT LINKS
                        </h3>
                        <div className="flex flex-col text-neutral items-start">
                            <button className="btn btn-ghost">
                                {' '}
                                <Link to="/about">About Us</Link>{' '}
                            </button>
                            <button className="btn btn-ghost">
                                Privacy Policy
                            </button>
                            <button className="btn btn-ghost">
                                Terms & Condition
                            </button>
                            <button className="btn btn-ghost">Legal</button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white text-3xl font-bold mb-3">
                            FOLLOW US ON
                        </h3>
                        <div className="flex text-secondary">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ImFacebook className="mr-4" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ImTwitter className="mr-4" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ImInstagram className="mr-4" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ImLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
