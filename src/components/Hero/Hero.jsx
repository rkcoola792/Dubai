import React from 'react'
import PhoneIcon from "@mui/icons-material/Phone";
const Hero = () => {
  return (
    <div className="Hero mx-8 sm:mx-12 lg:mx-24 bg-mainBlue h-[500px] my-12 rounded-3xl overflow-hidden flex w-">
      <div className="left-container-content w-[50%] flex ">
        <div className="left-icons flex flex-col "></div>
        <div className="right-content py-16 px-12 flex flex-col gap-6">
          <h1 className="text-white text-[36px]">Hello I’m Subodh Bajpai !</h1>
          <h1 className="text-white text-6xl font-semibold">
            An
            <span className="text-secondaryBlue"> Investor</span>
          </h1>
          <p className="text-white leading-7 opacity-70">
            About Funding Guru Subodh Bajpai: Empowering Entrepreneurs with
            Business Loans in Delhi NCR and Beyond. With years of experience
            providing credit-line to businesses.
          </p>
          <div className="contact flex gap-6">
            <div className="contact-us-button bg-secondaryBlue text-mainBlue p-2 px-4 font-semibold rounded-full cursor-pointer items-center flex justify-center">
              Get started
            </div>
            <div className="phone flex justify-center items-center bg-secondaryBlue w-12 h-12 rounded-[50%]">
              <PhoneIcon></PhoneIcon>
            </div>
            <div className="phone-number flex justify-center items-center">
              <p className='text-white -ml-4'>0800555443</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-container-image w-[50%]">
        <img
          src="/hero-image.jpg"
          alt="hero-image"
          className="object-cover w-"
        />
      </div>
    </div>
  );
}

export default Hero
