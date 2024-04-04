import React from 'react'
import Blog from './Blog'
import { CalendarMonth,Person } from '@mui/icons-material';

const BlogWithImage = ({ heading, subheading, description, date, author }) => {
  return (
    <div className="blog-with-image sm:flex gap-4 bg-white rounded-lg shadow-lg p-6   ">
      <div className="image w-">
        <img src="/blog.png" alt="" className="w-[300px] h-[300px] object-cover rounded-lg" />
      </div>
      <div className="sm:w-[70%] flex flex-col gap-4">
        <div className="heading font-bold text-mainBlue uppercase">
          {heading}
        </div>
        <div className="subheading text-2xl capitalize"><p>{subheading}</p></div>
        <div className="description text-gray-600 leading-7"><p>{description}</p></div>
        <div className="date-author flex gap-6">
          <p className="gap-2">
          <span>
              <CalendarMonth></CalendarMonth>
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
