import React from 'react'
import '../CSS/Home.css'
import avatar from '../images/avatar.png'; 

function Home() {
  return (
    <div className="container">
    <img src={avatar} alt="Avatar" className="avatar" />
    <h1>Hello, I am a Software Developer</h1>
    <p>
      I am a quality-oriented, open-minded Software Developer passionate about learning and exploring new things with excellent understanding of organization operations and demands. I have the ability to get on with people easily, adapting to new cultures and environments easily, and I am confident with strong leadership skills. I have consistently been recognized for code coaching, helping others understand and improve their performance, and I have strong debugging skills in solving technical issues.
    </p>
    <p>
      During my free time, I do blog writing and exploring more about technical content and articles.
    </p>
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Ruby</li>
        <li>Ruby on Rails</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </div>
  
    <div className="resume">
      <h2>Resume</h2>
      <a href="/path/to/resume.pdf">Download PDF</a>
    </div>
  </div>
);
}

export default Home;