import { motion } from "framer-motion";

export function SmallStar() {
  return (
    <motion.img
      src="/Star.png"
      alt=""
      animate={{ rotate: 360 }}
      transition={{ ease: "linear", duration: 30, repeat: Infinity }}
      className=""
    />
  );
}
