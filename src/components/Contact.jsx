import React from 'react'
import '../CSS/Contact.css'

function Contact(){
  return (
    <div className="contact">
      <h2>Contact</h2>
      <ul>
        <li>Email: <a href="mailto:example@gmail.com">example@gmail.com</a></li>
        <li>Phone: (123) 456-7890</li>
        <li>LinkedIn: <a href="https://linkedin.com/in/example">https://linkedin.com/in/example</a></li>
        <li>GitHub: <a href="https://github.com/example">https://github.com/example</a></li>
      </ul>
    </div>
  );
}

export default Contact;