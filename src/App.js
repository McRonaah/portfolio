import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from "./components/Home";
import About from './components/About';
import Services from './components/Services';
import Footer from "./components/Footer";


const App = () => (
  <>
    <div className="router" style={{ display: 'flex' }}>
      <div style={{ width: '20%', padding: '20px' }}>
        <NavBar />
      </div>
      {/* <div style={{ width: '80%', padding: '20px' }}> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
       {/* </div> */}
    </div>
    
    <Footer />
  </>
);

export default App;
