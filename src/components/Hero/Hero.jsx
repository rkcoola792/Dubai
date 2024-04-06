import React from 'react'
import PhoneIcon from "@mui/icons-material/Phone";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      className="Hero mx-2 mt-12 sm:mx-12 text-center lg:text-left 2xl:mx-0 bg-mainBlue lg:h-[600px] my-12
      rounded-3xl overflow-hidden lg:flex-row flex flex-col gap-4 h-[800px]  "
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="left-container-content lg:w-[60%] flex  items-center ">
        <div className="content  flex flex-col gap-12 p-8 px-6 lg:px-16">
          <div className='heading flex flex-col gap-4 '>
          <motion.h1
            className="text-white font-semibold lg:text-[1.8em] xl:text-[2.4rem] text-[1.3rem] sm:text-[1.5rem]"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            Subodh Bajpai !
          </motion.h1>
         
          <motion.div
            className="subheading "
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h2 className="text-white   text-[1.5rem] sm:text-[2.5rem]  lg:text-[2rem] xl:text-[3rem] font-semibold ">
              The <span className="text-secondaryBlue"> Venture Catalyst</span>
            </h2>
            </motion.div>
          </div>
         

            <div className='decription'>
            <p className="text-white leading-7 opacity-75  sm:leading-7  md:">
            He is a visionary investor who doesn’t just back business, he conjures them into existence. Forget spreadsheets and stuffy boardrooms, he is an alchemist’s touch, transforming audacious ideas into glittering success stories. 
            </p>
            </div>
           
        
          
          
          <motion.div
            className="bottom-contact flex gap-4 justify-center lg:justify-normal sm:flex-row sm:gap-6"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="get-started bg-secondaryBlue text-mainBlue p-2 px-6 font-semibold rounded-full cursor-pointer items-center  justify-center md:flex sm:flex-row flex flex-col ">
             <p>Get started</p> 
            </div>
            <div className=' phone-number-div flex gap-6  sm:ml-2'>
            <div className="phone flex justify-center items-center bg-secondaryBlue w-12 h-12 rounded-[50%]">
              <PhoneIcon></PhoneIcon>
            </div>
            <div className="phone-number flex justify-center items-center">
              <p className="text-white -ml-4">0800555443</p>
            </div>
            </div>
           
          </motion.div>
        </div>
      </div>
      <motion.div
        className="right-container-image lg:w-[60%] "
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <img
          src="/hero-image.jpg"
          alt="hero-image"
          className="object-cover "
        />
      </motion.div>
    </motion.div>
  );
}

export default Hero
