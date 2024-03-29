import React from 'react'
import Hero from '../Hero/Hero'
import { StarIcon } from '../StarIcon/StarIcon'
import Section2 from './Section2'

const Homepage = () => {
  return (
    <div className='homepage'>
      <Hero></Hero>
      {/* <StarIcon></StarIcon> */}
      <Section2></Section2>
    </div>
  )
}

export default Homepage
