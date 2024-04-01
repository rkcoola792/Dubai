import React from 'react'
import Heading from '../Heading/Heading';
import Testimonial from './Testimonial';
import TestimonialGradient from './TestimonialGradient';
import { motion } from 'framer-motion';


const Section7 = () => {
  return (
    <div className="section7  py-12 my-12  px-8 sm:px-12 lg:px-24 flex flex-col justify-center items-center gap-6">
      <div className="top-heading">
        <Heading
          heading="testimonials"
          subheading="Hear what our client say"
        ></Heading>
      </div>
      <div className=" testimonials my-6 ">
        <TestimonialGradient />
      </div>
      <motion.div
        className="contact-us-button px-6 text-center bg-mainBlue text-white p-2  rounded-full cursor-pointer hover:bg-gradient-to-r from-mainBlue to-secondaryBlue  "
        initial={{ y: 0 }}
        // whileHover={{
        //   y: -5,
        //   boxShadow: "0px 30px 40px -13px rgba(0,0,0,0.65)",
        // }}
        transition={{ duration: 0.6 }}
      >
        View More
      </motion.div>
    </div>
  );
}

export default Section7
