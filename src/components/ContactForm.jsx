import React from "react";

const ContactForm = () => {
  return (
    <div>
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
    </div>
  );
};

export default ContactForm;
