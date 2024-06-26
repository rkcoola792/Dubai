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
import { MobileMenu } from './MobileMenu'

const Homepage = () => {
  return (
    <div className="homepage mt-[120px] lg:mt-[150px]  ">
      <div className='max-w-[1440px] mx-auto'>
      <Hero />
      </div>
      
      <div className=''>
      <Section2 />
      </div>

      <div className='max-w-[1440px] mx-auto'>

      <Section3 />
      </div>
      <Section4 />
      <Section5 />
      <Section6 />
      <div className='max-w-[1440px] mx-auto'>

      <Section7 />
      </div>
      <Section8 />
    </div>
  );
}

export default Homepage
