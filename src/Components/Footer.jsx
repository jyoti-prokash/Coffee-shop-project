import React from 'react';
import logo from '../assets/images/more/logo1.png'
const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
  <aside className='w-56'>
    <img className='w-14' src={logo} alt="" />
    <h2 className='text-xl'>
      Espresso Emporium
    </h2>
    <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
  </aside>
  <nav>
    <h1 className='text-2xl font-semibold'>Connect with Us</h1>
    <div>
        <form className='space-y-3'>
            <input className='px-3 py-2' type="text" name="name" placeholder='Name'/> <br />
            <input className='px-3 py-2' type="email" name="" placeholder='Email'/> <br />
            <textarea className='px-3 py-2' name="" id="" cols="30" rows="5"></textarea> <br />
            <button className='btn'>Send Message</button>
        </form>
    </div>
  </nav>
</footer>
    );
};

export default Footer;