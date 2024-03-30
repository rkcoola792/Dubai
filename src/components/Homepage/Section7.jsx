import React from 'react'
import Heading from '../Heading/Heading';
import Testimonial from './Testimonial';

const Section7 = () => {
  return (
    <div className="section7  py-12 my-12  px-8 sm:px-12 lg:px-24 flex flex-col justify-center items-center gap-6">
      <div className="top-heading">
        <Heading
          heading="testimonials"
          subheading="Hear what our client say"
        ></Heading>
      </div>
      <div className=" testimonials flex gap-6 my-6">
        <Testimonial
          name="Annette Black"
          designation="Chief Chairman of "
          company="Netflix"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          stars="4"
        ></Testimonial>
        <Testimonial
          name="Annette Black"
          designation="Chief Chairman of "
          company="Netflix"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          stars="4"
        ></Testimonial>
        <Testimonial
          name="Annette Black"
          designation="Chief Chairman of "
          company="Netflix"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          stars="4"
        ></Testimonial>
      </div>
      <div className="contact-us-button px-6 text-center bg-mainBlue text-white p-2  rounded-full cursor-pointer">
        View More
      </div>
    </div>
  );
}

export default Section7
