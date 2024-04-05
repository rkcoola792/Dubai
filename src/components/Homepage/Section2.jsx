import React, { useEffect, useState } from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { StarIcon } from '../StarIcon/StarIcon';
import Heading from '../Heading/Heading';
import { motion } from 'framer-motion';
import "./Section2.scss"

const Section2 = () => {

  const journalArray=[ {
    id:"1",
    heading:"the funding mogul empowering business needs",
    date:"19 Jan,2021 05:13:03 PM IST",
    paragraph1:"In 2010, Bajpai decided to start his own investment firm with the aim of providing investment opportunities to businesses and individuals. Since then, he has developed a strong grip on the investment market of India.",
    paragraph2:"He has an excellent understanding of the trends and patterns of the market and can predict the behavior of the market with remarkable accuracy. Bajpai is known for his ability to identify businesses."
},
{id:"2",
  heading:"lorem ispusium dolor second one",
  date:"12 March,2022 05:13:03 PM IST",
  paragraph1:"In 2010, Bajpai decided to start his own investment firm with the aim of providing investment opportunities to businesses and individuals. Since then, he has developed a strong grip on the investment market of India.",
    paragraph2:"He has an excellent understanding of the trends and patterns of the market and can predict the behavior of the market with remarkable accuracy. Bajpai is known for his ability to identify businesses."

},
{id:"3",
heading:"Welcome to the Dummy Text Generator!",
date:"15 April,2022 05:13:03 PM IST",
paragraph1:"In 2010, Bajpai decided to start his own investment firm with the aim of providing investment opportunities to businesses and individuals. Since then, he has developed a strong grip on the investment market of India.",
paragraph2:"He has an excellent understanding of the trends and patterns of the market and can predict the behavior of the market with remarkable accuracy. Bajpai is known for his ability to identify businesses."


},
{id:"4",
heading:"Alex Trebek's fun TV quiz game.  Brawny gods just",
date:"15 June,2022 05:13:03 PM IST",
paragraph1:"In 2010, Bajpai decided to start his own investment firm with the aim of providing investment opportunities to businesses and individuals. Since then, he has developed a strong grip on the investment market of India.",
paragraph2:"He has an excellent understanding of the trends and patterns of the market and can predict the behavior of the market with remarkable accuracy. Bajpai is known for his ability to identify businesses."


},
{id:"5",
heading:"Alex Trebek's fun TV quiz game. Brawny gods just",
date:"15 Feb,2022 05:13:03 PM IST",
paragraph1:"In 2010, Bajpai decided to start his own investment firm with the aim of providing investment opportunities to businesses and individuals. Since then, he has developed a strong grip on the investment market of India.",
paragraph2:"He has an excellent understanding of the trends and patterns of the market and can predict the behavior of the market with remarkable accuracy. Bajpai is known for his ability to identify businesses."


},
{id:"6",
heading:"This a my heading",
date:"15 Jan,2022 05:13:03 PM IST",
paragraph1:"In 2010, Bajpai decided to start his own investment firm with the aim of providing investment opportunities to businesses and individuals. Since then, he has developed a strong grip on the investment market of India.",
paragraph2:"He has an excellent understanding of the trends and patterns of the market and can predict the behavior of the market with remarkable accuracy. Bajpai is known for his ability to identify businesses."


},
{id:"7",
heading:"Lorem ispsum dolor ais ",
date:"21 Auguts,2022 05:13:03 PM IST",
paragraph1:"In 2010, Bajpai decided to start his own investment firm with the aim of providing investment opportunities to businesses and individuals. Since then, he has developed a strong grip on the investment market of India.",
paragraph2:"He has an excellent understanding of the trends and patterns of the market and can predict the behavior of the market with remarkable accuracy. Bajpai is known for his ability to identify businesses."



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
    <div className="section2 my-12 py-12 bg-[#F8FCFF]  relative">
      <motion.div className="heading">
        <Heading
          heading="journal"
          subheading="featured in international "
        ></Heading>
      </motion.div>
      <motion.div
        className="bottom-content mt-4 sm:mx-12 sm:my-12 flex flex-col bg-white shadow-lg sm:p-12 p-4 rounded-lg"
        initial={{ scale: 0.75, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.div className="top-descriptions sm:flex sm:flex-row gap-8 "
        
        >
          <div className="left-headings sm:w-[40%] flex flex-col gap-8 ">
            <h3 className="uppercase sm:text-3xl sm:text-left text-xl text-center font-medium opacity-90 my-6 sm:my-0">
              {journalArray[journal]?.heading}
            </h3>
            <p className="opacity-70 text-center sm:text-left mb-4">
            {journalArray[journal]?.date}
            </p>
          </div>
          <div className="right-descriptions sm:w-[60%] flex text-center sm:text-left flex-col">
            <div className="descriptions flex flex-col gap-6 leading-7 text-gray-700 text-sm">
              <p>
              {journalArray[journal]?.paragraph1}
              </p>
              <p>
              {journalArray[journal]?.paragraph2}
              </p>
            </div>
            <div className="read more mt-4">
              <p className="text-mainBlue font-semibold">
                Read More <ArrowRightAltIcon></ArrowRightAltIcon>
              </p>
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
  );
}

export default Section2
