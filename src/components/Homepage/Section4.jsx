import React from 'react'
import Heading from '../Heading/Heading';
import { StarIcon } from '../StarIcon/StarIcon';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { SmallStar } from '../StarIcon/SmallStar';
import Section4Component from './Section4Component';

const Section4 = () => {
  return (
    <div className="section-4 flex flex-col gap-12 my-16 relative px-8 sm:px-12 lg:px-24 bg-[#F8FCFF] py-6">
      <div className="absolute ">
        <StarIcon></StarIcon>
      </div>
      <div className="top-heading">
        <Heading
          heading="About me"
          subheading="Funding Guru Subodh Bajpai."
        ></Heading>
      </div>
      <div className="bottom flex gap-12 my-12 bg-white rounded-lg p- shadow-lg p-8">
        <div className="left w-[45%] bg-[#EBF3F9] p-6 flex flex-col gap-6 rounded-lg">
          <h1 className="text-2xl font-semibold">Introduction</h1>
          <p className="text-gray-600 leading-7">
            Mr. Bajpai is not just an investor, he's a visionary architect,
            crafting funding solutions that empower individuals, corporations,
            and a diverse range of ventures to achieve their full potential.  He
            has expertise in a broad range of industries including Real Estate,
            Renewable Energy, Business Setup, Stock Market, and the underlying
            foundations of all big movers and shakers.  
          </p>
          <h1 className="uppercase  border-mainBlue border-2 p-4 rounded-lg w-[60%] text-mainBlue font-semibold cursor-pointer hover:bg-mainBlue hover:text-white transition duration-200 ease-linear hover:ease-linear">
            {" "}
            Schedule a meet{" "}
            <span>
              <ArrowOutwardIcon />
            </span>
          </h1>
        </div>
        <div className="right w-[55%] flex flex-col ">
          <div className="top flex  flex-col gap-4">
            <div className="heading flex gap-2">
              <SmallStar></SmallStar>
              <h1 className="text-2xl">Turning Visions into Venture Capital</h1>
            </div>
            <div className="components flex gap-4">
              <Section4Component heading="A deep understanding of financial markets, current trends, and investment strategies."></Section4Component>
              <Section4Component heading="A deep understanding of financial markets, current trends, and investment strategies."></Section4Component>
              <Section4Component heading="A deep understanding of financial markets, current trends, and investment strategies."></Section4Component>
            </div>
          </div>
          <hr className="mt-8" />
          <div className="bottom">
            <div className="heading flex flex-col gap-6 my-8">
              <div className="flex gap-2">
                <SmallStar></SmallStar>
                <h1 className="text-2xl">Get In Touch</h1>
              </div>
              <div className="contacts flex justify gap-32">
                <div className="phone flex flex-col">
                  <h1 className="text-mainBlue font-semibold"> Phone:</h1>
                  <p className="text-gray-600">+1 908-736-1801</p>
                </div>
                <div className="email flex flex-col">
                  <h1 className="text-mainBlue font-semibold"> Email:</h1>
                  <p className="text-gray-600">hello@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="book-part flex justify-between items-start">
        <div className="left flex flex-col text-left gap-6">
          <div className='headings flex flex-col gap-2'>
            <h1 className="text-mainBlue">RISE AND THRIVE</h1>
            <h1 className='text-3xl  font-semibold'>Unleashing Entrepreneurial<br></br> Warrior </h1>
          </div>
          <div className='middle-headings flex gap-2'>
            <SmallStar></SmallStar>
            <h1>Available on </h1>
          </div>
          <div className='icons flex gap-6'>
            <img className='w-8' src="/amazon.png" alt="" />
            <img className='w-8' src="/flipkart.png" alt="" />
            <img className='w-8' src="/amazon.png" alt="" />
          </div>
        </div>
        <div className="right">
        <div className='book-image w-[400px] -mt-12 -mr-16  '>

            <img src="/book.png" alt="" className='object-cover ' />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Section4
