import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './footer.css';

function Footer() {
  const [count, setCount] = useState(0);

  return (
    <footer className="footer-container" id='contacts'>
      <div className="footer-top">
        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contact Us</h2>
          <p> info@dorcasbakery.com</p>
          <p> (123) 456-7890</p>
          <p> (123) 456-7890</p>
          <p> 123 Bakery Street, Kiambu</p>
        </div>
      </div>

      <div className="footer-social">
        <h2>Follow Us</h2>
        <div className="social-icons">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dorcas Bakery. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
