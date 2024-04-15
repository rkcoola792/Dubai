import React from 'react'
import Section3Card from './Section3Card'

const Section3 = () => {
  return (
    <div className='other-insights flex flex-col justify-center items-center my-6 '>
      <div className="heading flex flex-col text-center justify-center items-center my-6 gap-6 ">
        <h2 className='text-3xl font-bold text-mainBlue'>Other Insights</h2>
        <p className='w-[75%] text-gray-600'>Sed nec pharetra felis, in ultrices neque. Phasellus varius semper tellus, ac imperdiet erat commodo id. Aenean lobortis justo et velit ornare malesuada.</p>
        </div>

        <div className="other-insights-col grid lg:grid-cols-3 justify-between items-center gap-8">
            <Section3Card heading="Long March 9 Rocket Will Be a Game-changer for China’s Space" 
            subheading="SpaceX’s Starship spacecraft and super heavy rocket – the gleaming stainless steel rocket en"
             img="/insights1.webp" 
             source="Space and Universe" 
             read="7 mins read">

             </Section3Card>
            <Section3Card heading="Long March 9 Rocket Will Be a Game-changer for China’s Space" 
            subheading="SpaceX’s Starship spacecraft and super heavy rocket – the gleaming stainless steel rocket en"
             img="/insights2.webp" 
             source="Space and Universe" 
             read="7 mins read">

             </Section3Card>
            <Section3Card heading="Long March 9 Rocket Will Be a Game-changer for China’s Space" 
            subheading="SpaceX’s Starship spacecraft and super heavy rocket – the gleaming stainless steel rocket en"
             img="/insights3.webp" 
             source="Space and Universe" 
             read="7 mins read">

             </Section3Card>
        </div>
      </div>
  )
}

export default Section3
