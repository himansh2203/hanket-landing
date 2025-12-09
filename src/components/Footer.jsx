import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Studio Info */}
        <div className="footer-section">
          <h3>Hanket Studio</h3>
          <p>
            <FaMapMarkerAlt className="icon" />
            123 Studio Street, City, State 123456
          </p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            <FaEnvelope className="icon" />
            <a href="mailto:info@hanketstudio.com"> info@hanketstudio.com</a>
          </p>

          <p>
            <FaPhoneAlt className="icon" />
            <a href="tel:+919811306669"> +91 98113 06669</a>
          </p>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a
            className="social-link"
            href="https://www.instagram.com/hanketstudio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" /> Hanket
          </a>
        </div>
      </div>

      <p className="footer-bottom">
        © 2025 Hanket Studio. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
