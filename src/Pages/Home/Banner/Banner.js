import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../image/banner.jpg'
const Banner = () => {
    return (
        <div className='py-40 '>
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="w-1/2 rounded-lg" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Buy The <span className='text-pink-600'>Best Quality</span> Phone's From Us
                    </h1>
                    <p className="py-6">The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.</p>
                    <Link to='/'><button className="btn btn-active bg-pink-600 border-0 text-white bold">Learn more</button></Link>
                </div>
            </div>
        </div>
    </div>
 );
};

export default Banner;