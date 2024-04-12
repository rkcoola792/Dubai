import React from 'react'
import Section3 from '../Section3';
import Section4 from '../Section4';
import Hero from '../Hero';
import Section2 from '../Section2';
const HealthCare = () => {
  return (
    <div className="HealthCare  px-4 sm:px-12 2xl:px-0 mt-[120px] lg:mt-[150px]  max-w-[1440px] mx-auto">
      
      <Hero
        heading1="Home"
        heading2="Services"
        subheading="Healthcare"
        description="Identify a suitable property and manage its revenue generation to attain highest ROI possible."
      ></Hero>
      
      <Section2
      para1="In the first quarter of 2023, the total number of health facilities that were licensed in Dubai was close to 143. On an average, there is 11.5% growth in the healthcare investment sector and Dubai has in turn become the global investment destination in this sector. "
      para2="Undoubtedly, the remarkable growth in facilities and technological development has made Dubai as the preferred destination for investment in this sector. "
      para3=" At Unified Investments, we are a team of financial wizards that collaborates together to address the growing healthcare financial requirements of our clients."
      para4="Dubai is a luxurious getaway for exploring business opportunities in the UAE. In fact, it is the radiant landscape that attracts investors across the world and the healthcare has been one of the magnetic spheres."
      ></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </div>
  )
}

export default HealthCare
