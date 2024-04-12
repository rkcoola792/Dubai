import { CalendarMonth, Person } from '@mui/icons-material'
import React from 'react'

const Blog = ({heading,subheading,description,date,author}) => {
  return (
    <div className='flex flex-col gap-4  bg-white p-6 rounded-lg border border-gray-200 lg:w-[70%] justify-between'>
      <div className="heading font-bold text-mainBlue uppercase">{heading}</div>
      <div className="subheading  capitalize text-3xl  font-semibold">{subheading}</div>
      <div className="description text-gray-600 leading-7">{description}</div>
      <div className="date-author flex gap-4 items-center">
      <div className='flex gap-1'>
      <CalendarMonth className='scale-75'></CalendarMonth>
        <p >
        {date}
        </p>
      </div>
     <div className='flex gap-2'>
     <Person></Person> 
     <p ><span></span>{author}</p> 
     </div>
       
      </div>
    </div>
  )
}

export default Blog
