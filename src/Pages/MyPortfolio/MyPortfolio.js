import React from 'react';

const MyPortfolio = () => {
    return (
        <div className="container mx-auto p-4 lg:p-0 mt-16 mb-16">
            <div className="flex justify-center">
                <div className="card lg:w-2/4 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h4 className="text-2xl font-bold text-primary text-center">
                            PROJECT DEVELOPER
                        </h4>
                        <h5 className="text-xl font-bold text-secondary">
                            CONTACT
                        </h5>
                        <p>Developer name: Palak Sarker</p>
                        <p>Email: pspalak6@gmail.com</p>
                        <div className="divider"></div>
                        <h5 className="text-xl font-bold text-secondary">
                            EDUCATION
                        </h5>
                        <p className="font-bold">
                            Certification: Secondary School Certificate (SSC)
                        </p>
                        <p>Group: Science</p>
                        <p>Result: CGPA 4.73 out of 5.00</p>
                        <p className="font-bold">
                            Certification: Diploma in Engineering
                        </p>
                        <p>Technology: Telecommunication</p>
                        <p>Result: CGPA 3.35 out of 4.00</p>
                        <div className="divider"></div>
                        <h5 className="text-xl font-bold text-secondary">
                            EXPERTISE AS A WEB PROGRAMMER
                        </h5>
                        <p className="font-bold">FRONT-END</p>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>ReactJS</li>
                            <li>Bootstrap5</li>
                            <li>React Bootstrap</li>
                            <li>Tailwind</li>
                            <li>DaisyUI</li>
                            <li>React Toastify</li>
                            <li>Sweet alert</li>
                            <li>React Slick Carousel</li>
                            <li>React Countup</li>
                            <li>React Hook Form</li>
                            <li>Google Firebase</li>
                            <li>React Firebase Hooks</li>
                            <li>Firebase Hosting</li>
                            <li>React query</li>
                            <li>Axios</li>
                            <li>Stripe payment method</li>
                            <li>JWT</li>
                            <li>Hooks</li>
                        </ul>
                        <p className="font-bold">BACK-END</p>
                        <ul>
                            <li>MongoDB</li>
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                            <li>Heroku, Railway, Render, Vercel</li>
                        </ul>
                        <div className="divider"></div>
                        <h5 className="text-xl font-bold text-secondary">
                            MY PROJECTS
                        </h5>
                        <p>
                            GYM WEBSITE:{' '}
                            <a
                                className="underline text-sky-500"
                                href="https://perfect-gym-dc72e.web.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://perfect-gym-dc72e.web.app/
                            </a>
                        </p>
                        <p>
                            INVENTORY WEBSITE:{' '}
                            <a
                                className="underline text-sky-500"
                                href="https://electro-max.web.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://electro-max.web.app/
                            </a>
                        </p>
                        <p>
                            MANUFACTURER WEBSITE:{' '}
                            <a
                                className="underline text-sky-500"
                                href="https://pcx-material.web.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://pcx-material.web.app/
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;
