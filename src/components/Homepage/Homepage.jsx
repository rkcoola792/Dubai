import React from 'react'
import Hero from '../Hero/Hero'
import { StarIcon } from '../StarIcon/StarIcon'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'
import GetInTouch from './GetInTouch'
import DoubleScroll from './DoubleScroll'
import ShimmerCard from './ShimmerCard'
import TestimonialGradient from './TestimonialGradient'
import RotatingDiv from './RotatingDiv'
import Blogs from './BlogWithImage'
import Blog from './Blog'
import BlogWithImage from './BlogWithImage'

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/> 
      
    </div>
  );
}

export default Homepage
