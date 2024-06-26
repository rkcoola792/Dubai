import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CenterHeader = () => {
  return (
    <div className="flex justify-center px-3  gap-12">
      <Link to="/blogs">

      <p className="cursor-pointer">Blog</p>
      </Link>
        <div className="services flex justify-center items-center text-textColor cursor-pointer ">
          <FlyoutLink href="/service/loanTransfer" FlyoutContent={PricingContent}>
            Services
            <KeyboardArrowDownIcon className="text-textColor " />
          </FlyoutLink>
        </div>
      <div className="business flex cursor-pointer">
        <FlyoutLink href="/service/loanTransfer" FlyoutContent={Business}>
          Business
          <KeyboardArrowDownIcon />
        </FlyoutLink>
      </div>
      <Link to="/insights">

      <p className="cursor-pointer">Insights</p>
      </Link>
      <Link to="/about-me">

      <p className="cursor-pointer">About Me</p>
      </Link>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <div  className="relative text-black">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-mainBlue transition-transform duration-300 ease-out"
        />
      </div>
      <AnimatePresence>
        {showFlyout && ( 
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-[600px] bg-white p-6 shadow-xl">
      <div className="space grid grid-cols-2 gap-4 ">
        
        <Link to="/service/real-estate" className="block text-sm hover:underline">
          <div className="flex gap-2"><span className="">
          <img src='/Real Estate.webp' className="w-6"></img>
          </span>Real Estate</div>
        </Link>
        <Link to="/service/renewable-energy" className="block text-sm hover:underline">
          <div className="mr-2 flex gap-2"><span ><img src="/Renewable Energy.webp" className="w-6"></img></span>Renewable Energy </div>
        </Link>
        <Link to="/service/business-setup" className="block text-sm hover:underline">
          <div className="mr-2 flex gap-2"><span className="w-6"><img src="/Instant Business Loan.webp"></img></span>Business Setup</div>
        </Link>
        <Link to="/service/tourism-and-hospitality" className="block text-sm hover:underline">
          <div className="mr-2 flex gap-2"><span className="w-6"><img src="/Tourism & Hospitality.webp"></img></span>Tourism and Hospitality</div>
        </Link>
        <Link to="/service/infrastructure" className="block text-sm hover:underline">
          <div className="mr-2 flex gap-2"><span className="w-6"><img src="/Infrastructure.webp"></img></span>Infrastructure</div>
        </Link>
        <Link to="/service/healthcare" className="block text-sm hover:underline">
          <div className="mr-2 flex gap-2"><span className="w-6"><img src="/Health Care.webp"></img></span>Healtcare</div>
        </Link>
        <Link to="/service/education" className="block text-sm hover:underline">
          <div className="mr-2 flex gap-2"><span className="w-6"><img src="/Education.webp"></img></span>Education</div>
        </Link>
        <Link to="/service/stock-market" className="block text-sm hover:underline">
          <div className="mr-2 flex gap-2"><span className="w-6"><img src="/Stock Market.webp"></img></span>Stock Market</div>
        </Link>
     </div>
  </div>
  );
};

const Business = () => {
  return (
    <div className="w-[600px] bg-white p-6 shadow-xl">
      <div className="space grid grid-cols-2 gap-4 ">
        
        <Link to="/business/unifiedCapitalAndInvestmentsIndia" className="block text-sm hover:underline">
          <p><span className="mr-2"></span>Unified Capital and Investments India</p>
        </Link>
        <Link to="/business/mediaDynoxPrivateLimitedIndia" className="block text-sm hover:underline">
          <p><span className="mr-2"></span>Media Dynox Private Limited India </p>
        </Link>
        <Link to="/business/unifiedInvestmentsLLCDubai" className="block text-sm hover:underline">
          <p><span className="mr-2"></span>Unified Investments LLC Dubai</p>
        </Link>
        <Link to="/business/unifiedEventsAndHospitalityDubai" className="block text-sm hover:underline">
          <p><span className="mr-2"></span>Unified Events and Hospitality Dubai</p>
        </Link>
        <Link to="/business/haitchHoldingsDIFCDubai" className="block text-sm hover:underline">
          <p><span className="mr-2"></span>Haitch Holdings DIFC Dubai</p>
        </Link>
        <Link to="/business/catsClubAndBarDubai" className="block text-sm hover:underline">
          <p><span className="mr-2"></span>Cats Club and Bar Dubai</p>
        </Link>
        <Link to="/business/CatsClubsAndBarPhilippines" className="block text-sm hover:underline">
          <p><span className="mr-2"></span>Cats Club and Bar Philippines</p>
        </Link>
        <Link to="/business/unifiedChelseaPlazaHotel" className="block text-sm hover:underline">
          <p><span className="mr-2"></span>Unified Chelsea Plaza Hotel</p>
        </Link>
        <Link to="/business/unifiedPropertiesDubai" className="block text-sm hover:underline">
          <p><span className="mr-2"></span>Unified Properties Dubai</p>
        </Link>
        <Link to="/business/dynoxMediaLLCDubai" className="block text-sm hover:underline">
          <p><span className="mr-2"></span>Dynox Media LLC Dubai</p>
        </Link>
       
      
     </div>
    </div>
  );
};

export default CenterHeader;
