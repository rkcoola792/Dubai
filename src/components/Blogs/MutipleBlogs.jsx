import React from 'react'
import Singleblog from './Singleblog'
import { Link } from 'react-router-dom';

const MutipleBlogs = () => {
  return (
    <div className="my-12 md:flex-row justify-center items-center flex flex-col gap-12">
      <Link to="/blog/post1">
      <Singleblog
        heading="Organize your digital assets  with a new methodology."
        subheading="In today's digital age, managing and organizing an ever-expanding array of digital assets can be a daunting task."
        author="Andrew Miller"
        designation="Senior Response Consultant"
        authorImg="/Avatar.png"
      ></Singleblog>
      </Link>

      <Link to="/blog/post2">
      <Singleblog
        heading="Organize your digital assets  with a new methodology."
        subheading="In today's digital age, managing and organizing an ever-expanding array of digital assets can be a daunting task."
        author="Andrew Miller"
        designation="Senior Response Consultant"
        authorImg="/Avatar.png"
      ></Singleblog>
      </Link>
      <Link to="/blog/post3">
      <Singleblog
        heading="Organize your digital assets  with a new methodology."
        subheading="In today's digital age, managing and organizing an ever-expanding array of digital assets can be a daunting task."
        author="Andrew Miller"
        designation="Senior Response Consultant"
        authorImg="/Avatar.png"
      ></Singleblog>
   </Link>
    </div>
  );
}

export default MutipleBlogs
