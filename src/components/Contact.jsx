// import React from 'react'
import React, { useState } from 'react';
import '../CSS/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [alerts, setAlerts] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validate = () => {
    let tempAlerts = {};
    let formIsValid = true;

    if (!formData.fullName) {
      formIsValid = false;
      tempAlerts['fullName'] = 'Full name is required';
    }

    if (!formData.email) {
      formIsValid = false;
      tempAlerts['email'] = 'Email is required';
    } else if (!formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      formIsValid = false;
      tempAlerts['email'] = 'Invalid email address';
    }

    if (!formData.phone) {
      formIsValid = false;
      tempAlerts['phone'] = 'Phone number is required';
    }

    setAlerts(tempAlerts);
    return formIsValid;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (validate()) {
      // submit form data
    }
  };

  return (
    <form onSubmit={handleSubmit} className='contact-form'>
      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />
      {alerts.fullName && <p>{alerts.fullName}</p>}

      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {alerts.email && <p>{alerts.email}</p>}

      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      {alerts.phone && <p>{alerts.phone}</p>}

      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Contact;