import React from 'react'
import CenterHeader from './CenterHeader';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header sticky top-0 z-[100] bg-white w-full shadow-md h-[100px] flex justify-between px-8 sm:px-12  items-center">
      <Link to="/">
        <div className="logo cursor-pointer">
          <img src="/Header Logo.png" alt="logo" className="w-36" />
        </div>
      </Link>
      <CenterHeader />
      <Link to="/contact-us">
        <div className="contact-us-button bg-mainBlue text-white p-2 px-4 rounded-full cursor-pointer">
          Contact Us
        </div>
      </Link>
    </div>
  );
}

export default Header


