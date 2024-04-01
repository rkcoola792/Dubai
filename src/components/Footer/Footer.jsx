import React from 'react'
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FooterComponent from './FooterComponent';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer bg-mainBlue px-8 sm:px-12 lg:px-12 py-6 flex flex-col gap-12">
      <div className="top flex justify-between items-center">
        <div className="left-logo ">
          <img src="/logo-white.png" alt="logo" className="w-36" />
        </div>
        <div className="center-links flex justify-center items-center gap-8">
          <p className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
            Home
          </p>
          <p className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
            Services
          </p>
          <p className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
            About
          </p>
          <p className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
            Our Partners
          </p>
          <p className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
            Blog
          </p>
          <p className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
            Media & Article
          </p>
        </div>

        <div className="right-move-to-top flex justify-center items-center gap-4">
          {/* <h1 className="text-white cursor-pointer opacity-70 hover:opacity-100 transition duration-200 ease-linear hover:ease-linear">
            Go To Top{" "}
          </h1> */}
          {/* <div className="circle-to-top bg-secondaryBlue rounded-[50%] w-12 h-12 flex justify-center items-center cursor-pointer">
            <ArrowUpwardIcon className="scale-75"></ArrowUpwardIcon>
          </div> */}
          <div className="contact-us-button bg-white text-mainBlue p-2 px-4 font-semibold rounded-full cursor-pointer">
            Contact Us
          </div>
        </div>
      </div>
      {/* <div className="bottom flex justify-between items-center">
        <div className="left-components flex gap-4">
          <FooterComponent icon={} heading="" />
          <FooterComponent icon={} heading="" />
          <FooterComponent icon={} heading="" />
        </div>
        <div className="right-copyright text-white cursor-pointer opacity-50 hover:opacity-70 transition duration-200 ease-linear hover:ease-linear ">
          <h1>{currentYear} Subodh Bajpai. All rights reserved.</h1>
        </div>
      </div> */}
    </div>
  );
}

export default Footer
