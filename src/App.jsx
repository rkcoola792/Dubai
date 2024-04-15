import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Test from "./components/Test";
import Example from "./components/Header/Header";
import { MobileMenu } from "./components/Homepage/MobileMenu";
import Service from "./components/Service/Service";
import Blogs from "./components/Blogs/Blogs";
import Business from "./components/Business/Business";
import BlogPost from "./components/BlogPost.jsx/BlogPost";
import ContactUs from "./components/ContactUs/ContactUs";
import Insights from "./components/Insights/Insights";
import CatsClubAndBarDubai from "./components/Business/CatsClubAndBarDubai/CatsClubAndBarDubai";
import CatsClubsAndBarPhilippines from "./components/Business/CatsClubsAndBarPhilippines/CatsClubsAndBarPhilippines";
import DynoxMediaLLCDubai from "./components/Business/DynoxMediaLLCDubai/DynoxMediaLLCDubai";
import HaitchHoldingsDIFCDubai from "./components/Business/HaitchHoldingsDIFCDubai/HaitchHoldingsDIFCDubai";
import MediaDynoxPrivateLimitedIndia from "./components/Business/MediaDynoxPrivateLimitedIndia/MediaDynoxPrivateLimitedIndia";
import UnifiedCapitalAndInvestmentIndia from "./components/Business/UnifiedCapitalAndInvestmentIndia/UnifiedCapitalAndInvestmentIndia";
import UnifiedChelseaPlazaHotel from "./components/Business/UnifiedChelseaPlazaHotel/UnifiedChelseaPlazaHotel";
import UnifiedEventsAndHospitalityDubai from "./components/Business/UnifiedEventsAndHospitalityDubai/UnifiedEventsAndHospitalityDubai";
import UnifiedInvestmentsLLCDubai from "./components/Business/UnifiedInvestmentsLLCDubai/UnifiedInvestmentsLLCDubai";
import UnifiedPropertiesDubai from "./components/Business/UnifiedPropertiesDubai/UnifiedPropertiesDubai";
import AssetsRestructuring from "./components/Service/RealEstate/RealEstate";
import InstantBusinessLoan from "./components/Service/HealthCare/Healthcare";
import BusinessBanking from "./components/Service/BusinessSetup/BusinessSetup";
import LoanTransfer from "./components/Service/LoanTransfer/LoanTransfer";
import WealthManagementSolutions from "./components/Service/WealthManagementSolutions/WealthManagementSolutions";
import MutualFund from "./components/Service/MutualFund/MutualFund";
import Treasury from "./components/Service/Treasury/Treasury";
import Licensing from "./components/Service/StockMarket/StockMarket";
import DebtRecovery from "./components/Service/Infrastructure/Infrastructure";
import Insurance from "./components/Service/Education/Education ";
import LoanRestructuring from "./components/Service/LoanRestructuring/LoanRestructuring";
import Tender from "./components/Service/Tender/Tender";
import TaxConsulting from "./components/Service/TaxConsulting/TaxConsulting";
import ProfessionalAdvisory from "./components/Service/ProfessionalAdvisory/ProfessionalAdvisory";
import Banking from "./components/Service/RenewableEnergy/RenewableEnergy";
import BusinessLoan from "./components/Service/TourismAndHospitality/TourismAndHospitality";
import RealEstate from "./components/Service/RealEstate/RealEstate";
import RenewableEnergy from "./components/Service/RenewableEnergy/RenewableEnergy";
import StockMarket from "./components/Service/StockMarket/StockMarket";
import Education from "./components/Service/Education/Education ";
import HealthCare from "./components/Service/HealthCare/Healthcare";
import Infrastructure from "./components/Service/Infrastructure/Infrastructure";
import TourismAndHospitality from "./components/Service/TourismAndHospitality/TourismAndHospitality";
import BusinessSetup from "./components/Service/BusinessSetup/BusinessSetup";
import MobileMenuNew from "./components/MobileMenuNew/MobileMenuNew";
import AboutMe from "./components/AboutMe/AboutMe";
import TermsAndCondition from "./components/TermsAndCondition/TermsAndCondition";
// import AboutMe from "./components/AboutMe/AboutMe";





function App() {
 

  

  const Layout = () => {
    return (
      <>
      
        <div className="overflow-x-clip lg:overflow-x-visible relative">
        <div className="hidden lg:block fixed w-full top-0 z-[100]">

        <Example></Example>
        </div>
        <div className="lg:hidden fixed w-full -top-2 z-[100] ">
        {/* <MobileMenu/> */}
        <MobileMenuNew></MobileMenuNew>
        </div>
        
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { path: "/", element: <Homepage></Homepage> },
        { path: "/service/real-estate", element: <RealEstate/> },
        { path: "/service/renewable-energy", element: <RenewableEnergy/> },
        { path: "/service/business-setup", element: <BusinessSetup/> },
        { path: "/service/tourism-and-hospitality", element: <TourismAndHospitality/> },
        { path: "/service/infrastructure", element: <Infrastructure/> },
        { path: "/service/healthcare", element: <HealthCare/> },
        { path: "/service/education", element: <Education/> },
        { path: "/service/stock-market", element: <StockMarket/> },

        { path: "/service/licensing", element: <Licensing/> },
        { path: "/service/debtRecovery", element: <DebtRecovery/> },
        { path: "/service/assetsRestructuring", element: <AssetsRestructuring/> },
        { path: "/service/insurance", element: <Insurance/> },
        { path: "/service/loanRestructuring", element: <LoanRestructuring/> },
        { path: "/service/assetsRestructuring", element: <AssetsRestructuring/> },
        { path: "/service/tender", element: <Tender/> },
        { path: "/service/taxConsulting", element: <TaxConsulting/> },
        { path: "/service/professionalAdvisory", element: <ProfessionalAdvisory/> },
        { path: "/service/banking", element: <Banking/> },
        { path: "/blogs", element: <Blogs></Blogs> },
        { path: "/business/CatsClubAndBarDubai", element: <CatsClubAndBarDubai></CatsClubAndBarDubai> },
        { path: "/business/CatsClubsAndBarPhilippines", element: <CatsClubsAndBarPhilippines></CatsClubsAndBarPhilippines> },
        { path: "/business/DynoxMediaLLCDubai", element: <DynoxMediaLLCDubai></DynoxMediaLLCDubai> },
        { path: "/business/HaitchHoldingsDIFCDubai", element: <HaitchHoldingsDIFCDubai></HaitchHoldingsDIFCDubai> },
        { path: "/business/MediaDynoxPrivateLimitedIndia", element: <MediaDynoxPrivateLimitedIndia></MediaDynoxPrivateLimitedIndia> },
        { path: "/business/UnifiedCapitalAndInvestmentsIndia", element: <UnifiedCapitalAndInvestmentIndia></UnifiedCapitalAndInvestmentIndia> },
        { path: "/business/UnifiedChelseaPlazaHotel", element: <UnifiedChelseaPlazaHotel></UnifiedChelseaPlazaHotel> },
        { path: "/business/UnifiedEventsAndHospitalityDubai", element: <UnifiedEventsAndHospitalityDubai></UnifiedEventsAndHospitalityDubai> },
        { path: "/business/UnifiedInvestmentsLLCDubai", element: <UnifiedInvestmentsLLCDubai></UnifiedInvestmentsLLCDubai> },
        { path: "/business/UnifiedPropertiesDubai", element: <UnifiedPropertiesDubai></UnifiedPropertiesDubai> },
        { path: "/blog/:blogName", element: <BlogPost></BlogPost> },
        { path: "/contact-us", element: <ContactUs></ContactUs> },
        { path: "/insights", element: <Insights></Insights> },
        { path: "/about-me", element: <AboutMe/> },
        { path: "/terms-condition", element: <TermsAndCondition/> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;