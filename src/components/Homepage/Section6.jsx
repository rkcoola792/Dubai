import React from 'react'
import Heading from '../Heading/Heading'
import { StarIcon } from '../StarIcon/StarIcon';
import Blog from './Blog';
import BlogWithImage from './BlogWithImage';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Section6 = () => {
  return (
    <div className="section6 blogs  bg-subtleBlue py-8 relative ">
     <div className='max-w-[1440px] mx-auto'>
      <div className="absolute ">
        <StarIcon></StarIcon>
      </div>
      <div className="top sticky lg:top-20 top-20 bg-subtleBlue p-8 z-40 ">
        <div className="w-full bg-subtleBlue ">
          <Heading heading="blogs" subheading="latest post"></Heading>
        </div>
      </div>
      <div className="blogs my-6 flex flex-col gap-8 px-4 sm:px-12  2xl:px-0 ">
        <motion.div
          className="lg:flex-row flex flex-col gap-6 lg:sticky top-60 bg-subtleBlue z-10"
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.5, delay: 0.1 }}
        >
        <Link to="/blog/post1">
          <BlogWithImage
            heading="Social Media"
            subheading="complete web developer guideline 2023"
            description="Take control of your finances and achieve true financial freedom with our expert tips and advice. From budgeting and saving techniques to debt management and retirement planning, empower yourself with the knowledge and tools to secure your financial future. "
            date="17 Feb, 2023"
            author="Janet Fleming"
          />
          </Link>
          {/* <Link to="/blog/post2"> */}
          {/* <Blog
            heading="Social Media"
            subheading="complete web developer guideline 2023"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.  standard dummy text ever since the 1500s, when "
            date="17 Feb, 2023"
            author="Janet Fleming"
          ></Blog> */}
          {/* </Link> */}
        </motion.div>
        <motion.div
          className="lg:flex-row flex flex-col gap-6 lg:sticky top-60 bg-subtleBlue z-10"
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.5, delay: 0.1 }}
        > 
        {/* <Link to="/blog/3">
          <Blog
            heading="Social Media"
            subheading="complete web developer guideline 2023"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.  standard dummy text ever since the 1500s, when "
            date="17 Feb, 2023"
            author="Janet Fleming"
          ></Blog>
          </Link> */}
          <Link to ="/blog/4">
          <BlogWithImage
            heading="Social Media"
            subheading="Mastering Personal Finance: Essential Tips for Financial Freedom"
            description=" Dive into the fundamentals of investing with our comprehensive guide tailored for beginners. Learn about different investment options, risk management strategies, and tips for building a diversified portfolio to achieve your financial goals. "
            date="1 Mar, 2023"
            author="Ryan Gosling"
          />
          </Link>
        </motion.div>
      </div>
      </div>
    </div>
  );
}

export default Section6
