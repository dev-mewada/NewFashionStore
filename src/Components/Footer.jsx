
import React from 'react';
import './Footer.css';

import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  Email,
  LocationOn,
  Phone
} from '@mui/icons-material';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h2 className="footer-logo">
            Fashion<span>Store.</span>
          </h2>

          <p>
            Discover the latest fashion trends for Men,
            Women and Kids. Shop your favorite styles
            at the best prices.
          </p>

          <div className="social-icons">
            <a href="#"><Facebook /></a>
            <a href="#"><Instagram /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><YouTube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-section">
          <h3>Customer Support</h3>

          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Return Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>
            <LocationOn /> Bhopal, Madhya Pradesh
          </p>

          <p>
            <Phone /> +91 9876543210
          </p>

          <p>
            <Email /> support@fashionstore.com
          </p>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © 2026 FashionStore. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
