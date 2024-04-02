import React from "react";
import Heading from "../Heading/Heading";
import { StarIcon } from "../StarIcon/StarIcon";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { SmallStar } from "../StarIcon/SmallStar";
import Section4Component from "./Section4Component";

const Section4 = () => {
  return (
    <div className="section-4 flex flex-col gap-12 my-16 relative px-4  sm:px-12 lg:px-24 bg-[#F8FCFF] py-6 justify-center items-center md:justify-normal md:items-stretch">
      <div className="absolute w-12 ">
        <StarIcon></StarIcon>
      </div>
      <div className="top-heading">
        <Heading
          heading="About me"
          subheading="Funding Guru Subodh Bajpai."
        ></Heading>
      </div>
      <div className="bottom md:flex gap-12 my-12 bg-white rounded-lg p- shadow-lg md:p-8 p-4 ">
        <div className="left md:w-[45%] bg-[#EBF3F9] p-6 flex flex-col gap-6 rounded-lg">
          <h1 className="text-2xl font-semibold">Introduction</h1>
          <p className="text-gray-600 leading-7">
            Mr. Bajpai is not just an investor, he's a visionary architect,
            crafting funding solutions that empower individuals, corporations,
            and a diverse range of ventures to achieve their full potential.  He
            has expertise in a broad range of industries including Real Estate,
            Renewable Energy, Business Setup, Stock Market, and the underlying
            foundations of all big movers and shakers.  
          </p>
          <h1 className="uppercase  border-mainBlue border-2 p-4 rounded-lg w-[80%] md:w-[60%] text-mainBlue font-semibold cursor-pointer hover:bg-mainBlue hover:text-white transition duration-200 ease-linear hover:ease-linear">
            {" "}
            Schedule a meet{" "}
            <span>
              <ArrowOutwardIcon />
            </span>
          </h1>
        </div>
        <div className="right md:w-[55%] flex flex-col ">
          <div className="top flex  flex-col gap-4">
            <div className="heading flex gap-2 md:mt-2 mt-6">
              <div className="mt-2 md:mt-0">

              <SmallStar></SmallStar>
              </div>
              <h1 className="text-2xl ">Turning Visions into Venture Capital</h1>
            </div>
            <div className="components md:flex-row flex flex-col gap-4">
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
              <div className="contacts md:flex-row flex flex-col gap-4  md:gap-32">
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
      <div className="book-part md:flex-row flex flex-col  justify-between items-start">
        <div className="left flex flex-col md:text-left text-center gap-6">
          <div className="headings flex flex-col gap-2">
            <h1 className="text-mainBlue">RISE AND THRIVE</h1>
            <h1 className="text-3xl font-semibold">
              Unleashing Entrepreneurial<br></br> Warrior{" "}
            </h1>
          </div>
          <div className="middle-headings flex gap-2 justify-center md:justify-normal ">
            <div className="hidden md:block">

            <SmallStar></SmallStar>
            </div>
            <h1 className="text-2xl md:text-base">Available on </h1>
          </div>
          <div className="icons flex gap-6 justify-center md:justify-normal">
            <img className="w-8" src="/amazon.png" alt="" />
            <img className="w-8" src="/flipkart.png" alt="" />
            <img className="w-8" src="/amazon.png" alt="" />
          </div>
        </div>
        <div className="right ">
          <div className="book-image w-[400px] md:-mt-12 md:-mr-16 -ml-10  ">
            <img src="/book.png" alt="" className="object-cover " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
