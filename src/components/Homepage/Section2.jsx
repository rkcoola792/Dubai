import React, { useEffect, useState } from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { StarIcon } from '../StarIcon/StarIcon';
import Heading from '../Heading/Heading';
import { motion } from 'framer-motion';
import "./Section2.scss"
import { Link } from 'react-router-dom';

const Section2 = () => {

  const journalArray=[ {
    id:"1",
    heading:"the funding mogul empowering business needs",
    date:"19 Jan,2021 05:13:03 PM IST",
    paragraph1:"In 2010, Bajpai decided to start his own investment firm with the aim of providing investment opportunities to businesses and individuals. Since then, he has developed a strong grip on the investment market of India.",
    paragraph2:"He has an excellent understanding of the trends and patterns of the market and can predict the behavior of the market with remarkable accuracy. Bajpai is known for his ability to identify businesses."
},
{id:"2",
  heading:"Secure Your Future: Trusted Financial Services Solutions",
  date:"12 March,2022 05:13:03 PM IST",
  paragraph1:"Description: Our trusted financial services solutions are designed to safeguard your future and provide peace of mind. With a focus on security and reliability, we offer a range of services tailored to meet your unique needs, ensuring a solid foundation for your financial journey ahead.",
    paragraph2:"Let our team of experts guide you through the complexities of finance with our comprehensive range of financial services. From budgeting and investment planning to retirement strategies, we provide the expertise and support you need to make informed decisions and achieve your financial goals."

},
{id:"3",
heading:"Navigate Your Finances with Expert Financial Services",
date:"15 April,2022 05:13:03 PM IST",
paragraph1:"Our tailored financial services are crafted to help you maximize your wealth and optimize your financial potential. With personalized solutions and strategic advice, we empower you to grow your assets and build a secure financial future tailored to your unique circumstances.",
paragraph2:"Take control of your financial future with our comprehensive range of services designed to empower your journey towards financial success. From wealth management to estate planning, our holistic approach ensures that every aspect of your finances is carefully considered and optimized for growth."


},
{id:"4",
heading:"Maximize Your Wealth: Tailored Financial Services",
date:"15 June,2022 05:13:03 PM IST",
paragraph1:"Discover a suite of comprehensive financial services designed to meet your diverse needs and goals. Take charge of your financial future with confidence and peace of mind.",
paragraph2:"Invest with confidence with our premier financial services, backed by years of industry expertise and a commitment to excellence. Whether you're a seasoned investor or just starting out, our comprehensive range of investment solutions and personalized advice will help you achieve your financial objectives with confidence."


},
{id:"5",
heading:"Invest Confidently: Premier Financial Services",
date:"15 Feb,2022 05:13:03 PM IST",
paragraph1:"From wealth management and investment planning to retirement strategies and estate planning, our expert advisors offer personalized solutions tailored to your unique financial situation.",
paragraph2:"Transform your wealth and unlock your financial potential with our strategic financial services tailored to your unique goals and objectives. Whether you're looking to grow your investments, protect your assets, or plan for retirement, our experienced team is here to provide the guidance and expertise you need to succeed."


},
{id:"6",
heading:"Achieve Your Financial Goals: Personalized Services",
date:"15 Jan,2022 05:13:03 PM IST",
paragraph1:" Let us help you achieve your financial goals with our personalized services tailored to your individual needs and aspirations. From creating a budget to planning for major life events, our dedicated team is here to provide the support and guidance you need to turn your dreams into reality.",
paragraph2:"Partner with us on your journey to prosperity with our proven financial services backed by a track record of success. With a focus on building long-term relationships and delivering results, we're committed to helping you achieve your financial goals and secure a brighter future for yourself and your loved ones."


},
{id:"7",
heading:"Elevate Your Finances: Premium Financial Service",
date:"21 Auguts,2022 05:13:03 PM IST",
paragraph1:"Elevate your finances to new heights with our premium financial services designed for discerning clients like you. With a focus on sophistication and excellence, we offer a comprehensive suite of wealth management solutions and personalized advice to help you reach your financial aspirations with confidence.",
paragraph2:"Experience true financial freedom with our innovative range of services designed to revolutionize the way you manage your money. From cutting-edge technology solutions to forward-thinking investment strategies, we empower you to take control of your finances and live life on your own terms."



},]

const arr=["rajeev", "kumar"]
  const [journal,setJournal]=useState(0)

  useEffect(()=>{
    const iconLinks=document.querySelectorAll(".icon-news")
    iconLinks.forEach(ele=>{
      ele?.addEventListener("click",()=>{
        document.querySelector(".active")?.classList.remove("active");
        ele.classList.add("active");
      })
      // console.log(ele)
      // ele.addEventListener
    })
  },)


  return (
    <div className="section2 my-12 py-12 pb-4 bg-[#F8FCFF]  relative  ">
      <div className='max-w-[1440px] mx-auto'>
      <motion.div className="heading">
        <Heading
          heading="journal"
          subheading="featured in international "
        ></Heading>
      </motion.div>
      <motion.div
        className="bottom-content   mt-6 sm:mx-12 2xl:mx-0 sm:my-12 flex flex-col bg-white shadow-lg sm:p-12 p-4 rounded-lg  "
        initial={{ scale: 0.75, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.div className="top-descriptions flex flex-col lg:flex lg:flex-row gap-6 items-start"
        
        >
          <div className="left-headings lg:w-[40%] flex flex-col gap-4  lg:gap-8 justify-center   lg:text-left">
            <h3 style={{lineHeight:"50px"}} className ="uppercase sm:text-3xl 2xl:text-4xl  lg:text-left text-2xl text-center font-medium opacity-90 my-6 sm:my-0">
              {journalArray[journal]?.heading}
            </h3>
            <p className="opacity-70 text-center lg:text-left mb-4">
            {journalArray[journal]?.date}
            </p>
          </div>
          <div className="right-descriptions lg:w-[60%] flex text-center lg:text-left flex-col">
            <div className="descriptions flex flex-col gap-6 leading-7 text-gray-700 text-sm">
              <p className='2xl:text-lg 2xl:leading-8'>
              {journalArray[journal]?.paragraph1}
              </p>
              <p className='2xl:text-lg 2xl:leading-8'>
              {journalArray[journal]?.paragraph2}
              </p>
            </div>
            <div className="read more mt-4">
              <Link to ="/insights">

              
              <p className="text-mainBlue font-semibold 2xl:text-lg">
                Read More <ArrowRightAltIcon></ArrowRightAltIcon>
              </p>
              </Link>
            </div>
          </div>
        </motion.div>
        <div className="bottom-icons flex flex-col gap-8 mt-8 py-4">
          <hr />
          <div className="bottom-icons flex gap-4 justify-between items-center ">
            <div className="icon-news cursor-pointer opacity-30 active " onClick={()=>setJournal(0)}>
              <img src="/Section2/forbes.png" alt="forbes" />
            </div>
            <div className="icon-news cursor-pointer opacity-30"  onClick={()=>setJournal(1)}>
              <img src="/mint.png" alt="mint" />
            </div>
            <div className="icon-news cursor-pointer opacity-30"  onClick={()=>setJournal(2)}>
              <img src="/money.png" alt="moneycontrol" />
            </div>
            <div className="icon-news cursor-pointer opacity-30" onClick={()=>setJournal(3)}>
              <img src="/fortune.png" alt="fortune" />
            </div>
            <div className="icon-news cursor-pointer opacity-30" onClick={()=>setJournal(4)}>
              <img src="/abp.png" alt="abp" />
            </div>
            <div className="icon-news cursor-pointer opacity-30" onClick={()=>setJournal(5)}>
              <img src="/zee.png" alt="zee news" />
            </div>
            <div className="icon-news cursor-pointer opacity-30" onClick={()=>setJournal(6)}>
              <img src="/aajtak.png" alt="aajtak" />
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
   
    </div>
  );
}

export default Section2
