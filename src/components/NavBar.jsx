import React from 'react'
import '../CSS/NavBar.css'
import {
    Link,
  } from 'react-router-dom';

  const NavBar = () => (
    <nav className='nav'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
  export default NavBar;