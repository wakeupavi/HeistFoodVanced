import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css"

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import Footer from "./components/babbarFooter";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
// import { Link } from "react-router-dom";
import ContactUsPage from "./components/ContactPage";
import RestrauMenu from "./components/RestrauMenu";
// import Profile from "./components/ProfileClass";
import Profile from "./components/Profile";
import { Suspense, lazy } from "react";
import {Provider} from "react-redux"
import store from "./utils/store";
import Cart from "./components/Cart";
import SearchBar from "./components/SearchBar";
// import { useSelector,useDispatch } from "react-redux";
// import {setModal} from "./utils/Slices/ShowModal";
import AuthModal from "./components/AuthModal";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Carousel from "./components/Carousel";
// import Shimmer from "./components/Shimmer";

/**
 * Chunking
 * Code Spliting
 * Dyanmaic Buldling
 * Lazy Loading
 * On Demand Loading
 * Dynamic import
 */

// const showModal=useSelector((store)=>store.modal.showModal)
// const dispatch=useDispatch();

// console.log("ShowModel",showModal)

const Instamart = lazy(() => import("./components/Instamart"));
// Upon On Demand Laoding -->Upon render-->Suspend Loading
// never lazy load inside component because it will lazy load after evry cycle/render

const AppLayout = () => (
  
  <Provider store={store}>
    <div className="">
    <Header />
  
   <Outlet />

    {/* <Footer /> */}
  </div>
<ToastContainer/>

  </Provider>
);



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", //parentPath/{path}==>localhost:1234/about/profile
            element: <Profile name={"Avi gupta"} />,
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactUsPage />,
      },
      {
        path: "/signIn",
        element: <SignUp/>,
      },
      {
        path: "/carousel",
        element: <Carousel/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/login",
        element: <AuthModal/>,
      },
      {
        path: "/search",
        element: <SearchBar />,
      },
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={()=>{ <h1>Wait its Loading</h1>}}>
            <Instamart/>
          </Suspense>
        ),
        // in this fallback you paas it whatever you want to show until and unless instamart
      },
      {
        path: "/restaurant/:resId",
        element: <RestrauMenu />,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
  },

  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>)
root.render((<RouterProvider router={appRouter} />));

// The colon (:) is used to specify a placeholder for a dynamic value in the URL. When a user navigates to a URL that matches this route pattern, the actual value that matches :resId will be extracted from the URL and made available as a parameter in your route handler or component. You can access this parameter using the route's props
