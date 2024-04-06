import React from 'react'
import Heading from '../Heading/Heading'
import DoubleScroll from './DoubleScroll';

const Section8 = () => {
  return (
    <div className="section8 py-8 bg-subtleBlue sm:py-12 sm:my-12  px-8 sm:px-12 lg:px-12 flex flex-col gap-12">
      <div className='max-w-[1440px] mx-auto'>

    
      <div className="headings">
        <Heading heading="partners" subheading="our partners"></Heading>
      </div>
      <div className='double-scroll'>
        <DoubleScroll/>
      </div>
      </div>
    </div>
  );
}

export default Section8
