import React from 'react'
import Heading from '../Heading/Heading'
import { StarIcon } from '../StarIcon/StarIcon';

const Section6 = () => {
  return (
    <div className="section6 blogs bg-subtleBlue py-12 my-12  px-8 sm:px-12 lg:px-24 relative">
      <div className="absolute ">
        <StarIcon></StarIcon>
      </div>
      <div className="top">
        <Heading heading="blogs" subheading="latest post"></Heading>
      </div>
    </div>
  );
}

export default Section6
