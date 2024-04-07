import { motion } from 'framer-motion';
import React from 'react'

const Section4Component = ({icon,heading}) => {
  return (
    <motion.div
      className=" h-[13rem] sm:h-fit border border-gray-300 bg-white rounded-lg flex flex-col sm:gap-2  gap-6 p-4  2xl:p-6 cursor-pointer z-50 justify-center items-center sm:items-start"
      initial={{ scale: 1, y: 75, opacity: 0 }}
 
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 5px 20px -13px rgba(0,0,0,0.65)",
      }}
      
    >
      <div className="icon">
        <img src="/Vector.png" alt="icon" className=" sm:w-6 2xl:w-8" />
      </div>
      <div className="heading  sm:text-xs sm:leading-5 2xl:text-base"><p>{heading}</p></div>
    </motion.div>
  );
}

export default Section4Component
