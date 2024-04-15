import React from 'react'

const Section3Card = ({heading,subheading,img,source,read}) => {
  return (
    <div className='insight-card flex flex-col gap-2 '>
      <div className="img w-full"><img src={img} alt="insight-image " className='w-full' /></div>
      <div className="heading text-xl font-semibold">{heading}...</div>
      <div className="subheading text-gray-600">{subheading}...</div>
      <div className="bottom-read flex gap-2 font-semibold">
        <div className="source">{source}</div>
        <div className="seprator">|</div>
        <div className="read">{read}</div>
      </div>
    </div>
  )
}

export default Section3Card
