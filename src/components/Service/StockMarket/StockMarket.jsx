import React from 'react'
import Section3 from '../Section3';
import Section4 from '../Section4';
import Hero from '../Hero';
import Section2 from '../Section2';
const StockMarket = () => {
  return (
    <div className="StockMarket px-4 sm:px-12 2xl:px-0 mt-[120px] lg:mt-[150px]  max-w-[1440px] mx-auto">
      
      <Hero
        heading1="Home"
        heading2="Services"
        subheading="Stock market"
        description="Identify a suitable property and manage its revenue generation to attain highest ROI possible."
      ></Hero>
      
      <Section2
      para1="Dubai Financial Market is one of the leading financial markets in the UAE region. It is one of the largest stock exchanges in the Middle East, providing Dubai and non-Dubai residents with vast opportunities to attain financial goals."
      para2="Investors from any country and any background can trade in DFM. The Dubai Financial Market stands out as a prominent financial market in the region, establishing Dubai as a global financial hub."
      para3="It caters to the investors worldwide. Dubai Financial Market functions as a secondary market for trading securities issued by public shareholding companies, "
      para4="If you are planning to invest in the Dubai Financial Market without any hassle, then contact Unified Investments. Unified Investments makes trading in the Dubai Financial Market seamless for investors."
      ></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </div>
  )
}

export default StockMarket
