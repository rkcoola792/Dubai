import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { StarIcon } from '../StarIcon/StarIcon';
import Heading from '../Heading/Heading';
import { motion } from 'framer-motion';

const Section2 = () => {
  return (
    <div className="section2 my-12 py-12 px-4 sm:px-12 lg:px-12 bg-[#F8FCFF]  relative">
      <motion.div className="heading">
        <Heading
          heading="journal"
          subheading="featured in international "
        ></Heading>
      </motion.div>
      <motion.div
        className="bottom-content sm:my-12 flex flex-col bg-white shadow-lg sm:p-12 p-4 rounded-lg"
        initial={{ scale: 0.75, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="top-descriptions sm:flex sm:flex-row gap-8 ">
          <div className="left-headings sm:w-[40%] flex flex-col gap-8 ">
            <h1 className="uppercase sm:text-3xl sm:text-left text-xl text-center font-medium opacity-90 my-6 sm:my-0">
              the funding mogul empowering business needs
            </h1>
            <p className="opacity-70 text-center sm:text-left mb-4">
              19 Jan,2021 05:13:03 PM IST
            </p>
          </div>
          <div className="right-descriptions sm:w-[60%] flex text-center sm:text-left flex-col">
            <div className="descriptions flex flex-col gap-6 leading-7 text-gray-700 text-sm">
              <h1>
                In 2010, Bajpai decided to start his own investment firm with
                the aim of providing investment opportunities to businesses and
                individuals. Since then, he has developed a strong grip on the
                investment market of India.{" "}
              </h1>
              <h1>
                He has an excellent understanding of the trends and patterns of
                the market and can predict the behavior of the market with
                remarkable accuracy. Bajpai is known for his ability to identify
                businesses.
              </h1>
            </div>
            <div className="read more mt-4">
              <h1 className="text-mainBlue font-semibold">
                Read More <ArrowRightAltIcon></ArrowRightAltIcon>
              </h1>
            </div>
          </div>
        </div>
        <div className="bottom-icons flex flex-col gap-8 mt-8 py-4">
          <hr />
          <div className="bottom-icons flex gap-4 justify-between items-center ">
            <div className="icon cursor-pointer">
              <img src="/Section2/forbes.png" alt="" />
            </div>
            <div className="icon cursor-pointer">
              <img src="/Section2/mint.png" alt="" />
            </div>
            <div className="icon cursor-pointer">
              <img src="/Section2/moneyControl.png" alt="" />
            </div>
            <div className="icon cursor-pointer">
              <img src="/Section2/fortune.png" alt="" />
            </div>
            <div className="icon cursor-pointer">
              <img src="/Section2/abp.png" alt="" />
            </div>
            <div className="icon cursor-pointer">
              <img src="/Section2/zeeNews.png" alt="" />
            </div>
            <div className="icon cursor-pointer">
              <img src="/Section2/aajtak.png" alt="" />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute top-4  z-[45] "
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <StarIcon></StarIcon>
      </motion.div>
    </div>
  );
}

export default Section2
