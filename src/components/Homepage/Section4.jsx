import React from 'react'
import Heading from '../Heading/Heading';
import { StarIcon } from '../StarIcon/StarIcon';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { SmallStar } from '../StarIcon/SmallStar';
import Section4Component from './Section4Component';
import GetInTouch from './GetInTouch';
import ShimmerCard from './ShimmerCard';
import { motion } from 'framer-motion';
import VisionCard from './VisionCard';
import RotatingDiv from './RotatingDiv';

const Section4 = () => {
  return (
    <div className="section-4 flex flex-col gap-12 my-16 relative px-8 sm:px-12 lg:px-24 bg-[#F8FCFF] py-6">
      <motion.div
        className="absolute "
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <StarIcon></StarIcon>
      </motion.div>
      <div className="top-heading">
        <Heading
          heading="About me"
          subheading="Funding Guru Subodh Bajpai."
        ></Heading>
      </div>
      <div className="bottom flex gap-12 my-12 py-12 bg-white rounded-lg  shadow-lg p-8">
        <motion.div
          className="left flex w-[50%] flex-col rounded-lg relative"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <ShimmerCard />
        </motion.div>
        <div className="right w-[50%] flex flex-col ">
          <div className="top flex  flex-col gap-4">
            <div className="heading flex gap-4">
              <SmallStar></SmallStar>
              <h1 className="text-2xl">Turning Visions into Venture Capital</h1>
            </div>
            <div className="components flex gap-4">
              <VisionCard
                subtitle1="A deep understanding of financial markets, current trends, and investment strategies."
                subtitle2="Business plan, compelling pitch deck, identify the right investors, and navigate negotiations."
                subtitle3="Funding solutions from early-stage ventures INR 5 lakh to established businesses INR 50 crore."
              />
            </div>
          </div>
          {/* <hr className="mt-8" /> */}
          <div className="bottom">
            <div className="heading flex flex-col gap-6 my-8">
              <div className="flex gap-4">
                <SmallStar></SmallStar>
                <h1 className="text-2xl">Get In Touch</h1>
              </div>
              <div className="contacts-icon w-full">
                <GetInTouch />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="book-part flex justify-between items-start">
        <div className="left flex flex-col text-left gap-6">
          <div className="headings flex flex-col gap-2">
            <h1 className="text-mainBlue">RISE AND THRIVE</h1>
            <h1 className="text-3xl  font-semibold">
              Unleashing Entrepreneurial<br></br> Warrior{" "}
            </h1>
          </div>
          <div className="middle-headings flex justify-start items-center  ">
            
              <div>

            <SmallStar/>
              </div>
            {/* <h1>Available on </h1> */}
           
            <div className='-ml-8'> 

            <RotatingDiv/>
            </div>
          </div>
          <div className="icons flex gap-6">
            <img className="w-8" src="/amazon.png" alt="" />
            <img className="w-8" src="/flipkart.png" alt="" />
            <img className="w-8" src="/amazon.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="book-image w-[400px] -mt-12 -mr-16  ">
            <img src="/book.png" alt="" className="object-cover " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4
