import React from 'react'
import Single from './Section3Components/Single'
import { StarIcon } from '../StarIcon/StarIcon';
import { SmallStar } from '../StarIcon/SmallStar';
import Heading from '../Heading/Heading';

const Section3 = () => {
  return (
    <div className="px-8 sm:px-12 lg:px-24 flex flex-col gap-12 relative">
      <div className="absolute top-4 right-24 ">
        <StarIcon></StarIcon>
      </div>
      <div className="heading sticky top-24 bg-white p-8 z-40 ">
        <Heading
          heading="Loans"
          subheading="Specialties of Subodh Bajpai"
        ></Heading>
      </div>
      <div className=" flex flex-col gap-6 ">
        <div className="group1 flex flex-col gap-8 sticky top-72 bg-white z-10 my-6 py-4">
          <div className="heading flex gap-2 items-center ">
            <div className="mt-1">
              <SmallStar></SmallStar>
            </div>
            <h1 className="text-2xl font-semibold">Quick Loans</h1>
          </div>

          <div className="elements flex gap-12">
            <Single heading="Unique talent of providing loans up to ₹100 crores within days"></Single>
            <Single heading="Unique talent of providing loans up to ₹100 crores within days"></Single>
            <Single heading="Unique talent of providing loans up to ₹100 crores within days"></Single>
          </div>
        </div>
        <div className="group2 flex flex-col gap-8  sticky top-72 bg-white z-20 my-6 py-4">
          <div className="heading flex gap-2 items-center  ">
            <div className="mt-1">
              <SmallStar></SmallStar>
            </div>
            <h1 className="text-2xl font-semibold">
              PR & Communication Specialist
            </h1>
          </div>

          <div className="elements flex gap-12">
            <Single heading="Unique talent of providing loans up to ₹100 crores within days"></Single>
            <Single heading="Unique talent of providing loans up to ₹100 crores within days"></Single>
            <Single heading="Unique talent of providing loans up to ₹100 crores within days"></Single>
          </div>
        </div>
        <div className="group3 flex flex-col gap-8  sticky top-72 bg-white z-30 my-6 py-4">
          <div className="heading flex gap-2 items-center ">
            <div className="mt-1">
              <SmallStar></SmallStar>
            </div>
            <h1 className="text-2xl font-semibold">
              Promoting Grassroot Entrepreneurship
            </h1>
          </div>

          <div className="elements flex gap-12">
            <Single heading="Unique talent of providing loans up to ₹100 crores within days"></Single>
            <Single heading="Unique talent of providing loans up to ₹100 crores within days"></Single>
            <Single heading="Unique talent of providing loans up to ₹100 crores within days"></Single>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3
