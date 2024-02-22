import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer bg-gray-300 flex flex-col md:flex-row items-center justify-between p-4">
      <div className="left-section flex gap-4 items-center text-center mb-4 md:mb-0">
        <FaGithub className="text-2xl" />
        <p className="text-sm">CopyRight By Ronald Kipchirchir&copy;</p>
      </div>
      <p className="text-sm italic">Last Updated: Feb. 24, 2024</p>
    </div>
  );
}

export default Footer;
