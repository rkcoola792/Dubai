import React from 'react'
import Heading from '../Heading/Heading'
import { StarIcon } from '../StarIcon/StarIcon';
import Section5Component from './Section5Component';

const Section5 = () => {
  return (
    <div className="services section5 relative flex flex-col gap-8">
      <div className="top-headings">
        <div className="absolute top-4 right-24">
          <StarIcon></StarIcon>
        </div>
        <div className="heading">
          <Heading
            heading="financial"
            subheading="unique services provided"
          ></Heading>
        </div>
      </div>

      <div className="services px-8 sm:px-12 lg:px-24 flex flex-wrap justify-around gap-8">
        <Section5Component
          icon=""
          heading="Renewable Energy"
          subheading="We offer investments in innovative renewable energy projects, focusing on wind, solar, geothermal, and other clean technologies."
        ></Section5Component>
        <Section5Component
          icon=""
          heading="Renewable Energy"
          subheading="We offer investments in innovative renewable energy projects, focusing on wind, solar, geothermal, and other clean technologies."
        ></Section5Component>
        <Section5Component
          icon=""
          heading="Renewable Energy"
          subheading="We offer investments in innovative renewable energy projects, focusing on wind, solar, geothermal, and other clean technologies."
        ></Section5Component>
        <Section5Component
          icon=""
          heading="Renewable Energy"
          subheading="We offer investments in innovative renewable energy projects, focusing on wind, solar, geothermal, and other clean technologies."
        ></Section5Component>
      </div>
    </div>
  );
}

export default Section5
