import React from 'react'
import Hero from '../Service/Hero'
import Section2 from './Section2';
import Section3 from '../Service/Section3';
import Section4 from './Section4';
import Section6 from '../Homepage/Section6';



const Blogs = () => {
  return (
    <div className="blogs mt-[120px] lg:mt-[150px] px-4 sm:px-12  2xl:px-0    ">
      <Hero
        heading1="home"
        heading2="blog"
        subheading="our latest blogs"
        description="We’ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully."
      ></Hero>
      <div className="">
        <Section6></Section6>
      </div>

      <div className="my-12 py-12 max-w-[1440px] mx-auto ">
        <Section3></Section3>
      </div>

      <Section4></Section4>
    </div>
  );
}

export default Blogs
