import React from 'react'
import Heading from '../Heading/Heading'
import MutipleBlogs from './MutipleBlogs'

const Section4 = () => {
  return (
    <div className='section4 my-12 '>
      <div className="top-heading">
        <Heading heading="featured" subheading="featured blogs" ></Heading>
      </div>
      <div className="bottom-blogs ">
        <MutipleBlogs></MutipleBlogs>
      </div>
    </div>
  )
}

export default Section4
