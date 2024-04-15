import React from 'react'
import Heading from '../Heading/Heading'
import { StarIcon } from '../StarIcon/StarIcon';

const Section2 = ({para1,para2,para3,para4,img}) => {
  return (
    <div className="section2">
      <div className="right-6 absolute w-12">
        {/* <StarIcon></StarIcon> */}
      </div>
      <div className="top-heading">
        <Heading
          heading="description"
          subheading="Service description"
        ></Heading>
      </div>
      <div className="bottom lg:grid lg:grid-cols-2 lg:justify-between  flex flex-col justify-center my-12 ">
        <div className="left  flex flex-col gap-4 ">
          <div className="left-subheadings flex gap-2 ">
            <div className="mt-2 lg:mt-1 ml-2">
              <img src="/tick-circle.webp" className=''></img>
            </div>
            <h1 className="lg:w-[85%] text-[#555555] 2xl:text-xl">
              {para1?para1:"Subodh Bajpai believes in a personalized approach. He and his team take the time to understand the unique requirements and aspirations of your business before recommending the most suitable loan options."} 
            </h1>
          </div>
          <div className="left-subheadings flex gap-2">
            <div className="mt-2 lg:mt-1 ml-2">
              <img src="/tick-circle.webp"></img>
            </div>
            <h1 className="lg:w-[85%] text-[#555555] 2xl:text-xl ">
              {para2?para2:"Subodh Bajpai believes in a personalized approach. He and his team take the time to understand the unique requirements and aspirations of your business before recommending the most suitable loan options."} 
            </h1>
          </div>
          <div className="left-subheadings flex gap-2">
            <div className="mt-2 lg:mt-1 ml-2">
              <img src="/tick-circle.webp"></img>
            </div>
            <h1 className="lg:w-[85%] text-[#555555] 2xl:text-xl ">
            {para3?para3:"Subodh Bajpai believes in a personalized approach. He and his team take the time to understand the unique requirements and aspirations of your business before recommending the most suitable loan options."} 
            </h1>
          </div>
          <div className="left-subheadings flex gap-2 items-start ">
            <div className="mt-2 lg:mt-1 ml-2">
              <img src="/tick-circle.webp"></img>
            </div>
            <h1 className="lg:w-[85%] text-[#555555] 2xl:text-xl  ">
            {para4?para4:"Subodh Bajpai believes in a personalized approach. He and his team take the time to understand the unique requirements and aspirations of your business before recommending the most suitable loan options."} 
            </h1>
          </div>
          <div className="left-subheadings flex gap-2 items-start ">
            <div className="mt-2 lg:mt-1 ml-2">
              <img src="/tick-circle.webp"></img>
            </div>
            <h1 className="lg:w-[85%] text-[#555555] 2xl:text-xl  ">
            {para4?para4:"Subodh Bajpai believes in a personalized approach. He and his team take the time to understand the unique requirements and aspirations of your business before recommending the most suitable loan options."} 
            </h1>
          </div>
        </div>
        <div className="right mt-6 lg:mt-0 ">
          <img src="/image 38.webp" alt="" className='w-full ' />
        </div>
      </div>
    </div>
  );
}

export default Section2
