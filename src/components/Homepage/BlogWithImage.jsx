import React from 'react'
import Blog from './Blog'
import { CalendarMonth,Person } from '@mui/icons-material';

const BlogWithImage = ({ heading, subheading, description, date, author }) => {
  return (
    <div className="blog-with-image sm:flex gap-8 bg-white rounded-lg border border-gray-200 p-6   ">
      <div className="image left ">
        <img src="/blog.png" alt="" className="sm:w-[350px] w-full h-full  object-cover rounded-lg" />
      </div>
      <div className="right sm:w-[60%] flex flex-col justify-between gap-4">
        <div className="heading font-bold text-mainBlue uppercase text-xl mt-4 sm:mt-0">
          {heading}
        </div>
        <div className="subheading  capitalize text-3xl sm:text2xl  font-semibold"><p>{subheading}</p></div>
        <div className="description text-gray-600 leading-7"><p>{description}</p></div>
        <div className="date-author flex gap-6">
          <p className="gap-2">
           <CalendarMonth></CalendarMonth>
          <span>
             
            </span>
          {date}
          </p>
          <p className="flex gap-2">
            <span>
              <Person></Person>
            </span>
            {author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogWithImage
