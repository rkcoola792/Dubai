import React from 'react'
import HexagonIcon from "@mui/icons-material/Hexagon";
const Hero = ({img,heading1,heading2,subheading,description}) => {
  return (
    <div className="hero-section rounded-lg sm:my-12 my-6">
      <div className="background-image flex flex-col gap-8 items-center text-center relative">
        <img src={`${img ? img : "service.png"}`} className="z-10 h-[450px] sm:h-auto object-cover rounded-lg my-6 sm:my-0"></img>
        <div className="headings z-20 absolute sm:w-[70%] top-[25%] flex flex-col gap-8 justify-center items-center">
          <h1 className="capitalize text-white text-2xl flex items-center gap-2 font-semibold ">
            {heading1}
            <span className="rotate-90 ml-2">
              <HexagonIcon></HexagonIcon>
            </span>
            {heading2}
          </h1>
          <h1 className="capitalize text-white sm:text-5xl text-3xl font-bold">
            {subheading}
          </h1>
          <h1 className="capitalize text-white opacity-90 w-[90%] leading-7" > {description}</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero
