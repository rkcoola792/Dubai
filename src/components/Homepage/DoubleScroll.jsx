import { motion } from "framer-motion";


const row1 = ["/DoubleLogos/axis.webp", "/DoubleLogos/baroda.webp","/DoubleLogos/boi.webp","/DoubleLogos/canara.webp","/DoubleLogos/corporate.webp","/DoubleLogos/federal.webp","/DoubleLogos/hdfc.webp","/DoubleLogos/idbi.webp","/DoubleLogos/kotak.webp","/DoubleLogos/laksmi.webp","/DoubleLogos/maharastra.webp","/DoubleLogos/mufg.webp",];

const row2 = ["/DoubleLogos/yes.webp", "/DoubleLogos/vijay.webp","/DoubleLogos/south.webp","/DoubleLogos/pnb.webp","/DoubleLogos/oriental.webp","/DoubleLogos/federal.webp","/DoubleLogos/union.webp","/DoubleLogos/induslnd.webp","/DoubleLogos/axis.webp","/DoubleLogos/karnataka.webp",];



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
    <p
      href=""
      rel="nofollow"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center cursor-pointer"
    >
      {/* <Icon className="text-4xl md:text-5xl" /> */}
      <img src={Icon} alt="" />
    </p>
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
