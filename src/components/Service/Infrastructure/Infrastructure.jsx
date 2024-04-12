import React from 'react'
import Section3 from '../Section3';
import Section4 from '../Section4';
import Hero from '../Hero';
import Section2 from '../Section2';
const Infrastructure= () => {
  return (
    <div className="Infrastructure  px-4 sm:px-12 2xl:px-0 mt-[120px] lg:mt-[150px]  max-w-[1440px] mx-auto">
      
    <Hero
      heading1="Home"
      heading2="Services"
      subheading="Infrastructure "
      description="Identify a suitable property and manage its revenue generation to attain highest ROI possible."
    ></Hero>
    
    <Section2
    para1="With a vision to achieve the world-class infrastructure in the UAE, the country has become the global hub for investment, tourism and trade. "
      para2="Besides, the infrastructural diversification has been the key driving force that attracts sustainable development. Due to the investment-friendly policies and regulation in the infrastructure sector of Dubai,"
      para3="Statistically, almost 46% of the total budget of the UAE in the year 20220 was allocated to the infrastructure in Dubai. At present, $67 has been allocated to the infrastructure towards strategic investment as a part of 2024-26 budget announced in Dubai."
      para4="ensing the countless opportunities of infrastructure investment in Dubai, Unified Investments plays a vital role in addressing the real-time challenges of the clients in their journey to invest in this sector."
    ></Section2>
    <Section3></Section3>
    <Section4></Section4>
  </div>
  )
}

export default Infrastructure
