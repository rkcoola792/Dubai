import React, { useState } from "react";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import { Link } from "react-router-dom";
import CreditScoreIcon from '@mui/icons-material/CreditScore';


const MobileMenuNew = () => {
  return (
    <>
      <FlyoutNav />
      <div
        className="relative min-h-screen"
        style={{
          backgroundImage: "url(/imgs/random/12.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute h-24 inset-0 z-0 bg-white" />
      </div>
      <div className=" " />
    </>
  );
};

const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-4 sm:px-12 text-black 
      transition-all duration-300 ease-out lg:px-12 py-4 shadow-md`
   
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden gap-6 lg:flex">
          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

const Logo = ({ color = "black" }) => {
  // Temp logo from https://logoipsum.com/
  return (
    <div className="flex items-center gap-2">
    <Link to="/">
    <div className="w-28">

<img src="/Header Logo.webp"></img>
</div>
    </Link>
  
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex items-center gap-6">
      {LINKS.map((l) => (
        <NavLink key={l.text} href={l.href} FlyoutContent={l.component}>
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};

const NavLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <Link to ={href} className="relative">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </Link>
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

const CTAs = () => {
  return (
    <div className="flex  ">
      <Link to="/contact-us">
        <div className="contact-us-button bg-mainBlue text-white p-3 px-6 rounded-full cursor-pointer">
         <p>Contact Us</p>
        </div>
      </Link>
     
    </div>
  );
};

const AboutUsContent = () => {
  return (
    <div className="grid h-fit w-full shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[750px]">
      <div className=" flex flex-col gap-2">

      <Link to="/service/real-estate" className="block text-sm hover:underline">
          <p className="text-lg"><span className="mr-2 "><CreditScoreIcon></CreditScoreIcon></span>Real State</p>
        </Link>
        <Link to="/service/renewable-energy" className="block text-sm hover:underline">
          <p className="text-lg"><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Renewable Energy </p>
        </Link>
        <Link to="/service/business-setup" className="block text-sm hover:underline">
          <p className="text-lg"><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Business Setup</p>
        </Link>
        <Link to="/service/tourism-and-hospitality" className="block text-sm hover:underline">
          <p className="text-lg"><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Tourism and Hospitality</p>
        </Link>
        <Link to="/service/infrastructure" className="block text-sm hover:underline">
          <p className="text-lg"><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Infrastructure</p>
        </Link>
        <Link to="/service/healthcare" className="block text-sm hover:underline">
          <p className="text-lg"><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Healtcare</p>
        </Link>
        <Link to="/service/education" className="block text-sm hover:underline">
          <p className="text-lg"><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Education</p>
        </Link>
        <Link to="/service/stock-market" className="block text-sm hover:underline">
          <p className="text-lg"><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Stock Market</p>
        </Link>
       

        
       
      </div>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-full shadow-none lg:w-[250px] lg:shadow-xl">
    <div className="flex flex-col gap-2">
    <Link to="/business/unifiedCapitalAndInvestmentsIndia" className="block text-sm hover:underline">
          <p className="text-lg"><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Unified Capital and Investments India</p>
        </Link>
        <Link to="/business/mediaDynoxPrivateLimitedIndia" className="block text-sm hover:underline">
          <p className="text-lg"><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Media Dynox Private Limited India </p>
        </Link>
        <Link to="/business/unifiedInvestmentsLLCDubai" className="block text-sm hover:underline">
          <p className="text-lg"><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Unified Investments LLC Dubai</p>
        </Link>
        <Link to="/business/unifiedEventsAndHospitalityDubai" className="block text-sm hover:underline">
          <p className="text-lg"><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Unified Events and Hospitality Dubai</p>
        </Link>
        <Link to="/business/haitchHoldingsDIFCDubai" className="block text-sm hover:underline">
          <p className="text-lg"><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Haitch Holdings DIFC Dubai</p>
        </Link>
        <Link to="/business/catsClubAndBarDubai" className="block text-sm hover:underline">
          <p className="text-lg"><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Cats Club and Bar Dubai</p>
        </Link>
        <Link to="/business/CatsClubsAndBarPhilippines" className="block text-sm hover:underline">
          <p className="text-lg"><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Cats Club and Bar Philippines</p>
        </Link>
        <Link to="/business/unifiedChelseaPlazaHotel" className="block text-sm hover:underline">
          <p className="text-lg"><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Unified Chelsea Plaza Hotel</p>
        </Link>
        <Link to="/business/unifiedPropertiesDubai" className="block text-sm hover:underline">
          <p className="text-lg"><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Unified Properties Dubai</p>
        </Link>
        <Link to="/business/dynoxMediaLLCDubai" className="block text-sm hover:underline">
          <p className="text-lg"><span className="mr-2"><CreditScoreIcon></CreditScoreIcon></span>Dynox Media LLC Dubai</p>
        </Link>
    </div>
    </div>
  );
};



const MobileMenuLink = ({ children, href, FoldContent, setMenuOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-neutral-950">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <Link to={href}
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            
          >
            {children}
          </Link>
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <Link to ={href}
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
          }}
          
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
        >
          <span>{children}</span>
          {/* <FiArrowRight /> */}
        </Link>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? "fit-content" : "0px",
            marginBottom: open ? "24px" : "0px",
            marginTop: open ? "12px" : "0px",
          }}
          className="overflow-hidden"
        >
          <FoldContent />
        </motion.div>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <Logo color="black" />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.component}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className="flex justify-center p-3">
              <CTAs />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenuNew;

const LINKS = [
    {
        text: "Blogs",
        href: "/blogs",
        
      },
    
  {
    text: "Services",
    // href: "#",
    component: AboutUsContent,
  },
  {
    text: "Business",
    // href: "#",
    component: PricingContent,
  },
  {
    text: "Insights",
    href: "/insights",
  },

];