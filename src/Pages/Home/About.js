import React from 'react';
import mission from '../../assets/images/mission.png';

const About = () => {
    return (
        <section className="container mx-auto mb-20 p-4 lg:p-0">
            <h2 className="text-4xl text-primary font-bold text-center mb-10">
                OUR MISSION & VISIONS
            </h2>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <img className="w-full rounded" src={mission} alt="Album" />

                <div className="card-body">
                    <h3 className="text-3xl text-secondary font-bold">
                        MORE ABOUT US
                    </h3>
                    <p>
                        PCX material works hard to delight our customers every
                        day, and we want you to have peace of mind when shopping
                        for products in our store—including items sold by
                        third-party sellers.
                        <br />
                        <br />
                        PCX material's longstanding A-to-z Guarantee protects
                        you when you buy items that are sold and fulfilled by a
                        third-party seller. It covers both the timely delivery
                        and condition of your items. If you're not happy with
                        either and can't resolve the issue directly with the
                        seller, you can make a claim directly to PCX material
                        for a refund.
                        <br />
                        <br />
                        We are continually looking for new ways to innovate for
                        you, and this year we expanded our A-to-z Guarantee to
                        include a process for resolving personal injury and
                        property damage claims due to a defective product. PCX
                        material is the first and only company that we are aware
                        of that offers this level of protection for customers
                        when purchasing products from third-party sellers.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
