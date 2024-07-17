import React from "react";
import ReactDOM  from "react-dom/client";
import Header from  "./component/Header.js";
import  Body from "./component/Body.js";
import About from "./component/About.js";
import Contact from "./component/Contact.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";


const Applayout = ()=>{
    return <div className = "app">
  <Header />
  <Outlet/>
    </div> 
  
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    children:[
      {
        path:"/",
        element:<Body/>, 
      },
      {
        path:"/about",
        element:<About/>,
      },
    {
      path:"/contact",
      element:<Contact/>,
    },
    ],
  },

]);
    const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(< RouterProvider router={appRouter} />);