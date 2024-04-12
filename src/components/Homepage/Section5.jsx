import React, { useRef, useState } from 'react'
import Heading from '../Heading/Heading'
import { StarIcon } from '../StarIcon/StarIcon';
import Section5Component from './Section5Component';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

const Section5 = () => {
  const [viewMore, setViewMore]=useState(false)
  // console.log("view more " ,viewMore)
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
    <div className="services section5 relative bg-white  my-12 px-2">
      <div className='flex flex-col gap-8'>
      <div className="top-headings sticky sm:top-24  bg-white pt-4 z-[90]">
        <motion.div
          className="absolute sm:top-4 sm:right- right-4 w-16 top-4"
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
            className="progressBar hidden sm:block mt-8 bg-mainBlue h-2 rounded-md max-w-[1440px] mx-auto "
            style={{ scaleX }}
            initial={{ x: -175, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
          ></motion.div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto text-center sm:text-left  multiple-services flex flex-col  gap-12 sm:gap-6 relative" ref={ref}>
        
        <div className="services px-2  sm:px-12 2xl:px-0 sticky top-28  sm:top-80 bg-white z-[10] justify-between flex flex-wrap gap-">
          {/* <Link to="/services/real-estate"> */}
          
          <Section5Component
            link="/services/real-estate"
            icon=""
            heading="Real Estate"
            subheading="Dubai is the best market for real estate investment today! The city offers a diverse range of options, from standalone properties to flats and luxury villas."
          ></Section5Component>
          {/* </Link> */}
          {/* <Link to="/services/renewable-energy"> */}
          <Section5Component
            icon=""
            heading="Renewable Energy"
            subheading="Become Part Of Sustainable Emirates By Investing In Dubai's Renewable Energy Sector With Unified Investment.Dubai is fastest-growing city in the world. "
          ></Section5Component>
          {/* </Link> */}
        </div>

        <div className="services px-2 sm:px-12 2xl:px-0 sticky top-28  sm:top-80 bg-white z-[20] justify-between flex flex-wrap ">
          <Section5Component
            icon=""
            heading="Business Setup"
            subheading="Identify a suitable property and manage its revenue generation to attain highest ROI possible.Every business owner wishes to expand beyond borders"
          ></Section5Component>
          <Section5Component
            icon=""
            heading="Tourism and Hospitality"
            subheading="Planning to invest in the tourism and hospitality industry in Dubai? Dubai, famously known as the City of Gold, is experiencing incessant growth."
          ></Section5Component>
        </div>

        <div className="services px-2 sm:px-12 2xl:px-0 sticky top-28  sm:top-80 bg-white z-[30] justify-between flex flex-wrap ">
          <Section5Component
            icon=""
            heading="Infrastructure"
            subheading="Identify a suitable property and manage its revenue generation to attain highest ROI possible.the country has become the global hub for investment, tourism and trade. "
          ></Section5Component>
          <Section5Component
            icon=""
            heading="Healthcare"
            subheading="Identify a suitable property and manage its revenue generation to attain highest ROI possible. Healthcare investment in Dubai"
          ></Section5Component>
        </div>
       
        
     {/* { viewMore &&  */}
     <div className="services px-2 sm:px-12 2xl:px-0 sticky top-28  sm:top-80 bg-white z-[40] justify-between flex flex-wrap ">

    
          <Section5Component
            icon=""
            heading="Education"
            subheading="Identify a suitable property and manage its revenue generation to attain highest ROI possible.With the passage of time, the education sector has diversified in Dubai, specifically, after March 2020."
          ></Section5Component>
         
         
          <Section5Component
            icon=""
            heading="Stock Market"
            subheading="Identify a suitable property and manage its revenue generation to attain highest ROI possible. Kick Start Your Trading Journey In Dubai With Unified Investment"
          ></Section5Component>
          </div>
{/* } */}

      </div>
      </div>
    </div>
  );
}

export default Section5
