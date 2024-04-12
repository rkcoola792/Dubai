import React from 'react'
import Section3 from '../Section3';
import Section4 from '../Section4';
import Hero from '../Hero';
import Section2 from '../Section2';
const RenewableEnergy = () => {
  return (
    <div className="Renewable Energy px-4 sm:px-12 2xl:px-0 mt-[120px] lg:mt-[150px]  max-w-[1440px] mx-auto">
      
    <Hero
      heading1="Home"
      heading2="Services"
      subheading="Renewable Energy"
      description="Become Part Of Sustainable Emirates By Investing In Dubai's Renewable Energy Sector With Unified Investment."
    ></Hero>
    
    <Section2
     para1="Dubai is fastest-growing city in the world. The increased population of Dubai has led to growing demand for electricity generation and water production. "
     para2="The Government of UAE plans to meet the increased demand by promoting green energy, making it an ideal sector to invest in. Dubai is one of the countries in the world to generate the cheapest solar power. "
     para3="Dubai has introduced cutting-edge initiatives to embrace suitability to combat climate change, reduce the impact of global warming, and actively contribute to the United Nations Sustainable Development Goals 2030."
     para4="Reports suggest that the government plans to make solar panels a mandatory requirement for all buildings in the UAE by 2030. His Highness Sheikh Mohammed bin Rashid Al Maktoum, Vice President, Prime Minister of the UAE, and Ruler of Dubai envisioned making the emirate the smartest and most sustainable city in the world."
     ></Section2>
    <Section3></Section3>
    <Section4></Section4>
  </div>
  )
}

export default RenewableEnergy
