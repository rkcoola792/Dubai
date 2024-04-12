import React from "react";

import Section3 from "../Section3";
import Section4 from "../Section4";
import Hero from "../Hero";
import Section2 from "../Section2";
const RealEstate = () => {
  return (
    <div className="RealEstate px-4 sm:px-12 2xl:px-0 mt-[120px] lg:mt-[150px]  max-w-[1440px] mx-auto">
      <Hero
        heading1="Home"
        heading2="Services"
        subheading="Real Estate"
        description="Become Financially Empowered With Unified Investment."
      ></Hero>

      <Section2
        para1="Dubai is the best market for real estate investment today! The city offers a diverse range of options, from standalone properties to flats and luxury villas. Unified Investment offers unique investment options for investors from around the world. "
        para2="We provide our clients with high-yielding property units. Our team consists of highly experienced industry experts and real estate professionals who carefully evaluate each property before presenting it to the clients."
        para3="With us, you can be sure of the highest returns ranging from __ to ____ percent every year. We have been in the sector for over ____ decades now. We have earned a huge name and recognition in the industry by providing our clients with the best real estate investments in Dubai."
        para4="We value transparency, which is why all our business policies are clear and easy to understand. At Unified Investment, we make sure that the property's title deed is transferred directly under your name. Our team of experts has designed a distinctive revenue management plan to maximize your property's earnings."
      ></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </div>
  );
};

export default RealEstate;
