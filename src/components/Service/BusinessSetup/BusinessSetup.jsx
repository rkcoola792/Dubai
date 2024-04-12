import React from 'react'
import Section3 from '../Section3';
import Section4 from '../Section4';
import Hero from '../Hero';
import Section2 from '../Section2';
const BusinessSetup = () => {
  return (
    <div className="BusinessSetup px-4 sm:px-12 2xl:px-0 mt-[120px] lg:mt-[150px]  max-w-[1440px] mx-auto">
      
    <Hero
      heading1="Home"
      heading2="Services"
      subheading="Business Setup"
      description="Identify a suitable property and manage its revenue generation to attain highest ROI possible."
    ></Hero>
    
    <Section2
    para1="Every business owner wishes to expand beyond borders. Dubai is one of the most lucrative locations for setting up a business or expanding an existing business. "
    para2="Starting a new business or expanding an existing one in an international location can be a daunting task, especially if you don't belong to that place."
    para3="Having professional financial advisors by your side can be very helpful. The city offers endless business and investment opportunities."
    para4="Experts can assist you in unlocking your potential by providing you with support and knowledge to stay competitive without facing any setbacks."
    ></Section2>
    <Section3></Section3>
    <Section4></Section4>
  </div>
  )
}

export default BusinessSetup
