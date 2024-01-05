// ContactUs.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ContactUsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color:lightgreen; 
`;


const ContactForm = styled.form`
  display: grid;
  grid-gap: 10px;
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Form submitted:', formData);
    // You can add logic here to send the data to a server or perform other actions
  };

  return (
    <ContactUsContainer>
      <h2>Contact Us</h2>
      <p>
        Have questions, feedback, or just want to say hello? Use the form below to get in touch with us!
      </p>

      <ContactForm onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} />

        <button type="submit">Submit</button>
      </ContactForm>

      <p>
        We typically respond within 24 hours. For urgent matters, please contact us via email at <strong>info@example.com</strong> or by phone at <strong>(123) 456-7890</strong>.
      </p>

      <p>
        Follow us on social media for the latest updates and promotions:
      </p>
      {/* Add your social media icons or links here */}
    </ContactUsContainer>
  );
};

export default ContactUs;
