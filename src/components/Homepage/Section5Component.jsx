import React from 'react'

const Section5Component = ({heading,subheading}) => {
  return (
    <div className='service shadow-md flex gap-4 sm:w-[550px]  sm:p-8 px-2 py-4 rounded-lg mb-8'>
      <div className='left-icon bg-mainBlue sm:w-12 sm:h-12 w-20 h-16 rounded-[50%] flex justify-center items-center '>
        <img src="/Vector-white.png" alt="" className='w-6' />
      </div>
<div className="right-heading sm:w-[80%] w-[100%] flex flex-col gap-2 ">
    <h3 className='text-2xl font-semibold'>{heading}</h3>
    <p className='text-sm leading-7 text-gray-600'> {subheading}</p>
</div>
      <div>
        <div></div>
      </div>
    </div>
  )
}

export default Section5Component
