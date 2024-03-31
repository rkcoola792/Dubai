import { motion } from "framer-motion";

const RotatingDiv = () => {
  return (
    <div className="grid place-content-start ">
      <SpinningBoxText />
    </div>
  );
};

const SpinningBoxText = () => {
  return (
    <span className="flex flex-col items-center justify-center gap-6 text-3xl font-semibold text-black md:flex-row md:gap-4 scale-75">
      Availaible on <Box front="Amazon" bottom="Flipkart" back="Meesho" top="E-Store" />
    </span>
  );
};

const Box = ({ front, bottom, back, top }) => {
  return (
    <motion.span
      className="relative h-20 w-48 font-black uppercase "
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center center -40px",
      }}
      initial={{ rotateX: "0deg" }}
      animate={{
        rotateX: [
          "0deg",
          "90deg",
          "90deg",
          "180deg",
          "180deg",
          "270deg",
          "270deg",
          "360deg",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: "backInOut",
        times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 1],
      }}
    >
      {/* FRONT */}
      <span className="absolute flex h-full w-full items-center justify-center border-2 border-secondaryBlue bg-mainBlue text-white hover:bg-gradient-to-r from-mainBlue to-secondaryBlue transition duration-200  ">
        <a href="">{front}</a>
      </span>

      {/* BOTTOM */}
      <span
        style={{ transform: "translateY(5rem) rotateX(-90deg)" }}
        className="absolute flex h-full w-full origin-top items-center justify-center border-2 border-secondaryBlue bg-mainBlue text-white hover:bg-gradient-to-r from-mainBlue to-secondaryBlue transition duration-200 ease-linear hover:ease-linear "
      >
        <a href="">{bottom}</a>
      </span>

      {/* TOP */}
      <span
        style={{ transform: "translateY(-5rem) rotateX(90deg)" }}
        className="absolute flex h-full w-full origin-bottom items-center justify-center border-2 border-secondaryBlue bg-mainBlue text-white hover:bg-gradient-to-r from-mainBlue to-secondaryBlue transition duration-200 ease-linear hover:ease-linear "
      >
        <a href="">{top}</a>
      </span>

      {/* BACK */}
      <span
        style={{
          transform: "translateZ(-5rem) rotateZ(-180deg) rotateY(180deg)",
        }}
        className="absolute flex h-full w-full origin-center items-center justify-center border-2 border-secondaryBlue bg-mainBlue text-white hover:bg-gradient-to-r from-mainBlue to-secondaryBlue transition duration-200 ease-linear hover:ease-linear"
      >
        <a href="">{back}</a>
      </span>
    </motion.span>
  );
};

export default RotatingDiv;
