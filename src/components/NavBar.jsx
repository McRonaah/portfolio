import React from 'react'
import '../CSS/NavBar.css'
import {
    Link,
  } from 'react-router-dom';

  const NavBar = () => (
    <nav className='nav'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
    </nav>
  );
  export default NavBar;