import React from 'react';
import icon_1 from '../assets/images/icons/1.png'
import icon_2 from '../assets/images/icons/2.png'
import icon_3 from '../assets/images/icons/3.png'
import icon_4 from '../assets/images/icons/4.png'
const Feature = () => {
    return (
        <div className='bg-[#ECEAE3] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-9 px-60'>
            <div className='w-5/6'>
                <img className='w-12' src={icon_1} alt="" />
                <h2 className='text-2xl font-semibold'>Awesome Aroma</h2>
                <p className='text-sm'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='w-5/6'>
                <img className='w-12' src={icon_2} alt="" />
                <h2 className='text-2xl font-semibold'>High Quality</h2>
                <p className='text-sm'>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className='w-5/6'>
                <img className='w-12' src={icon_3} alt="" />
                <h2 className='text-2xl font-semibold'>Pure Grades</h2>
                <p className='text-sm'>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className='w-5/6'>
                <img className='w-12' src={icon_4} alt="" />
                <h2 className='text-2xl font-semibold'>Proper Roasting</h2>
                <p className='text-sm'>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default Feature;