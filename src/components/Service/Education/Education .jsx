import React from 'react'
import Section3 from '../Section3';
import Section4 from '../Section4';
import Hero from '../Hero';
import Section2 from '../Section2';
const Education  = () => {
  return (
    <div className="Education px-4 sm:px-12 2xl:px-0 mt-[120px] lg:mt-[150px]  max-w-[1440px] mx-auto">
      
      <Hero
        heading1="Home"
        heading2="Services"
        subheading="Education"
        description="Identify a suitable property and manage its revenue generation to attain highest ROI possible."
      ></Hero>
      
      <Section2
      para1="With the passage of time, the education sector has diversified in Dubai, specifically, after March 2020. In the post-COVID era, the competitive landscape of education system transformed drastically."
      para2="Currently, 15.5% of the overall $17.1 billion budget of 2023 is represented by education in the UAE. At Unified Investments, we continuously facilitate the growing requirements of our clients seeking prospects of investing in the education sector."
      para3="Whether it is in the context of business investor, private education business owners or the other investors, we support our clients with the fully-managed investment plans in Dubai. "
      para4="From using the advanced methodologies to add value to the investment plan of the investors, we offer the comprehensive suite of data-driven tools to manage investment performance."
      ></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </div>
  )
}

export default Education 
