import React from 'react'
import CenterHeader from './CenterHeader';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header sticky top-0 z-[150] bg-white w-full shadow-md h-[100px] flex justify-center   items-center  mx-auto border border-gray-200 ">
      <div className='header flex justify-between items-center w-[1440px] md:mx-12 lg:px-0'>
        
    
      <Link to="/">
        <div className="logo cursor-pointer">
          <img src="/Header Logo.png" alt="logo" className="w-36" />
        </div>
      </Link>
      <CenterHeader />
      <Link to="/contact-us">
        <div className="contact-us-button bg-mainBlue text-white p-3 px-6 rounded-full cursor-pointer">
         <p>Contact Us</p>
        </div>
      </Link>
    </div>
    </div>
  );
}

export default Header


