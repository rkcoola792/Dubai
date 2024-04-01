import React from 'react'

const Section3 = () => {
  return (
    <div className="section3">
      <div className="image relative">
        <img
          src="/Call to Action.png
        "
          alt=""
        />
        <div className="texts absolute flex top-12 left-32 ">
          <div className="left flex flex-col gap-8 w-[40%]">
            <div className="heading">
              <h1 className="text-white font-semibold text-[36px]">
                Have a project in mind! Let’s work together.
              </h1>
            </div>
            <div className="subheading text-[16px] text-white opacity-90">
              <h1>
                Nam tincidunt condimentum arcu, rhoncus interdum eros vulputate
                ut. Maecenas molestie sodales tristique. Nunc scelerisque tortor
                vitae ipsum rhoncus auctor.{" "}
              </h1>
            </div>
          </div>
          <div className="right absolute right-24 top-24">
            <div className="contact-us-button bg-white text-mainBlue p-2 px-6 py-3 font-semibold rounded-full cursor-pointer ">
              Contact Me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3
