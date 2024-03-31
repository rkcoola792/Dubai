import { motion } from "framer-motion";


const row1 = ["/DoubleLogos/axis.png", "/DoubleLogos/baroda.png","/DoubleLogos/boi.png","/DoubleLogos/canara.png","/DoubleLogos/corporate.png","/DoubleLogos/federal.png","/DoubleLogos/hdfc.png","/DoubleLogos/idbi.png","/DoubleLogos/kotak.png","/DoubleLogos/laksmi.png","/DoubleLogos/maharastra.png","/DoubleLogos/mufg.png",];

const row2 = ["/DoubleLogos/yes.png", "/DoubleLogos/vijay.png","/DoubleLogos/south.png","/DoubleLogos/pnb.png","/DoubleLogos/oriental.png","/DoubleLogos/federal.png","/DoubleLogos/union.png","/DoubleLogos/induslnd.png","/DoubleLogos/syndicate.png","/DoubleLogos/karnataka.png",];



const DoubleScroll = () => {
  return (
    <section className=" py-4">
      <div className="flex  overflow-hidden">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="flex overflow-hidden mt-8">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }) => {
  return (
    <h1
      href=""
      rel="nofollow"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center cursor-pointer"
    >
      {/* <Icon className="text-4xl md:text-5xl" /> */}
      <img src={Icon} alt="" />
    </h1>
  );
};

const LogoItemsTop = () => (
  <>
    {row1?.map((ele,index) => (
      <LogoItem Icon={ele} key={index} />
    ))}
   
  </>
);

const LogoItemsBottom = () => (
  <>
    {row2?.map((ele, index) => (
      <LogoItem Icon={ele} key={index} />
    ))}
  </>
);

export default DoubleScroll;
