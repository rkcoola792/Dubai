import React from 'react'
import CenterHeader from './CenterHeader';

const Header = () => {
  return (
    <div className="Header sticky w-full shadow-lg h-[100px] flex justify-between px-8 sm:px-12 lg:px-24 items-center">
      <div className='logo'>
        <img src="/Header Logo.png" alt="logo" className='w-36' />
      </div>
      <CenterHeader/>
      <div className='contact-us-button bg-mainBlue text-white p-2 px-4 rounded-full'>Contact Us</div>
    </div>
  );
}

export default Header


