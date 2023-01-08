import React from 'react';

import { Link } from 'react-router-dom';


const Categories = () => {

    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                <div className="card lg:w-96 md:w-96 sm:w-56 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://s.yimg.com/uu/api/res/1.2/NoQRhHGBqs3yr89l7yiDxg--~B/aD0xMDEzO3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2021-09/25c681c0-1cfe-11ec-b1ed-aff3c2fd2c38.cf.jpg" alt="" className="rounded-xl mt-10" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title font-bold ">Apple</h2>
                        <p>The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.</p>
                        <div className="card-actions">
                            <Link to={`/catergorie/Toyota`}><button className="btn bg-pink-600 border-0 m-10">See Phones</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card lg:w-96 md:w-96 sm:w-56 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a11-2.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title font-bold">Samsung</h2>
                        <p>Honda was the first Japanese automobile manufacturer to release a dedicated luxury brand, Acura, in 1986. Aside from their core automobile and motorcycle businesses, Honda also manufactures garden equipment, marine engines, personal watercraft, power generators, and other products. Since 1986, Honda has been involved with artificial intelligence/robotics research and released their ASIMO robot in 2000</p>
                        <div className="card-actions">
                            <Link to={`/catergorie/Honda`}><button className="btn bg-pink-600 border-0 m-10">See Phones</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card lg:w-96 md:w-96 sm:w-56 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-11-4.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">One Plus</h2>
                        <p>OnePlus releases two lines of smartphones: its flagship "OnePlus" line, and its budget-oriented Nord line. Both lines are equipped with an Android-based operating system known as OxygenOS. OnePlus has also released phones outside of these lines, namely the OnePlus Ace and the OnePlus 10R.</p>
                        <div className="card-actions">
                            <Link to={`/catergorie/Nissan`}><button className="btn bg-pink-600 border-0 m-10">See Phones</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;