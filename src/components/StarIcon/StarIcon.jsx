import { motion } from "framer-motion";

export function StarIcon() {
  return (
    
      <motion.img
        src="/star-icon.png"
        alt=""
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
      />
  
  );
}
