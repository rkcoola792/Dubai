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




function App() {
 

  

  const Layout = () => {
    return (
      <>
      
        <div className="overflow-x-clip lg:overflow-x-visible relative">
        <div className="hidden lg:block fixed w-full top-0 z-[100]">

        <Example></Example>
        </div>
        <div className="lg:hidden fixed w-full -top-2 z-[100] ">
        <MobileMenu/>
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
        { path: "/service/:serviceName", element: <Service></Service> },
        { path: "/blogs", element: <Blogs></Blogs> },
        { path: "/business/CatsClubAndBarDubai", element: <CatsClubAndBarDubai></CatsClubAndBarDubai> },
        { path: "/business/CatsClubsAndBarPhilippines", element: <CatsClubsAndBarPhilippines></CatsClubsAndBarPhilippines> },
        { path: "/business/DynoxMediaLLCDubai", element: <DynoxMediaLLCDubai></DynoxMediaLLCDubai> },
        { path: "/business/HaitchHoldingsDIFCDubai", element: <HaitchHoldingsDIFCDubai></HaitchHoldingsDIFCDubai> },
        { path: "/business/MediaDynoxPrivateLimitedIndia", element: <MediaDynoxPrivateLimitedIndia></MediaDynoxPrivateLimitedIndia> },
        { path: "/business/UnifiedCapitalAndInvestmentIndia", element: <UnifiedCapitalAndInvestmentIndia></UnifiedCapitalAndInvestmentIndia> },
        { path: "/business/UnifiedChelseaPlazaHotel", element: <UnifiedChelseaPlazaHotel></UnifiedChelseaPlazaHotel> },
        { path: "/business/UnifiedEventsAndHospitalityDubai", element: <UnifiedEventsAndHospitalityDubai></UnifiedEventsAndHospitalityDubai> },
        { path: "/business/UnifiedInvestmentsLLCDubai", element: <UnifiedInvestmentsLLCDubai></UnifiedInvestmentsLLCDubai> },
        { path: "/business/UnifiedPropertiesDubai", element: <UnifiedPropertiesDubai></UnifiedPropertiesDubai> },
        { path: "/blog/:blogName", element: <BlogPost></BlogPost> },
        { path: "/contact-us", element: <ContactUs></ContactUs> },
        { path: "/insights", element: <Insights></Insights> },
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