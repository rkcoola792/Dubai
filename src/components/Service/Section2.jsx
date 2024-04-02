import React from 'react'
import Heading from '../Heading/Heading'
import { StarIcon } from '../StarIcon/StarIcon';

const Section2 = () => {
  return (
    <div className="section2  py-12 my-12   ">
      <div className="right-6 absolute w-12">
        <StarIcon></StarIcon>
      </div>
      <div className="top-heading">
        <Heading
          heading="description"
          subheading="Service description"
        ></Heading>
      </div>
      <div className="bottom sm:flex my-12 ">
        <div className="left sm:w-[50%] flex flex-col gap-4 ">
          <div className="left-subheadings flex gap-2">
            <div className="mt-1 ml-2">
              <img src="/tick-circle.png"></img>
            </div>
            <div></div>
            <h1 className="w-[85%] text-[#555555] ">
              Subodh Bajpai believes in a personalized approach. He and his team
              take the time to understand the unique requirements and
              aspirations of your business before recommending the most suitable
              loan options. 
            </h1>
          </div>
          <div className="left-subheadings flex gap-2">
            <div className="mt-1 ml-2">
              <img src="/tick-circle.png"></img>
            </div>
            <h1 className="w-[85%] text-[#555555] ">
              Subodh Bajpai believes in a personalized approach. He and his team
              take the time to understand the unique requirements and
              aspirations of your business before recommending the most suitable
              loan options. 
            </h1>
          </div>
          <div className="left-subheadings flex gap-2">
            <div className="mt-1 ml-2">
              <img src="/tick-circle.png"></img>
            </div>
            <h1 className="w-[85%] text-[#555555] ">
              Subodh Bajpai believes in a personalized approach. He and his team
              take the time to understand the unique requirements and
              aspirations of your business before recommending the most suitable
              loan options. 
            </h1>
          </div>
          <div className="left-subheadings flex gap-2">
            <div className="mt-1 ml-2">
              <img src="/tick-circle.png"></img>
            </div>
            <h1 className="w-[85%] text-[#555555] ">
              Subodh Bajpai believes in a personalized approach. He and his team
              take the time to understand the unique requirements and
              aspirations of your business before recommending the most suitable
              loan options. 
            </h1>
          </div>
        </div>
        <div className="right sm:w-[50%] mt-6 sm:mt-0">
          <img src="/image 38.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section2
