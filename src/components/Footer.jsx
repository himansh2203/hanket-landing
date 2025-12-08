import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Hanket Studio</h3>
            <p>123 Studio Street, City, State, 123456</p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@hanketstudio.com</p>
            <p>Phone: +91 9876543210</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <p>Facebook | Instagram | Twitter</p>
          </div>
        </div>
        <p className="footer-bottom">
          © 2025 Hanket Studio. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
