import React from 'react'
import '../CSS/Services.css'
function Services() {
  return (
    <div className="services-container">
      <h1>Services</h1>
      <div className="services">
        <div className="service">
          <h2>Web Development</h2>
          <p>I offer full-stack web development services using technologies such as React and Ruby on Rails. I can help you build custom web applications from scratch or improve and maintain existing ones.</p>
        </div>
        <div className="service">
          <h2>Code Review and Mentorship</h2>
          <p>I offer code review and mentorship services to help developers improve their skills and understand best practices. I can help you identify and fix problems in your code, and suggest ways to optimize and improve your workflow.</p>
        </div>
        <div className="service">
          <h2>Technical Writing</h2>
          <p>I am experienced in technical writing and can help you create clear and concise documentation for your projects. I can also write articles and blog posts on technical topics to help you share your expertise with a wider audience.</p>
        </div>
      </div>
    </div>
  );
  
}

export default Services