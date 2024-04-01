import React from 'react'
import Hero from './Hero'
import Section2 from './Section2';

const Service = () => {
  return (
    <div className="service  px-8 sm:px-12 lg:px-24">
      <Hero
        heading1="Home"
        heading2="Real Estate"
        subheading="Tourism & Hospitality"
        description="We’ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully."
      ></Hero>
      <Section2></Section2>
    </div>
  );
}

export default Service