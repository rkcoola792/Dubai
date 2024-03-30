import React from 'react'

const Section5Component = ({heading,subheading}) => {
  return (
    <div className='service shadow-lg flex gap-4 w-[500px] p-8 rounded-lg'>
      <div className='left-icon bg-mainBlue w-12 h-12 rounded-[50%] flex justify-center items-center '>
        <img src="/Vector-white.png" alt="" className='w-6' />
      </div>
<div className="right-heading w-[80%] flex flex-col gap-2 ">
    <h1 className='text-2xl font-semibold'>{heading}</h1>
    <p className='text-sm leading-7 text-gray-600'> {subheading}</p>
</div>
      <div>
        <div></div>
      </div>
    </div>
  )
}

export default Section5Component
