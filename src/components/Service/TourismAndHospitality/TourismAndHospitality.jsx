import React from 'react'
import Section3 from '../Section3';
import Section4 from '../Section4';
import Hero from '../Hero';
import Section2 from '../Section2';
const TourismAndHospitality = () => {
  return (
    <div className="TourismAndHospitality px-4 sm:px-12 2xl:px-0 mt-[120px] lg:mt-[150px]  max-w-[1440px] mx-auto">
      
      <Hero
        heading1="Home"
        heading2="Services"
        subheading="Tourism And Hospitality "
        description="Planning to invest in the tourism and hospitality industry in Dubai?"
      ></Hero>
      
      <Section2
      para1="Partner with Unified Investment to enjoy incessant growth and successful investments!"
      para2="Dubai, famously known as the City of Gold, is experiencing incessant growth. The city has emerged as a centre for commerce, tourism, and upscale lifestyle. The ever-rising industries witnessing the boom in Dubai are the tourism sector and real estate."
      para3="Both sectors give immense business opportunities to investors. Dubai can be considered a calculated geographical phenomenon. "
      para4="It shares the boundaries with some of the major countries, making it a global transit hub. It sees visitors from around the world for its beauty and scope. "
      ></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </div>
  )
}

export default TourismAndHospitality
