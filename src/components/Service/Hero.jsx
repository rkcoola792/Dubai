import React from 'react'
import HexagonIcon from "@mui/icons-material/Hexagon";
const Hero = ({img,heading1,heading2,subheading,description}) => {
  return (
    <div className="hero-section rounded-lg my-12">
      <div className="background-image flex flex-col gap-8 items-center text-center relative">
        <img src="service.png" className="z-10 "></img>
        <div className="headings z-20 absolute w-[50%] top-[25%] flex flex-col gap-8 justify-center items-center">
          <h1 className="capitalize text-white text-2xl flex items-center gap-2 font-semibold ">
            {heading1}
            <span className=''>
              <HexagonIcon></HexagonIcon>
            </span>
            {heading2}
          </h1>
          <h1 className="capitalize text-white text-5xl font-bold">{subheading}</h1>
          <h1 className="capitalize text-white opacity-00"> {description}</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero
