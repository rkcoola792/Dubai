import { motion } from 'framer-motion';
import React from 'react'

const Section4Component = ({icon,heading}) => {
  return (
    <motion.div
      className="w-[180px] h-[160px] border border-gray-300 rounded-lg flex flex-col gap-2 py-4 px-4 bg-subtleBlue cursor-pointer "
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 5px 20px -13px rgba(0,0,0,0.65)",
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="icon">
        <img src="/Vector.png" alt="" className="w-6" />
      </div>
      <div className="heading text-xs leading-5">{heading}</div>
    </motion.div>
  );
}

export default Section4Component
