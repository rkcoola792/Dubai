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
          subtitle="As someone who's always been a bit apprehensive about managing money, finding ABC Financial Services was a game-changer. Their personalized approach and dedication to understanding my unique financial situation gave me the confidence I needed to take control of my finances. With their guidance, I've seen significant growth in my savings and investments, and I finally feel secure about my financial future."
          href="#"
          Icon={RiNetflixFill}
          designation="Chief Chairman of "
          company="Netflix"
        />
        <Card
          title="Jeff Bezoz"
          subtitle="I can't recommend DEF Financial Services enough! From day one, their team went above and beyond to tailor a financial plan that aligned perfectly with my goals and aspirations. Their transparent communication and proactive approach to managing my portfolio have not only yielded impressive returns but have also given me peace of mind knowing that my finances are in expert hands. Trusting them was best decision. "
          href="#"
          Icon={RiAmazonFill}
          designation="Chief Chairman of "
          company="Amazon"
        />
        <Card
          title="Kalyan "
          subtitle="JKL Financial Services has been instrumental in helping me navigate life's financial complexities. Their team's depth of expertise, coupled with their genuine commitment to client success, has made all the difference for me. Whether it's retirement planning, investment strategies, or simply optimizing my budget, JKL has been there every step of the way, offering insightful advice and solutions tailored to my needs. "
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
