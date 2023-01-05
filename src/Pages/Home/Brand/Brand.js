import React from 'react';
import apple from '../../../image/apple logo.png'
import samsung from '../../../image/samsung logo.png'
import oneplus from '../../../image/oneplus logo.png'
const Brand = () => {
    return (
        <div>
            <h1 className='font-bold text-center text-4xl'>Top Seller all over the world <span className='text-pink-600 text-5xl'>World</span></h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20 items-center my-20'>
                <div>
                    <img className='w-45' src={apple} alt="" />
                </div>
                <div>
                    <img className='w-25' src={samsung} alt="" />
                </div>
                <div>
                    <img className='w-25' src={oneplus} alt="" />
                </div>
            </div>
        </div>


    );
};

export default Brand;