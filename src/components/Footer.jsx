import React from 'react'
import '../CSS/Footer.css'
import { FaPhoneSquareAlt, FaRegEnvelope,  FaGithubSquare, } from "react-icons/fa";


function Footer () {
  return (
      <div className="footer">
          <div className="section1">
              <h4>Contact me</h4>
          <p><FaPhoneSquareAlt />
                  +254702233145</p>
                  <p><FaRegEnvelope />
                  ronaldcheruiyot342@gmail.com &reg;</p>
                  <p><FaGithubSquare/>All rights reserved &trade; inc.</p>
                  <p>CopyRight By Dev Kipchirchir&#169;</p>
          </div>
      </div>
  )
}

export default Footer;