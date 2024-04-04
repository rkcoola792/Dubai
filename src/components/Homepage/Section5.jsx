import React, { useRef } from 'react'
import Heading from '../Heading/Heading'
import { StarIcon } from '../StarIcon/StarIcon';
import Section5Component from './Section5Component';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

const Section5 = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 1", "0 0"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: "100",
    damping: "30",
  });
  return (
    <div className="services section5 relative flex flex-col gap-8 my-16 px-4">
      <div className="top-headings sticky sm:top-24 top-20 bg-white p-8 z-[90]">
        <motion.div
          className="absolute sm:top-4 sm:right-24 right-4 w-16 top-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <StarIcon></StarIcon>
        </motion.div>
        <div className="heading ">
          <Heading
            heading="financial"
            subheading="unique services provided"
          ></Heading>
          <motion.div
            className="progressBar mt-8 bg-mainBlue h-2 rounded-md"
            style={{ scaleX }}
            initial={{ x: -175, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
          ></motion.div>
        </div>
      </div>
      <div className="multiple-services flex flex-col gap-6 relative" ref={ref}>
        
        <div className="services px-4 2xl:px-0 sticky top-80 bg-white z-[10] justify-between flex flex-wrap gap-4">
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

        <div className="services px-4 2xl:px-0 sticky top-80 bg-white z-[20] justify-between flex flex-wrap gap-4">
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

        <div className="services px-4 2xl:px-0 sticky top-80 bg-white z-[30] justify-between flex flex-wrap gap-4">
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

         <div className="services px-4 2xl:px-0 sticky top-80 bg-white z-[40] justify-between flex flex-wrap gap-4">
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


        <div className="services px-4 2xl:px-0 sticky top-80 bg-white z-[50] justify-between flex flex-wrap gap-4">
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

          <div className="services px-4 2xl:px-0 sticky top-80 bg-white z-[60] justify-between flex flex-wrap gap-4">
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

        <div className="services px-4 2xl:px-0 sticky top-80 bg-white z-[70] justify-between flex flex-wrap gap-4">
          
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

          <div className="services px-4 2xl:px-0 sticky top-80 bg-white z-[80] justify-between flex flex-wrap gap-4">
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
    </div>
  );
}

export default Section5
