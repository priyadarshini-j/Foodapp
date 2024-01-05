import React, { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Login from './Pages/Login/Login.js';
import SignUp from './Pages/SignUp/SignUp.js';
import Home from './Pages/Home/Home.js';
import LandingPage from './Pages/LandingPage/LandingPage.js';
import Header from './Pages/Header/Header.js';
import Footer from './Pages/Footer/Footer.js';
import Category from './Pages/category.js';
import Veg from './Pages/category/Veg.js';
import NonVeg from './Pages/category/Non-Veg.js';
import Cake from './Pages/category/Cake.js';
import BuyNow from './Pages/category/BuyNow.js';
import Icecreame from './Pages/category/Icecreame.js';
import AboutUs from './Pages/Footer/AboutUs.js';
import OurServices from './Pages/Footer/OurServices.js';
import PrivacyPolicy from './Pages/Footer/PrivacyPolicy.js';
import Shipping from './Pages/Footer/Shipping.js';
import ContactUs from './Pages/Footer/ContactUs.js';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <SignUp/>,
  },
  {
    path: '/category',
    element: <Category />,
  },
  {
    path: '/veg',
    element: <Veg />,
  },
  {
    path: '/nonveg',
    element: <NonVeg />,
  },
  {
    path: '/cake',
    element: <Cake />,
  },
  {
    path: '/icecreame',
    element: <Icecreame />,
  },
  {
    path: '/buynow',
    element: <BuyNow />,
  },
  {
    path: '/aboutus',
    element: <AboutUs />,
  },
  {
    path: '/ourservices',
    element: <OurServices/>,
  },
  {
    path: '/privacypolicy',
    element: <PrivacyPolicy/>,
  },
  {
    path: '/shipping',
    element: <Shipping/>,
  },
  {
    path: '/contactus',
    element: <ContactUs/>,
  },
  
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/access-denied',
    element: <div>Invalid Username and Password</div>,
  },
]);

function Navigation(props) {

  return <div className='main-container'>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </div>;
}

export default Navigation;
