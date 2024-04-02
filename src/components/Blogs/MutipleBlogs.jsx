import React from 'react'
import Singleblog from './Singleblog'

const MutipleBlogs = () => {
  return (
    <div className="my-12 sm:flex-row justify-between flex flex-col gap-12">
      <Singleblog
        heading="Organize your digital assets  with a new methodology."
        subheading="In today's digital age, managing and organizing an ever-expanding array of digital assets can be a daunting task."
        author="Andrew Miller"
        designation="Senior Response Consultant"
        authorImg="/Avatar.png"
      ></Singleblog>
      <Singleblog
        heading="Organize your digital assets  with a new methodology."
        subheading="In today's digital age, managing and organizing an ever-expanding array of digital assets can be a daunting task."
        author="Andrew Miller"
        designation="Senior Response Consultant"
        authorImg="/Avatar.png"
      ></Singleblog>
      <Singleblog
        heading="Organize your digital assets  with a new methodology."
        subheading="In today's digital age, managing and organizing an ever-expanding array of digital assets can be a daunting task."
        author="Andrew Miller"
        designation="Senior Response Consultant"
        authorImg="/Avatar.png"
      ></Singleblog>
    </div>
  );
}

export default MutipleBlogs
