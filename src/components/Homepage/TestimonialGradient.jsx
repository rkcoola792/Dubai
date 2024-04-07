import React from "react";
import {
  FiCreditCard,
  FiMail,
  FiUser,
  FiUsers,
  
} from "react-icons/fi";
import { RiNetflixFill ,RiAmazonFill,} from "react-icons/ri";
import { SiFlipkart } from "react-icons/si";
import StarRateIcon from "@mui/icons-material/StarRate";
import { motion } from "framer-motion";

const TestimonialGradient= () => {
  return (
    <div className="testimonial  ">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card
          title="Annette Black"
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          href="#"
          Icon={RiNetflixFill}
          designation="Chief Chairman of "
          company="Netflix"
        />
        <Card
          title="Jeff Bezoz"
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
          href="#"
          Icon={RiAmazonFill}
          designation="Chief Chairman of "
          company="Amazon"
        />
        <Card
          title="Kalyan "
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
          href="#"
          Icon={SiFlipkart}
          designation="Chief Chairman of "
          company="Netflix"
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href,designation,company }) => {
  return (
    <motion.div
      href={href}
      className="w-full p-6 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white cursor-pointer flex flex-col gap-2 justify-start items-start"
      initial={{ scale:1 }}
      whileHover={{ scale:1.05, boxShadow: "0px 5px 20px -13px rgba(0,0,0,0.65)" }}
      transition={{ duration: .6 }}
    >
      <div className="absolute inset-0  translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-4 -right-6 text-9xl text-slate-100 group-hover:text-mainBlue group-hover:rotate-12 transition-transform duration-300 scale-50" />
      <div className="flex gap-2">
       
        <img
          src="/Invisible.png"
          alt="avatar-image"
          className="w-12 h-12 rounded-[50%] object-cover mb-2 text-2xl text-mainBlue group-hover:text-white transition-colors relative z-10 duration-300 "
        />
        <div className="headings flex flex-col ">
          <h2 className="font-medium text-lg text-slate-950  relative z-10 duration-300">
            {title}
          </h2>
          <h3 className="text-sm  text-slate-950  relative z-10 duration-300">
            {designation}
            <span className="text-mainBlue font-semibold   relative z-10 duration-300">
              {company}
            </span>
          </h3>
        </div>
      </div>
      <p className="text-slate-500  relative z-10 duration-300 text-sm leading-6 2xl:text-lg 2xl:leading-8 ">
        {subtitle}
      </p>
      <div className="bottom-stars flex mb-2 mt-2 text-2xl text-mainBluetransition-colors relative z-10 duration-300">
        <StarRateIcon className="text-orange-500" />
        <StarRateIcon className="text-orange-500" />
        <StarRateIcon className="text-orange-500" />
        <StarRateIcon className="text-orange-500" />
        <StarRateIcon className="text-orange-500" />
      </div>
    </motion.div>
  );
};

export default TestimonialGradient;
