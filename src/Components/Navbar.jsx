import React from 'react';
import navImg from '../assets/images/more/15.jpg'
import logo from '../assets/images/more/logo1.png'
const Navbar = () => {
    return (
        <div className='bg-cover bg-center text-center flex justify-center items-center gap-5' style={{backgroundImage: `url(${navImg})`}}>
            <div><img className='w-14' src={logo} alt="" /></div>
            <h1 className='text-3xl text-white'>Espresso Emporium</h1>
        </div>
    );
};

export default Navbar;