import React, { useState } from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { StarIcon } from '../StarIcon/StarIcon';
import Heading from '../Heading/Heading';
import { motion } from 'framer-motion';

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
  paragraph1:"lorenkjkj hsdfkjkjsda shfdkjash ihsdfahsf hsdfihasf hsdfipua",
  paragraph2:"lorenkjkj hsdfkjkjsda shfdkjash ihsdfahsf hsdfihasf hsdfipua"

},
{id:"3",
heading:"Welcome to the Dummy Text Generator!",
date:"15 April,2022 05:13:03 PM IST",
paragraph1:"Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean i",
paragraph2:"Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean i"


},
{id:"4",
heading:"Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just",
date:"15 June,2022 05:13:03 PM IST",
paragraph1:"The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, ",
paragraph2:"ax my big quiz. Quick, Baz, get my woven flax jodhpurs! Now fax quiz Jack! my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job,"


},
{id:"5",
heading:"Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just",
date:"15 Feb,2022 05:13:03 PM IST",
paragraph1:"sdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
paragraph2:"dassssssssssssssssssssssssssssssssssssssssssssssssss"


},
{id:"6",
heading:"This a my heading",
date:"15 Jan,2022 05:13:03 PM IST",
paragraph1:"dsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
paragraph2:"dsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"


},
{id:"7",
heading:"Your name is king",
date:"21 Auguts,2022 05:13:03 PM IST",
paragraph1:"dasfasdvc asdfffff adf svsdgv sdafhi sfj sadf hstfius yaufia isdghfasidf t",
paragraph2:"vsadvvvvvvvvvvvvvvvvvvvv   fwfsddddddddddd    fasudi fsihsdfiu yasif a f78 yfshfau is adwsf"


},]

const arr=["rajeev", "kumar"]
  const [journal,setJournal]=useState(0)

console.log("jornal",journal)
  return (
    <div className="section2 my-12 py-12 bg-[#F8FCFF] relative">
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
              {journalArray[journal]?.heading}
            </h1>
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
              <h1 className="text-mainBlue font-semibold">
                Read More <ArrowRightAltIcon></ArrowRightAltIcon>
              </h1>
            </div>
          </div>
        </div>
        <div className="bottom-icons flex flex-col gap-8 mt-8 py-4">
          <hr />
          <div className="bottom-icons flex gap-4 justify-between items-center ">
            <div className="icon cursor-pointer" onClick={()=>setJournal(0)}>
              <img src="/Section2/forbes.png" alt="forbes" />
            </div>
            <div className="icon cursor-pointer" onClick={()=>setJournal(1)}>
              <img src="/Section2/mint.png" alt="mint" />
            </div>
            <div className="icon cursor-pointer" onClick={()=>setJournal(2)}>
              <img src="/Section2/moneyControl.png" alt="moneycontrol" />
            </div>
            <div className="icon cursor-pointer" onClick={()=>setJournal(3)}>
              <img src="/Section2/fortune.png" alt="fortune" />
            </div>
            <div className="icon cursor-pointer" onClick={()=>setJournal(4)}>
              <img src="/Section2/abp.png" alt="abp" />
            </div>
            <div className="icon cursor-pointer" onClick={()=>setJournal(5)}>
              <img src="/Section2/zeeNews.png" alt="zee news" />
            </div>
            <div className="icon cursor-pointer" onClick={()=>setJournal(6)}>
              <img src="/Section2/aajtak.png" alt="aajtak" />
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
