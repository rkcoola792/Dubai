import React from 'react'
import Hero from '../Hero/Hero'
import { StarIcon } from '../StarIcon/StarIcon'
import Section2 from './Section2'
import Section3 from './Section3'

const Homepage = () => {
  return (
    <div className='homepage'>
      <Hero/>
      {/* <StarIcon></StarIcon> */}
      <Section2/>
      <Section3/>
    </div>
  )
}

export default Homepage
