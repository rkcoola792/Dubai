import React from 'react'

import StarRateIcon from "@mui/icons-material/StarRate";
import { motion } from 'framer-motion';
import TestimonialGradient from './TestimonialGradient';
const Testimonial = ({icon,name,designation,stars,description,company}) => {
  return (
    // <motion.div className="testimonial shadow-lg rounded-lg w-1/3 p-8 flex flex-col gap-4   cursor-pointer hover:bg-mainBlue hover:text-white transition duration-150 ease-out hover:ease-linear "
    // >
    //   <div className="top-name flex gap-2">
    //     <img
    //       src="/Invisible.png"
    //       alt="avatar-image"
    //       className="w-12 h-12 rounded-[50%] object-cover"
    //     />
    //     <div className="name-designation">
    //       <h1 className="name font-semibold">{name}</h1>
    //       <h1 className="designation text-gray-600 text-sm">
    //         {designation}
    //         <span className="text-mainBlue font-semibold">{company}</span>
    //       </h1>
    //     </div>
    //   </div>
    //   <div className="mid-description text-sm text-gray-500 leading-6">
    //     {description}
    //   </div>
    //   <div className="bottom-stars flex">
    //     <StarRateIcon className="text-orange-500" />
    //     <StarRateIcon className="text-orange-500" />
    //     <StarRateIcon className="text-orange-500" />
    //     <StarRateIcon className="text-orange-500" />
    //     <StarRateIcon className="text-orange-500" />
    //   </div>
    // </motion.div>
    <TestimonialGradient/>
  );
}

export default Testimonial
