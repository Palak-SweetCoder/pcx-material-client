import React from 'react';
import winson from '../../assets/images/winson.png';
import marilou from '../../assets/images/marilou.png';
import ressie from '../../assets/images/ressie.png';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'We are not a gamer but gaming PCs handle music production very well. With this company I was able to save some money.',
            img: winson,
        },
        {
            _id: 2,
            name: 'Marilou Hermann',
            review: 'Es un procesador muy bueno para trabajo profesional, en estos momentos no tengo un tarjeta gráfica pero me permite realizar render de muy.',
            img: marilou,
        },
        {
            _id: 3,
            name: 'Ressie Rutherford',
            review: 'Received a replacement from PCX. All was fine until it updated the GPIO drivers and it started the whole loop all over again. This is AMAZING.',
            img: ressie,
        },
    ];

    return (
        <section className="container mx-auto p-4 lg:p-0 mb-20">
            <div className="text-center mb-10">
                <h3 className="text-secondary text-xl font-semibold mb-3">
                    TESTIMONIALS
                </h3>
                <h2 className="text-4xl text-primary font-bold">
                    WHAT OUR CLIENT SAYS?
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {reviews.map((review) => (
                    <Review key={review._id} review={review}></Review>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
