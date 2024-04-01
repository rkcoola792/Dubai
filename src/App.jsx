import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Test from "./components/Test";
import Example from "./components/Header/Header";
import { MobileMenu } from "./components/Homepage/MobileMenu";
import Service from "./components/Service/Service";


function App() {
 

  

  const Layout = () => {
    return (
      <>
      
        {/* <Header></Header> */}
        <div className="hidden lg:block sticky top-0 z-[100]">

        <Example></Example>
        </div>
        <div className="lg:hidden sticky top-0 z-[100] ">
        <MobileMenu/>
        </div>
        
        <Outlet></Outlet>
        <Footer></Footer>
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { path: "/", element: <Homepage></Homepage> },
        { path: "/service", element: <Service></Service> },
        // { path:"/marketing", element:<Test></Test> },
      ],
    },
  ]);

  return (
    <div className="App ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;