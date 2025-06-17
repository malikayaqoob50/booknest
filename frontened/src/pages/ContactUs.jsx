import React from 'react';
import './style.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Feel Free To ask!</h1>
      <div className='form-box'>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      </div>
    </div>
  );
};
export default ContactUs;
