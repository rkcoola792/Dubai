import React from 'react'
import Heading from '../Heading/Heading';
import Testimonial from './Testimonial';
import TestimonialGradient from './TestimonialGradient';

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
       <TestimonialGradient/>
      </div>
      <div className="contact-us-button px-6 text-center bg-mainBlue text-white p-2  rounded-full cursor-pointer">
        View More
      </div>
    </div>
  );
}

export default Section7
