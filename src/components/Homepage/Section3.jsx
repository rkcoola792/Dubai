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
      <motion.div className="heading sm:sticky w-full  sm:top-20 p-8 z-40 bg-white">
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
        <motion.div
          className="progressBar mt-8 bg-mainBlue h-2 rounded-md px-4 sm:px-12 lg:px-12 2xl:px-0 "
          style={{ scaleX }}
          initial={{ x: -175, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
        ></motion.div>
      </motion.div>
      <div className=" flex flex-col gap-24  px-4 sm:px-12 lg:px-12 2xl:px-0  " ref={ref}>
        <div className="group1 flex flex-col sm:gap-8 sm:sticky  sm:top-72  z-10 sm:my-6 border border-gray-300  p-8 py-12 rounded-lg">
          <motion.div
            className="heading flex gap-2 items-center mb-4 sm:mb-0  "
            initial={{ y: 75, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mt-1">
              <SmallStar></SmallStar>
            </div>
            <h3 className="sm:text-2xl text-xl font-semibold">Quick Loans</h3>
          </motion.div>
          <Specialities
            subtitle1="Ability to raise funds through private funding on an urgent basis"
            subtitle2="Assisting businesses in overcoming the impact of COVID-19 with much-needed finances"
            subtitle3="Range of funding from Rs 5 lakhs to Rs 50 crores"
          />
        </div>
        <div className="group2 flex flex-col gap-8  sm:sticky top-72 bg-white border border-gray-300 z-20 sm:my-6  p-8 py-12 rounded-lg">
          <motion.div
            className="heading flex gap-2 items-center  "
            initial={{ y: 75, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="-mt-6 sm:mt-0">
              <SmallStar></SmallStar>
            </div>
            <h3 className="sm:text-2xl font-semibold text-xl">
              PR & Communication Specialist
            </h3>
          </motion.div>

          <Specialities
            subtitle1="Through projects focused on providing equity to upcoming companies in various sectors"
            subtitle2="Supporting NBFCs in raising funds for contingency"
            subtitle3="Supporting NBFCs in raising funds for contingency"
          />
        </div>
        <div className="group3 flex flex-col gap-8  sticky top-72 border border-gray-300 bg-white z-30 sm:my-6  p-8 py-12 rounded-lg ">
          <motion.div
            className="heading flex gap-2 items-center "
            initial={{ y: 75, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="-mt-6 sm:mt-0">
              <SmallStar></SmallStar>
            </div>
            <h3 className="sm:text-2xl font-semibold text-xl">
              Promoting Grassroot Entrepreneurship
            </h3>
          </motion.div>
          <Specialities
            subtitle1="Mr. Bajpai’s holds expertise in PR and communication"
            subtitle2="Helping startups and businesses establish themselves in the market"
            subtitle3="Assisting clients in gainingvisibility, brand recognition, and market share"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
