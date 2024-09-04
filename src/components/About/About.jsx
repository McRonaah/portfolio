import React from 'react';
import resume from '../../Docs/Ronald_Kipchirchir_CV.pdf'
import avatar1 from '../../images/avatar1.webp';
import {  FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

import Education from "./Education.jsx";
import Experience from './Experience.jsx';

function About() {
  return (
    <div className='hero'>
    <div className="about-container">
    <img src={avatar1} alt="Avatar" className="avatar" />
    <div className="info">
      <ul>
        <li>
          <strong>Name:</strong> <span>Ronald Kipchirchir</span>
        </li>
        <li>
          <strong>Age:</strong> <span>20</span>
        </li>
        <li>
          <strong>Phone:</strong> <span>+254702233145</span>
        </li>
        <li>
          <strong>City:</strong> <span>Nairobi, Kenya</span>
        </li>
        <li>
          <strong>Website:</strong> <span><a href="https://github.com/McRonaah"  target="_blank" without rel="noreferrer">Github Profile</a></span>
        </li>
        <li>
          <strong>Field:</strong> <span>Software Engineering</span>
        </li>
        <li>
          <strong>Email:</strong> <span>ronaldcheruiyot342@gmail.com</span>
        </li>
        <li>
          <strong>Freelance/Internship:</strong> <span>Available</span>
        </li>
      </ul>
      <p> I perform best in a work culture that promotes high-energy teamwork balanced with positivity and collaboration. I am dependable and creative with a strong work ethic and an artistic eye, but also bring a fun-loving and enthusiastic attitude. I possess experience in communication, critical thinking and collaboration.
      </p>
    </div>
  </div>
  <div className="resume">
      <h2>Resume</h2>
      <a href={resume} target="_blank" without rel="noreferrer">Download PDF</a>
  </div>
  <div className="contact">
      <h2>Lets Connect</h2>
      <div className='col'>
        <div className='social'>
          <a href="https://www.linkedin.com/in/ronald-kipchirchir-034983246/" target="_blank" without rel="noreferrer" ><p className='icon'><FaLinkedin /></p></a>
          <a href="https://twitter.com/Ronaah_254/" target="_blank" without rel="noreferrer"><p className='icon'><FaTwitter /></p></a>
        </div>
        <div className='social'>
          <a href="https://www.facebook.com/ronaah254/" target="_blank" without rel="noreferrer"><p className='icon'><FaFacebook /></p></a>
          <a href="https://www.instagram.com/ronaah_254_africa/" target="_blank" without rel="noreferrer"><p className='icon'><FaInstagram /></p></a>
        </div>
      </div>
    </div>
    <Education />
    <Experience />
  </div>
  
  )
}

export default About;