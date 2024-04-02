import React from 'react'
import Hero from '../Service/Hero'
import Section2 from '../Service/Section2';
import Section3 from '../Service/Section3';
import Section4 from './Section4';

const Business = () => {
  return (
    <div className="Business px-4 sm:px-12">
      <Hero
        heading1="Home"
        heading2="Business"
        subheading="Unified Capital And Investment"
        description="We’ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully."
      />
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </div>
  );
}

export default Business
