import React from 'react';
import banner from '../assets/images/more/3.png'
const Banner = () => {
    return (
        <div className='bg-center bg-cover py-52 px-36 justify-end flex' style={{backgroundImage: `url(${banner})`}}>
            <div className='space-y-5 w-3/6'>
                <h1 className='text-white text-4xl'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='text-white'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='btn'>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;