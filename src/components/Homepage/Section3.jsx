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
    <div className="px-8 sm:px-12 lg:px-24 flex flex-col  relative">
      <motion.div className="heading sticky top-24 bg-white p-8 z-40 ">
        <Heading
          heading="Loans"
          subheading="Specialties of Subodh Bajpai"
        ></Heading>
        <motion.div
          className="absolute top-4 right-0 z-[45]"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <StarIcon></StarIcon>
        </motion.div>
        <motion.div
          className="progressBar mt-8 bg-mainBlue h-2 rounded-md"
          style={{ scaleX }}
          initial={{ x: -175, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
        ></motion.div>
      </motion.div>
      <div className=" flex flex-col gap-6  " ref={ref}>
        <div className="group1 flex flex-col gap-8 sticky top-72 bg-white z-10 my-6 py-4">
          <motion.div
            className="heading flex gap-2 items-center "
            initial={{ y: 75, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mt-1">
              <SmallStar></SmallStar>
            </div>
            <h1 className="text-2xl font-semibold">Quick Loans</h1>
          </motion.div>
          <Specialities
            subtitle1="Ability to raise funds through private funding on an urgent basis"
            subtitle2="Assisting businesses in overcoming the impact of COVID-19 with much-needed finances"
            subtitle3="Range of funding from Rs 5 lakhs to Rs 50 crores"
          />
        </div>
        <div className="group2 flex flex-col gap-8  sticky top-72 bg-white z-20 my-6 py-4">
          <motion.div
            className="heading flex gap-2 items-center  "
            initial={{ y: 75, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mt-1">
              <SmallStar></SmallStar>
            </div>
            <h1 className="text-2xl font-semibold">
              PR & Communication Specialist
            </h1>
          </motion.div>

          <Specialities
            subtitle1="Through projects focused on providing equity to upcoming companies in various sectors"
            subtitle2="Supporting NBFCs in raising funds for contingency"
            subtitle3="Supporting NBFCs in raising funds for contingency"
          />
        </div>
        <div className="group3 flex flex-col gap-8  sticky top-72 bg-white z-30 my-6 py-4">
          <motion.div
            className="heading flex gap-2 items-center "
            initial={{ y: 75, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mt-1">
              <SmallStar></SmallStar>
            </div>
            <h1 className="text-2xl font-semibold">
              Promoting Grassroot Entrepreneurship
            </h1>
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
