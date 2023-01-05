import React from 'react';
import { Link } from 'react-router-dom';
import lastbanner from '../../../image/lastbanner.jpg'
const LastBanner = () => {
    return (
        <div className="hero py-10">
        <div className="hero-content flex-col lg:flex-row">
            <img src={lastbanner} className="rounded-lg w-96" alt='' />
            <div className='lg:pl-10 sm:pl-0'>
                <h1 className="text-4xl font-bold">Feel The Best <span className='text-pink-600'>Experience</span> <br /> With Our Phones.</h1>
                <p className="py-6">Phone also gives you digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.</p>
                <Link to='/'><button className="btn btn-active bg-pink-600 border-0 text-white bold">Learn more</button></Link>
            </div>
        </div>
    </div>
    );
};

export default LastBanner;