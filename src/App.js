import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
// import {useState} from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./constant/appStore";
import Cart from "./components/Cart";
import SignUpPage from "./components/signup";

// import Grocery from "./components/Grocery";

//chunking
//lazy loading
const SIGNIN = lazy(()=> import("./components/signin"));

 

const AppLayout=()=>{
   return(
    <Provider store={appStore}>
    <div className="app">
     <Header/>
     <Outlet/>
     </div>
     </Provider>
   );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
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
            {
                 path:"/cart",
                 element:<Cart/>,
            },
            { 
                 path:"/sign in",
                 element:<Suspense fallback={<h1>Loading......</h1>}><SIGNIN/></Suspense>,
            },
            
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>,
            },
            {
              path:"/signup",
              element: <SignUpPage/>,
            },
            
        ],
        errorElement:<Error/>,
    },
   
]);
 const parent=ReactDOM.createRoot(document.getElementById("parent"));
 parent.render(<RouterProvider  router={appRouter}/> );






















 