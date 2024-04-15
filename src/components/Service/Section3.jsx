import React from 'react'
import { Link } from 'react-router-dom';

const Section3 = () => {
  return (
    <div className="section3   ">
      <div className="image relative ">
        <img
          src="/Call to Action.webp
        "
          alt=""
          className='h-[380px] sm:h[350px]  w-full rounded-lg xl:h-auto z-10'
        />
        <div className="texts px-4 absolute xl:flex-row  flex flex-col justify-between  top-12 sm:top-16 xl:top-10  2xl:top-16 lg:px-32 items-center ">
          <div className="left flex flex-col gap-8 xl:w-[60%] items-center xl:items-baseline text-center lg:text-left">
            <div className="heading">
              <h1 className="text-white font-semibold lg:text-[36px] text-2xl sm:text-3xl text-center xl:text-left lg:leading-[40px] pt-6">
                Have a project in mind! <br></br>Let’s work together.
              </h1>
            </div>
            <div className="subheading text-[16px] text-white opacity-75 w-[90%] text-center xl:text-left ml-4 sm:ml-0 leading-5">
              <h1>
                Nam tincidunt condimentum arcu, rhoncus interdum eros vulputate
                ut. Maecenas molestie sodales tristique. Nunc scelerisque tortor
                vitae ipsum rhoncus auctor.{" "}
              </h1>
            </div>
          </div>
          <div className="right py-6">
          <Link to="/contact-us">
            <div className="contact-us-button bg-white text-mainBlue p-2 px-6 py-3 font-semibold rounded-full cursor-pointer ">
              Contact Me
            </div>
            </Link>
          </div>
        </div>

       

      </div>
    </div>
  );
}

export default Section3
