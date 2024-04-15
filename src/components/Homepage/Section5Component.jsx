import React from "react";
import { Link } from "react-router-dom";

const Section5Component = ({ heading, subheading ,link}) => {
  return (
    
    <div className="service p-6  border border-gray-100 lg:flex-row flex flex-col gap-4 2xl:gap-8 sm:w-[48%]  lg:p-8  rounded-lg mb-8 shadow-lg justify-center items-center text-center lg:text-left lg:items-start  ">
      {/* <Link to={link}> */}
      
      <div className="left-icon  bg-mainBlue sm:w-12 sm:h-12 w-16 h-16 2xl:w-20 2xl:h-20 rounded-[50%] flex justify-center items-center ">
        <img src="/Vector-white.webp" alt="icon" className="w-6 2xl:w-10 " />
      </div>
      <div className="right-heading lg:w-[80%] w-[100%] flex flex-col gap-4  ">
        <h3 className="text-2xl font-semibold 2xl:text-3xl">{heading}</h3>
        <p className="text-sm leading-7 text-gray-600 2xl:text-lg 2xl:leading-8">
          {" "}
          {subheading}
        </p>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Section5Component;
