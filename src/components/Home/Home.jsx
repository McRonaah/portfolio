import React from 'react';
import background from '../../images/background.jpg';

import Skills from "./Skills"
import Interest from "./Interest"


function Home() {
  return (
    <div>
      <div className="min-h-screen bg-cover bg-center flex justify-center backdrop-blur-lg mt-14 " style={{ backgroundImage: `url(${background})` }}>
        <div className=" text-center">
          <h2 className="text-xl text-blue-300">Tech Lead & Software Engineer</h2>
          <h1 className="text-6xl font-bold">Ronald Kipchirchir</h1>
          <h3 className="mt-4 text-lg text-green-500">Welcome to my personal website</h3>
          <div className="mt-4 text-yellow-500">
          <div className="mt-4">
            <button className="px-4 py-2 font-bold text-black bg-white rounded">Hire Me</button>
          </div>
        </div>
      </div>
      </div>
      <Skills />
      <Interest />
    </div>
  );
}

export default Home;
