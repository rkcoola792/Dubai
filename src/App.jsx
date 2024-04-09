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
        { path: "/business", element: <Business></Business> },
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