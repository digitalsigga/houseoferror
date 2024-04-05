import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CloudinaryContext } from 'cloudinary-react'; 
import './index.css';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import MainArticle from './MainArticle.jsx';
import Welcome from './Welcome.jsx';
import AboutUs from './AboutUs.jsx'; 
import Editorial from './Editorial.jsx';
import Lookbook from './Lookbook.jsx';
import Contact from './Contact.jsx';
import Shop from './Shop.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CloudinaryContext cloudName="dvlggqgbf"> 
    <BrowserRouter>
      <Welcome />
      <Nav />
      <Routes>
        <Route path="/" element={<MainArticle />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </CloudinaryContext>
  </React.StrictMode>
);


