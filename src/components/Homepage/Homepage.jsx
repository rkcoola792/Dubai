import React from 'react'
import Hero from '../Hero/Hero'
import { StarIcon } from '../StarIcon/StarIcon'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'

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
    </div>
  )
}

export default Homepage
