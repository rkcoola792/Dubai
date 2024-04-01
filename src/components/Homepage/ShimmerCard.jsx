import { FiCloudLightning } from "react-icons/fi";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const ShimmerCard = () => {
  return (
    <div className=" px-4 ">
      <ShimmerBorderCard />
    </div>
  );
};

const ShimmerBorderCard = () => {
  return (
    <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg  p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-mainBlue-800/50">
      <div className="relative z-50 flex flex-col  p-8  overflow-hidden rounded-lg bg-[#EBF3F9]  transition-colors duration-500  ">
        <h4 className="relative z-50 mb-4 w-full text-3xl font-semibold  ">
          Introduction
        </h4>
        <p className="relative text-gray-500 leading-6 z-50">
          Mr. Bajpai is not just an investor, he's a visionary architect,
          crafting funding solutions that empower individuals, corporations, and
          a diverse range of ventures to achieve their full potential.  He has
          expertise in a broad range of industries including Real Estate,
          Renewable Energy, Business Setup, Stock Market, and the underlying
          foundations of all big movers and shakers
        </p>
        <h1 className="uppercase  border-mainBlue border-2 p-4 rounded-lg w-[70%] text-mainBlue font-semibold cursor-pointer hover:bg-mainBlue transition duration-200 ease-linear hover:ease-linear z-50 bg-subtleBlue mt-6 hover:text-white  ">
          {" "}
          Schedule a meet{" "}
          <span>
            <ArrowOutwardIcon />
          </span>
          {/* <img
            src="/abc.png"
            className="absolute z-10 bottom-1 right-1 opacity-50"
          ></img> */}
        </h1>
      </div>

      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        style={{ scale: 1.75 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500 via-blue-200/0 to-secondaryBlue opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
};

export default ShimmerCard;
