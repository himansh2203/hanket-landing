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
            wz-56 Sharbati complex Jwaha Heri 110056
          </p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            <FaEnvelope className="icon" />
            <a href="mailto:hanketstudio@gmail.com"> hanketstudio@gmail.com</a>
          </p>

          <p>
            <FaPhoneAlt className="icon" />
            <a href="tel:+9197111 55417"> +91 97111 55417</a>
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
