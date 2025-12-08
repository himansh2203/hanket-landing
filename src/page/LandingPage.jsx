import React from "react";
import logo from "../assets/hanket_image.jpg";
import Services from "../components/Service";
import favicon from "../assets/hanket_image.ico";

export default function Landing() {
  return (
    <>
      <div className="landing-container">
        {/* Header */}
        <header className="header">
          <link rel="icon" href={favicon} />
          <div className="logo-container">
            <img src={logo} alt="Brand Logo" className="logo-img" />
            <h1 className="logo-text">HANKET</h1>
          </div>
          <a href="tel:+919876543210"></a>
          <button className="btn header-btn">Book Now</button>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-left">
            <h2>We Build & Grow Your Brand</h2>
            <p>
              Get professional support from product photoshoot to brand
              identity, catalog design, marketplace launch and hassle-free
              setup.
            </p>
            <button className="btn hero-btn">Get Started</button>
          </div>

          <div className="hero-right">
            <img
              src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1"
              alt="Photoshoot"
              className="hero-img"
            />
          </div>
        </section>

        {/* Services */}
        <Services />

        {/* Contact Form */}
        <section className="contact">
          <h2 className="section-title">Contact Us</h2>
          <p>
            <center>
              Have questions? Fill out the form and we'll get back to you!
            </center>
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn form-btn">
              Send Message
            </button>
          </form>
        </section>

        {/* Footer */}
      </div>
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
    </>
  );
}
