import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CreditScoreIcon from '@mui/icons-material/CreditScore';

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
          <p><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Real State</p>
        </Link>
        <Link to="/service/renewable-energy" className="block text-sm hover:underline">
          <p><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Renewable Energy </p>
        </Link>
        <Link to="/service/business-setup" className="block text-sm hover:underline">
          <p><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Business Setup</p>
        </Link>
        <Link to="/service/tourism-and-hospitality" className="block text-sm hover:underline">
          <p><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Tourism and Hospitality</p>
        </Link>
        <Link to="/service/infrastructure" className="block text-sm hover:underline">
          <p><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Infrastructure</p>
        </Link>
        <Link to="/service/healthcare" className="block text-sm hover:underline">
          <p><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Healtcare</p>
        </Link>
        <Link to="/service/education" className="block text-sm hover:underline">
          <p><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Education</p>
        </Link>
        <Link to="/service/stock-market" className="block text-sm hover:underline">
          <p><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Stock Market</p>
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
          <p><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Unified Capital and Investments India</p>
        </Link>
        <Link to="/business/mediaDynoxPrivateLimitedIndia" className="block text-sm hover:underline">
          <p><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Media Dynox Private Limited India </p>
        </Link>
        <Link to="/business/unifiedInvestmentsLLCDubai" className="block text-sm hover:underline">
          <p><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Unified Investments LLC Dubai</p>
        </Link>
        <Link to="/business/unifiedEventsAndHospitalityDubai" className="block text-sm hover:underline">
          <p><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Unified Events and Hospitality Dubai</p>
        </Link>
        <Link to="/business/haitchHoldingsDIFCDubai" className="block text-sm hover:underline">
          <p><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Haitch Holdings DIFC Dubai</p>
        </Link>
        <Link to="/business/catsClubAndBarDubai" className="block text-sm hover:underline">
          <p><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Cats Club and Bar Dubai</p>
        </Link>
        <Link to="/business/CatsClubsAndBarPhilippines" className="block text-sm hover:underline">
          <p><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Cats Club and Bar Philippines</p>
        </Link>
        <Link to="/business/unifiedChelseaPlazaHotel" className="block text-sm hover:underline">
          <p><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Unified Chelsea Plaza Hotel</p>
        </Link>
        <Link to="/business/unifiedPropertiesDubai" className="block text-sm hover:underline">
          <p><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Unified Properties Dubai</p>
        </Link>
        <Link to="/business/dynoxMediaLLCDubai" className="block text-sm hover:underline">
          <p><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Dynox Media LLC Dubai</p>
        </Link>
       
      
     </div>
    </div>
  );
};

export default CenterHeader;
