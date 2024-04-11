import React from "react";
import Heading from "../Heading/Heading";
import { StarIcon } from "../StarIcon/StarIcon";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { SmallStar } from "../StarIcon/SmallStar";
import Section4Component from "./Section4Component";
import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <div className="section-4  2xl:px-12  my-16 relative px-4  sm:px-12   bg-[#F8FCFF] pt-6 justify-center items-center md:justify-normal  ">
    <div className="max-w-[1440px] mx-auto flex flex-col sm:gap-16 gap-8">

    
      <div className="absolute w-12 ">
        <StarIcon></StarIcon>
      </div>
      <div className="top-heading my-6">
        <Heading
          heading="About me"
          subheading="Funding Guru Subodh Bajpai."
        ></Heading>
      </div>
      <div className="bottom xl:flex gap-12  md:bg-white z-[50] rounded-2xl  md:shadow-lg md:p-12 text-center sm:text-left  2xl:p-16">
        <motion.div
          className="left xl:w-[35rem] h-fit   bg-[#EBF3F9] p-8 2xl:p-12 flex flex-col gap-6 justify-center items-center xl:justify-start xl:items-start rounded-2xl relative"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-4xl font-semibold 2xl:text-5xl z-20">Introduction</h3>
          <p className=  " z-20 text-gray-600 leading-8 text-lg 2xl:text-xl 2xl:leading-10 sm:w-[95%] text-center lg:text-left  ">
            Mr. Bajpai is not just an investor, he's a visionary architect,
            crafting funding solutions that empower individuals, corporations,
            and a diverse range of ventures to achieve their full potential.  He
            has expertise in a broad range of industries including Real Estate,
            Renewable Energy, Business Setup, Stock Market, and the underlying
            foundations of all big movers and shakers.  
          </p>
          <h3 className="uppercase z-20 border-mainBlue border-2  p-4 text-sm   rounded-full px-6  w-fit text-mainBlue font-semibold cursor-pointer hover:bg-mainBlue hover:text-white transition duration-200 ease-linear hover:ease-linear  sm:ml-0">
            {" "}
            Schedule a meet{" "}
            <span>
              <ArrowOutwardIcon />
            </span>
          </h3>
          <img
            src="/abc.png"
            className="absolute z-10 bottom-1 right-1 opacity-50"
          ></img>
        </motion.div>
        <div className="right xl:w-[55%] flex flex-col gap-4 2xl:gap-8 mt-4 lg:mt-0 ">
          <div className="top flex  flex-col gap-12">
            <motion.div
              className="heading flex gap-4 xl:mt-2 mt-12 justify-center md:justify-start"
              initial={{ y: 75, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="hidden sm:block mt-1  xl:mt-0">
                <SmallStar></SmallStar>
              </motion.div>
              <motion.h2 className="text-2xl lg:text-[28px] ">
                Turning Visions into Venture Capital
              </motion.h2>
            </motion.div>
            <div className="components md:grid grid-cols-3   flex flex-col gap-4">
              <Section4Component heading="A deep understanding of financial markets, current trends, and investment strategies."></Section4Component>
              <Section4Component heading="Business plan, compelling pitch deck, identify the right investors, and navigate negotiations."></Section4Component>
              <Section4Component heading="Funding solutions from early-stage ventures INR 5 lakh to established businesses INR 50 crore."></Section4Component>
            </div>
          </div>
          <hr className="my-6 hidden lg:block" />
          <div className="bottom">
            <motion.div
              className="my-6 lg:my-0 heading flex flex-col sm:gap-12 gap-8  bg-white p-8 lg:p-0 rounded-lg border border-gray-200 lg:border-none"
              initial={{ y: 75, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="justify-center sm:justify-start flex gap-2 ">
                <div className="hidden sm:block">

                <SmallStar></SmallStar>
                </div>
                <h2 className="text-2xl lg:text-[28px] ">Get In Touch</h2>
              </div>
              <div className="contacts md:flex-row flex flex-col gap-4  md:gap-32 sm:ml-10 ">
                <div className="phone flex flex-col 2xl:text-2xl gap-2">
                  <h3 className="text-mainBlue font-semibold "> Phone:</h3>
                  <p className="text-gray-600 text-lg">+1 908-736-1801</p>
                </div>
                <div className="email flex flex-col  2xl:text-2xl gap-2 ">
                  <h3 className="text-mainBlue font-semibold"> Email:</h3>
                  <p className="text-gray-600">hello@example.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="book-part md:flex-row flex flex-col text-center justify-center items-center lg:justify-between md:items-start   ">
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
          <div className="book-image sm:w-[500px]  -ml-10 md:-mt-12 md:-mr-16 flex justify-center  ">
            <img src="/book.png" alt="rise and thrive" className="object-cover " />
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default Section4;
