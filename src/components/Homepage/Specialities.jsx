import { motion } from "framer-motion";
import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";

const Specialities = ({subtitle1,subtitle2,subtitle3,icon1,icon2,icon3}) => {
  return (
    <div className="contact-us ">
      <motion.div
        className="grid sm:gap-12 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-"
        
        initial={{ y: 75, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <motion.div >
          <Card subtitle={subtitle1} href="#" Icon={FiUser} />
        </motion.div>
        <div
          className="card"
         
        >
          <Card subtitle={subtitle2} href="#" Icon={FiMail} />
        </div>
        <div
          className="card"
          
        >
          <Card subtitle={subtitle3} href="#" Icon={FiMail} />
        </div>
      </motion.div>
    </div>
  );
};

const Card = ({  subtitle, Icon, href }) => {
  return (
    <motion.div
      className="w-[95%]  rounded-lg border-[1px] border-slate-300 relative overflow-hidden group bg-subtleBlue cursor-pointer p-6 h-48 2xl:h-60 flex flex-col justify-center gap-4 "
      initial={{ y: 0 }}
      whileHover={{ scale:1.05, boxShadow: "0px 5px 20px -13px rgba(0,0,0,0.65)" }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 opacity-90 group-hover:text-mainBlue group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-4xl sm:text-5xl text-mainBlue  transition-colors relative z-10 duration-300" />

      <p className="opacity-90 font-semibold  relative z-10 duration-300 leading-7 2xl:text-xl 2xl:leading-8">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default Specialities;
