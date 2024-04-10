import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CloudinaryContext } from 'cloudinary-react'; 
import './index.css';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import MainArticle from './Home.jsx';
import Banner from './Banner.jsx';
import WaningMoon from './WaningMoon.jsx';
import Lookbook from './Lookbook.jsx';
import Contact from './Contact.jsx';
import Shop from './Shop.jsx';
import Home from './Home.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CloudinaryContext cloudName="dvlggqgbf"> 
    <BrowserRouter>
      <Banner/>
      <Nav/>
      <Routes>
        <Route path="/" element={<MainArticle />} />
        <Route path="/home" element={<Home />} />
        <Route path="/waningmoon" element={<WaningMoon />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </CloudinaryContext>
  </React.StrictMode>
);


