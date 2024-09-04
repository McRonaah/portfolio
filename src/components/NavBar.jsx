import React, { useState, useEffect } from 'react';
import LogoTransparent from "../images/navlogo.jpeg";
import LogoScroll from "../images/navlogo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 || window.scrollX > 0 || window.innerWidth !== window.outerWidth) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const [isMenuOpen] = useState(false);


  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 transition active right-0 z-10 flex items-center justify-between py-4 md:py-0 px-10 text-lg ${
        isScrolled ? 'bg-white ' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center">
        <a href="/">
          <img
            src={isScrolled ? LogoScroll : LogoTransparent}
            alt="logo"
            className=" md:w-32 cursor-pointer"
            style={{ width: '50px', height: '50px' }} // resize the logo
          />
        </a>
      </div>
      <div
        className={`w-full md:flex md:items-center md:w-auto ${
          isMenuOpen ? "block" : "hidden"
        }`}
        id="menu "
      >
         <ul className="text-base text-[#0da4d4] hover:text-[#0c2c44] pt-4 md:flex md:justify-between md:pt-0">
          <Link to="/">
            <li>
              <a
                className="text-sm pr-8 font-bold leading-none hover:text-[#0da4d4]"
                href="/"
              >
                Home
              </a>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <a
                className="text-sm pr-8 font-bold leading-none hover:text-[#0da4d4]"
                href="/about"
              >
                About
              </a>
            </li>
          </Link>
          <Link to="/portfolio">
            <li>
              <a
                className="text-sm pr-8 font-bold leading-none hover:text-[#0da4d4]"
                href="/portfolio"
              >
               Portfolio
              </a>
            </li>
          </Link>
          <Link to="/services">
            <li>
              <a
                className="text-sm pr-8 font-bold leading-none hover:text-[#0da4d4]"
                href="/services"
              >
                Services
              </a>
            </li>
          </Link>
          <Link to="/contact">
            <li>
              <a
                className="text-sm pr-8 font-bold leading-none hover:text-[#0da4d4]"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </Link>
        </ul>

        <div className="ml-auto">
          <a href="https://www.youtube.com/channel/UCoO82bia4WfA19iLEVUX2iw" target='_blank' rel="noreferrer" >
            <button className="bg-[#0c2c44] hover:bg-[#0c2c44] hover:text-white text-[#55acee] font-bold py-1 h-12 px-4 text-sm rounded-full">
              Subscribe
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
