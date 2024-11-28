import React from 'react';
import banner from '../assets/images/more/1.png'
import { BsCup } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const PopularProducts = () => {
    return (
        <div className='text-center bg-cover space-y-3  py-5' style={{backgroundImage: `url(${banner})`}}>
            <p className='text-[#1B1A1A]'>--- Sip & Savor ---</p>
            <h1 className='text-2xl font-bold'>Our Popular Products</h1>
            <Link to="/addcoffee" className='bg-[#E3B577] btn text-white'>Add Coffee <span><BsCup /></span></Link>
        </div>
    );
};

export default PopularProducts;