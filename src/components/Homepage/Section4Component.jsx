import React from 'react'

const Section4Component = ({icon,heading}) => {
  return (
    <div className="w-[180px] h-[160px] border border-gray-300 rounded-lg flex flex-col gap-2 py-4 px-4 bg-subtleBlue cursor-pointer">
      <div className="icon">
        <img src="/Vector.png" alt="" className='w-6'/>
      </div>
      <div className="heading text-xs leading-5">{heading}</div>
    </div>
  );
}

export default Section4Component
