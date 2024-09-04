import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

import Home from "./components/Home/Home";
import About from './components/About/About';
import Portfolio from "./components/Portfolio/Portfolio";
import Services from './components/Services/Services';
import Contact from "./components/Contact/Contact";

import Footer from "./components/Footer";


const App = () => (
  <>
    <div>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    
    <Footer />
  </>
);

export default App;
