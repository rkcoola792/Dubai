import React from 'react'
import Heading from '../Heading/Heading';
import { StarIcon } from '../StarIcon/StarIcon';
import Section5Component from '../Homepage/Section5Component';

const Section4 = () => {
  return (
    <div className='my-16'>
      <div className="top-heading">
        <Heading
          heading="Points"
          subheading="Business Key Points"
        ></Heading>
      </div>
      <div className="bottom">
        <div className="section4 my-12 relative">
          {/* <div className=" absolute">
            <StarIcon></StarIcon>
          </div> */}
         
          <div className="bottom flex flex-wrap justify-between my-12 ">
            <Section5Component
              icon=""
              heading="Renewable Energy"
              subheading="We offer investments in innovative renewable energy projects, focusing on wind, solar, geothermal, and other clean technologies."
            ></Section5Component>
            <Section5Component
              icon=""
              heading="Infrastructure"
              subheading="We specialize in infrastructure investments, providing capital for projects that build a better tomorrow. "
            ></Section5Component>
            <Section5Component
              icon=""
              heading="Business Set up"
              subheading="We offer strategic investments specifically designed to help you navigate the crucial setup phase."
            ></Section5Component>
            <Section5Component
              icon=""
              heading="Tourism & Hospitality"
              subheading="We provide several targeted investments to boost the industry’s growth   and launching a disruptive travel platform "
            ></Section5Component>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4
