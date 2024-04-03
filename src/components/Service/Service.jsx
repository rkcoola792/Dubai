import React from 'react'
import Hero from './Hero'
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

const Service = () => {
  return (
    <div className="service  px-4 sm:px-12 2xl:px-0  2xl:mx-[20%] 3xl:mx-[25%] 4xl:mx-[30%] 5xl:mx-[35%] ">
      <Hero
        heading1="Home"
        heading2="Real Estate"
        subheading="Tourism & Hospitality"
        description="We’ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully."
      ></Hero>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </div>
  );
}

export default Service
