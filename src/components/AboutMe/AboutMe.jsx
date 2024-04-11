import React from 'react'

import Section3 from '../Service/Section3';

import Hero from '../Service/Hero';
import First from "../Homepage/Section3"
import Section2 from '../Service/Section2';
import Section4 from '../Homepage/Section4';
const AboutMe = () => {
  return (
    <div className="Business mt-[120px] lg:mt-[150px]  ">
     <div className='max-w-[1440px] mx-auto px-4 sm:px-12 2xl:px-0'>
     <Hero
      heading1="Home"
      heading2="Business"
      subheading="Unified Capital And Investment"
      description="We’ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully."
    />
      </div>
  <div className='max-w-[1440px] mx-auto '>

    <First></First>
  </div>
  <div className=''>

    <Section4/>
  </div>
  <div className='max-w-[1440px] mx-auto my-12 px-4 sm:px-12 2xl:px-0'>

    <Section3></Section3>
  </div>
  </div>
  )
}

export default AboutMe
