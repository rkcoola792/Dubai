
import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  // const currentYear = new Date().getFullYear();
  return (
    <div className="footer bg-mainBlue px-4 sm:px-12 lg:px-12 md:py-6 py-12">
      <div className="top lg:flex-row flex flex-col lg:justify-between lg:items-center gap-4">
        <div className="left-logo ">
          <img src="/logo-white.png" alt="logo" className="w-36" />
        </div>
        <div className="center-links md:flex-row flex flex-col gap-4  lg:justify-center lg:items-center lg:gap-8 px-2 text-2xl md:text-base   md:mt-0">
          <Link to="/">
            <p className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
              Home
            </p>
          </Link>
          <Link to="service">
            <p className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
              Services
            </p>
          </Link>
          <Link to="/">
            <p className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
              About
            </p>
          </Link>
          <Link to="">
            <p className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
              Our Partners
            </p>
          </Link>
          <Link to="blogs">
            <p className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
              Blog
            </p>
          </Link>
          <Link to="/insights">
            <p className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
              Media & Article
            </p>
          </Link>
        </div>
        <Link to="/contact-us">
          <div className="contact-us-button bg-white text-mainBlue p-3  font-semibold rounded-full cursor-pointer w-fit px-8 text-xl sm:text-base mt-4 sm:mt-0">
            Contact Us
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer
