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

const Homepage = () => {
  return (
    <div className='homepage'>
      <Hero/>
      {/* <StarIcon></StarIcon> */}
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <GetInTouch/>
    </div>
  )
}

export default Homepage
