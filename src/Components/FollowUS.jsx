import React from 'react';
import img1 from '../assets/images/cups/Rectangle 10.png'
import img2 from '../assets/images/cups/Rectangle 11.png'
import img3 from '../assets/images/cups/Rectangle 12.png'
import img4 from '../assets/images/cups/Rectangle 13.png'
import img5 from '../assets/images/cups/Rectangle 14.png'
import img6 from '../assets/images/cups/Rectangle 15.png'
import img7 from '../assets/images/cups/Rectangle 16.png'
import img8 from '../assets/images/cups/Rectangle 9.png'
const FollowUS = () => {
    return (
        <div>
            <div className='text-center m-5'>
                <p>Follow Us Now</p>
                <h2 className='text-2xl font-semibold'>Follow on Instagram</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <img className='w-[360px]' src={img1} alt="" />
                <img className='w-[360px]' src={img2} alt="" />
                <img className='w-[360px]' src={img3} alt="" />
                <img className='w-[360px]' src={img4} alt="" />
                <img className='w-[360px]' src={img5} alt="" />
                <img className='w-[360px]' src={img6} alt="" />
                <img className='w-[360px]' src={img7} alt="" />
                <img className='w-[360px]' src={img8} alt="" />
            </div>
        </div>
    );
};

export default FollowUS;