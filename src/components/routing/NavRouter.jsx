import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Index from "../../views/Index/Index";
import AboutUs from "../../views/AboutUs/AboutUs";
import Loader from "../loader/Loader";
import SignIn from "../../views/SignIn/SignIn";
import SignUp from "../../views/SignUp/SignUp";
import Calculator from "../../views/Calculator/Calculator";
import ProfileUser from "../../views/ProfUser/ProfileUser";
import Contacts from "../../views/Contacts/Contacts";
import Tracking from "../../views/Tracking/Tracking";
import TrackInfo from "../../views/Tracking/TrackInfo";
import Admin from "../Admin/Admin";
import InStock from "../../views/InStock/InStock";
import AddNewPost from "../../views/AddNewCar/AddNewPost";
import AboutCar from "../../views/AboutCar/AboutCar";
import Update from "../UpdateCompon/Update";

const NavRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: "Error",
    children: [
      {
        element: <Index />,
        index: true,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/loader",
        element: <Loader />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/calculator",
        element: <Calculator />,
      },
      {
        path: "/profile",
        element: <ProfileUser />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/tracking",
        element: <Tracking />,
      },
      {
        path: "/track_vin",
        element: <TrackInfo />,
      },
      {
        path: "/stock",
        element: <InStock />,
      },
      {
        path: "/new_post",
        element: <AddNewPost />,
      },
      {
        path: "/about_car/:carId",
        element: <AboutCar />,
      },
      {
        path: "/update_car/:carId",
        element: <Update />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);

export default NavRouter;
