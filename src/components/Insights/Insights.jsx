import React from 'react'
import Hero from '../Service/Hero'
import Section3 from '../Service/Section3';
import Section2 from './Section2';

const Insights = () => {
  return (
    <div className="insights mt-[120px] lg:mt-[150px] px-4 sm:px-12 2xl:px-0 max-w-[1440px] mx-auto">
      <div className="hero">
        <Hero
          heading1="Home"
          heading2="Insights"
          subheading="Media & Article"
          description="We’ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully."
        ></Hero>
      </div>
      <div className="my-12">
        <Section2></Section2>
        <Section3 />
      </div>
    </div>
  );
}

export default Insights
