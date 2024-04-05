import React from "react";
import Heading from "../Heading/Heading";
import { StarIcon } from "../StarIcon/StarIcon";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { SmallStar } from "../StarIcon/SmallStar";
import Section4Component from "./Section4Component";
import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <div className="section-4  2xl:px-12 flex flex-col gap-12 my-16 relative px-4  sm:px-12   bg-[#F8FCFF] py-6 justify-center items-center md:justify-normal md:items-stretch">
      <div className="absolute w-12 ">
        <StarIcon></StarIcon>
      </div>
      <div className="top-heading my-6">
        <Heading
          heading="About me"
          subheading="Funding Guru Subodh Bajpai."
        ></Heading>
      </div>
      <div className="bottom lg:flex gap-12  bg-white z-[50] rounded-2xl  shadow-lg md:p-8 p-8 ">
        <motion.div
          className="left lg:w-[45%] bg-[#EBF3F9] p-6 flex flex-col gap-6 rounded-2xl"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-semibold">Introduction</h3>
          <p className="text-gray-600 leading-7">
            Mr. Bajpai is not just an investor, he's a visionary architect,
            crafting funding solutions that empower individuals, corporations,
            and a diverse range of ventures to achieve their full potential.  He
            has expertise in a broad range of industries including Real Estate,
            Renewable Energy, Business Setup, Stock Market, and the underlying
            foundations of all big movers and shakers.  
          </p>
          <h3 className="uppercase  border-mainBlue border-2 p-4 rounded-2xl w-[250px] sm:w-[250px] text-mainBlue font-semibold cursor-pointer hover:bg-mainBlue hover:text-white transition duration-200 ease-linear hover:ease-linear">
            {" "}
            Schedule a meet{" "}
            <span>
              <ArrowOutwardIcon />
            </span>
          </h3>
        </motion.div>
        <div className="right lg:w-[55%] flex flex-col mt-4 lg:mt-0 ">
          <div className="top flex  flex-col gap-4">
            <motion.div
              className="heading flex gap-2 md:mt-2 mt-6"
              initial={{ y: 75, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="mt-2 md:mt-0">
                <SmallStar></SmallStar>
              </motion.div>
              <motion.h2 className="text-2xl  ">
                Turning Visions into Venture Capital
              </motion.h2>
            </motion.div>
            <div className="components md:flex-row flex flex-col gap-4">
              <Section4Component heading="A deep understanding of financial markets, current trends, and investment strategies."></Section4Component>
              <Section4Component heading="A deep understanding of financial markets, current trends, and investment strategies."></Section4Component>
              <Section4Component heading="A deep understanding of financial markets, current trends, and investment strategies."></Section4Component>
            </div>
          </div>
          <hr className="mt-8" />
          <div className="bottom">
            <motion.div
              className="heading flex flex-col gap-6 my-8"
              initial={{ y: 75, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex gap-2 ">
                <SmallStar></SmallStar>
                <h2 className="text-2xl">Get In Touch</h2>
              </div>
              <div className="contacts md:flex-row flex flex-col gap-4  md:gap-32">
                <div className="phone flex flex-col">
                  <h3 className="text-mainBlue font-semibold"> Phone:</h3>
                  <p className="text-gray-600">+1 908-736-1801</p>
                </div>
                <div className="email flex flex-col">
                  <h3 className="text-mainBlue font-semibold"> Email:</h3>
                  <p className="text-gray-600">hello@example.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="book-part md:flex-row flex flex-col  justify-between items-center">
        <div className="left flex flex-col md:text-left text-center gap-6 sm:gap-16">
          <motion.div
            className="headings flex flex-col gap-2"
            initial={{ y: 75, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-mainBlue font-semibold">RISE AND THRIVE</p>
            <h3 className="lg:text-5xl text-3xl  font-bold  " style={{lineHeight:1.3}}>
              Unleashing Entrepreneurial<br></br> Warrior{" "}
            </h3>
          </motion.div>
          <motion.div
            className="middle-headings flex gap-2 justify-center md:justify-normal "
            initial={{ y: 75, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hidden md:block">
              <SmallStar></SmallStar>
            </div>
            <p className="text-2xl md:text-3xl ">Available on </p>
          </motion.div>
          <motion.div
            className="icons flex gap-6 md:gap-12 justify-center md:justify-normal"
            initial={{ y: 75, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <img className="w-8 md:w-12" src="/amazon.png" alt="amazon" />
            <img className="w-8 md:w-12" src="/flipkart.png" alt="flipkart" />
            <img className="w-8 md:w-12" src="/amazon.png" alt="amazon" />
          </motion.div>
        </div>
        <motion.div
          className="right "
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="book-image sm:w-[500px] -ml-10 md:-mt-12 md:-mr-16 flex justify-center  ">
            <img src="/book.png" alt="rise and thrive" className="object-cover " />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section4;
