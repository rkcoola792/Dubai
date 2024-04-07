import React, { useRef } from "react";
import Single from "./Section3Components/Single";
import { StarIcon } from "../StarIcon/StarIcon";
import { SmallStar } from "../StarIcon/SmallStar";
import Heading from "../Heading/Heading";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Specialities from "./Specialities";
const Section3 = () => {
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
    <div className="flex flex-col  relative ">
      <motion.div className="heading sm:sticky w-full  p-4 z-40 bg-white">
        <Heading
          heading="Loans"
          subheading="Specialties of Subodh Bajpai"
        ></Heading>
        <motion.div
          className="absolute sm:top-4 sm:right-0 top-0 right-0 z-[45]"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <StarIcon></StarIcon>
        </motion.div>
     
      </motion.div>
      <div className="flex flex-col gap-24 mt-12  px-4 sm:px-12 lg:px-12 2xl:px-0  " ref={ref}>
        
        <div className="group1 sticky top-20 flex flex-col sm:gap-12 sm:sticky  sm:top-40 bg-white z-10 shadow-lg border border-gray-100 p-4  sm:p-12  rounded-lg">
          <motion.div
            className="heading flex gap-6 items-center justify-center lg:justify-normal mb-4 sm:mb-0  "
            initial={{ y: 75, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mt-1 hidden lg:block">
              <SmallStar></SmallStar>
            </div>
            <h3 className="sm:text-2xl lg:text-3xl text-xl font-semibold ">Quick Loans</h3>
          </motion.div>
          <Specialities
            subtitle1="Ability to raise funds through private funding on an urgent basis"
            subtitle2="Assisting businesses in overcoming the impact of COVID-19 with much-needed finances"
            subtitle3="Range of funding from Rs 5 lakhs to Rs 50 crores"
          />
        </div>
        <div className="group2 flex  sticky top-20  flex-col sm:gap-12 sm:sticky  sm:top-40 bg-white z-20 shadow-lg border border-gray-100 p-4 sm:p-12  rounded-lg">
          <motion.div
            className="heading flex gap-6 sm:gap-6 mb-4 items-center justify-center lg:justify-normal "
            initial={{ y: 75, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="hidden lg:block sm:mt-0">
              <SmallStar></SmallStar>
            </div>
            <h3 className="sm:text-2xl lg:text-3xl text-xl text-center lg:text-left font-semibold">
              PR & Communication Specialist
            </h3>
          </motion.div>

          <Specialities
            subtitle1="Through projects focused on providing equity to upcoming companies in various sectors"
            subtitle2="Supporting NBFCs in raising funds for contingency"
            subtitle3="Supporting NBFCs in raising funds for contingency"
          />
        </div>
        <div className="group3  sticky top-20  flex flex-col justify-center items-center lg:items-start lg:justify-start sm:gap-12 sm:sticky  sm:top-40 bg-white z-30 shadow-lg border border-gray-100 p-4  sm:p-12  rounded-lg">
          <motion.div
            className="heading flex gap-6 sm:gap-6 mb-4 items-center justify-center text-center lg:justify-normal "
            initial={{ y: 75, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="hidden lg:block -mt-6 sm:mt-0">
              <SmallStar></SmallStar>
            </div>
            <h3 className="sm:text-2xl mb-4 sm:mb-0 lg:text-3xl text-xl font-semibold">
              Promoting Grassroot Entrepreneurship
            </h3>
          </motion.div>
          <Specialities
            subtitle1="Mr. Bajpai’s holds expertise in nd communication"
            subtitle2="Helping startups and businesses establish themselves in the market"
            subtitle3="Assisting clients in gainingvisibility, brand recognition, and market share"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
