import React from 'react'
import '../CSS/Footer.css'
import { FaPhone, FaRegEnvelope,  FaGithub, FaWhatsapp, } from "react-icons/fa";


function Footer () {
  return (
      <div className="footer">
          <div className="section1">
              <h4>Contact me</h4>
                <p><a href='https://wa.me/+254702233145' target="_blank" rel="noreferrer"><FaWhatsapp/>+254702233145</a></p>
                <p> <a href="tel:+254111310907" target="_blank" rel="noreferrer"><em class="lnr lnr-phone-handset"></em><FaPhone />+254111310907 </a></p>
                <p><FaRegEnvelope /><a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ronaldcheruiyot342@gmail.com" target="_blank" rel="noreferrer">ronaldcheruiyot342@gmail.com</a> &reg;</p>
                <p><FaGithub/>All rights reserved &trade; inc.</p>
                <p>CopyRight By Ronald Kipchirchir&#169;</p>
          </div>
      </div>
  )
}

export default Footer;