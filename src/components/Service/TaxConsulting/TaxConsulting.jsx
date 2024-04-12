import React from 'react'
import Section3 from '../Section3';
import Section4 from '../Section4';
import Hero from '../Hero';
import Section2 from '../Section2';
const TaxConsulting = () => {
  return (
    <div className="TaxConsulting  px-4 sm:px-12 2xl:px-0 mt-[120px] lg:mt-[150px]  max-w-[1440px] mx-auto">
      
    <Hero
      heading1="Home"
      heading2="Service"
      subheading="Tax Consulting "
      description="We’ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully."
    ></Hero>
    
    <Section2
    para1=""
      para2=""
      para3=""
      para4=""
    ></Section2>
    <Section3></Section3>
    <Section4></Section4>
  </div>
  )
}

export default TaxConsulting
