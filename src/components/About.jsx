import React from 'react'
import '../CSS/About.css'
import avatar from '../images/avatar.png'; 

function About() {
  return (
    <div className='hero'>
    <div className="about-container">
    <img src={avatar} alt="Avatar" className="avatar" />
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
          <strong>Website:</strong> <span></span>
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
      <a href="/path/to/resume.pdf">Download PDF</a>
  </div>
  <div className="contact">
      <h2>Lets Connect</h2>
      <ul>
        <li>Email: <a href="mailto:example@gmail.com">example@gmail.com</a></li>
        <li>Phone: (123) 456-7890</li>
        <li>LinkedIn: <a href="https://linkedin.com/in/example">https://linkedin.com/in/example</a></li>
        <li>GitHub: <a href="https://github.com/example">https://github.com/example</a></li>
      </ul>
    </div>
    
  </div>
  
  )
}

export default About