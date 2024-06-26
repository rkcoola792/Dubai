import { motion } from "framer-motion";
import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";

const VisionCard = ({
  subtitle1,
  subtitle2,
  subtitle3,
  icon1,
  icon2,
  icon3,
}) => {
  return (
    <div className="contact-us ">
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ y: 75, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <motion.div>
          <Card subtitle={subtitle1} href="#" Icon={FiUser} />
        </motion.div>
        <div className="card">
          <Card subtitle={subtitle2} href="#" Icon={FiMail} />
        </div>
        <div className="card">
          <Card subtitle={subtitle3} href="#" Icon={FiMail} />
        </div>
      </motion.div>
    </div>
  );
};

const Card = ({ subtitle, Icon, href }) => {
  return (
    <motion.div
      className="  rounded border-[1px] border-slate-300 relative overflow-hidden group bg-subtleBlue cursor-pointer sm:px-3 sm:py-3 sm:h-36 sm:w-36 h-32 p-4 "
      initial={{ y: 0 }}
      // whileHover={{ y: -10, boxShadow: "0px 30px 40px -13px rgba(0,0,0,0.65)" }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-mainBlue to-secondaryBlue translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-4 -right-4  text-6xl text-slate-100 group-hover:text-secondaryBlue group-hover:rotate-12 transition-transform duration-300 " />
      <Icon className="mb-2 sm:text-2xl text-4xl text-mainBlue group-hover:text-white transition-colors relative z-10 duration-300" />

      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300 sm:text-xs text-sm mt-2">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default VisionCard;
