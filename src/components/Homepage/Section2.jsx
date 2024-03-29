import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { StarIcon } from '../StarIcon/StarIcon';

const Section2 = () => {
  return (
    <div className="section2 my-12 py-12 px-8 sm:px-12 lg:px-24 bg-[#F8FCFF]   relative">
      <div className="top-heading flex flex-col gap-8 justify-center items-center text-center">
        <h1 className="text-mainBlue tracking-widest">JOURNALS</h1>
        <h1 className="text-4xl font-semibold">Featured In International </h1>
      </div>
      <div className="bottom-content my-12 flex flex-col bg-white shadow-lg p-6 rounded-lg">
        <div className="top-descriptions flex gap-8 ">
          <div className="left-headings w-[40%] flex flex-col gap-8 ">
            <h1 className="uppercase text-3xl font-medium opacity-90">
              the funding mogul empowering business needs
            </h1>
            <p className="opacity-70">19 Jan,2021 05:13:03 PM IST</p>
          </div>
          <div className="right-descriptions w-[60%] flex flex-col">
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
      </div>
     <div className="absolute top-6 right-32"> 
        <StarIcon></StarIcon>
      </div> 
    </div>
  );
}

export default Section2
