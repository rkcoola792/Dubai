import React from 'react'
import Heading from '../Heading/Heading'
import { StarIcon } from '../StarIcon/StarIcon';

const Section2 = () => {
  return (
    <div className="section2     ">
      <div className="right-6 absolute w-12">
        <StarIcon></StarIcon>
      </div>
      <div className="top-heading">
        <Heading
          heading="description"
          subheading="Service description"
        ></Heading>
      </div>
      <div className="bottom lg:flex-row lg:justify-between  flex flex-col justify-center my-12 ">
        <div className="left lg:w-[50%] flex flex-col gap-4 ">
          <div className="left-subheadings flex gap-2 ">
            <div className="mt-2 lg:mt-1 ml-2">
              <img src="/tick-circle.png" className=''></img>
            </div>
            <h1 className="lg:w-[85%] text-[#555555] 2xl:text-xl">
              Subodh Bajpai believes in a personalized approach. He and his team
              take the time to understand the unique requirements and
              aspirations of your business before recommending the most suitable
              loan options. 
            </h1>
          </div>
          <div className="left-subheadings flex gap-2">
            <div className="mt-2 lg:mt-1 ml-2">
              <img src="/tick-circle.png"></img>
            </div>
            <h1 className="lg:w-[85%] text-[#555555] 2xl:text-xl ">
              Subodh Bajpai believes in a personalized approach. He and his team
              take the time to understand the unique requirements and
              aspirations of your business before recommending the most suitable
              loan options. 
            </h1>
          </div>
          <div className="left-subheadings flex gap-2">
            <div className="mt-2 lg:mt-1 ml-2">
              <img src="/tick-circle.png"></img>
            </div>
            <h1 className="lg:w-[85%] text-[#555555] 2xl:text-xl ">
              Subodh Bajpai believes in a personalized approach. He and his team
              take the time to understand the unique requirements and
              aspirations of your business before recommending the most suitable
              loan options. 
            </h1>
          </div>
          <div className="left-subheadings flex gap-2 items-start ">
            <div className="mt-2 lg:mt-1 ml-2">
              <img src="/tick-circle.png"></img>
            </div>
            <h1 className="lg:w-[85%] text-[#555555] 2xl:text-xl  ">
              Subodh Bajpai believes in a personalized approach. He and his team
              take the time to understand the unique requirements and
              aspirations of your business before recommending the most suitable
              loan options. 
            </h1>
          </div>
        </div>
        <div className="right  mt-6   lg:mt-0 w-full md:w-auto  ">
          <img src="/image 38.png" alt="" className='md:w-full sm:h-[90%]' />
        </div>
      </div>
    </div>
  );
}

export default Section2
