import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Get in Touch with Zestora</h1>
        <p className="contact-subtitle">
          We'd love to hear from you! Whether you have a question about your order, our products, or just want to say hi — our team is here to help.
        </p>

        <div className="contact-details">
          <p><strong>Email:</strong> support@zestora.com</p>
          <p><strong>Phone:</strong> +91 90000 90000</p>
          <p><strong>Address:</strong> 007 Heritage Street, Suite 10,
          Banjara Hills, Hyderabad, Telangana 500034</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
