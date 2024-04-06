import React from "react";

const Section5Component = ({ heading, subheading }) => {
  return (
    <div className="service p-8 border border-gray-100 flex gap-4 2xl:gap-8 sm:w-[48%] flex-wrap  sm:p-8  rounded-lg mb-8 shadow-lg justify-center  ">
      <div className="left-icon bg-mainBlue sm:w-12 sm:h-12 w-16 h-16 2xl:w-20 2xl:h-20 rounded-[50%] flex justify-center items-center ">
        <img src="/Vector-white.png" alt="icon" className="w-6 2xl:w-10 " />
      </div>
      <div className="right-heading sm:w-[80%] w-[100%] flex flex-col gap-4  ">
        <h3 className="text-2xl font-semibold 2xl:text-3xl">{heading}</h3>
        <p className="text-sm leading-7 text-gray-600 2xl:text-lg 2xl:leading-8">
          {" "}
          {subheading}
        </p>
      </div>
    </div>
  );
};

export default Section5Component;
