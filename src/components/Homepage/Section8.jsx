import React from 'react'
import Heading from '../Heading/Heading'
import DoubleScroll from './DoubleScroll';

const Section8 = () => {
  return (
    <div className="section8 bg-subtleBlue py-12 my-12  px-8 sm:px-12 lg:px-24 flex flex-col gap-12">
      <div className="headings">
        <Heading heading="partners" subheading="our partners"></Heading>
      </div>
      <div className='double-scroll'>
        <DoubleScroll/>
      </div>
    </div>
  );
}

export default Section8