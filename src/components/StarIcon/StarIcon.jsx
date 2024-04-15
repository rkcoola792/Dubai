import { motion } from "framer-motion";

export function StarIcon() {
  return (
    
      <motion.img
        src="/star-icon.webp"
        alt=""
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="z-50"
      />
  
  );
}
