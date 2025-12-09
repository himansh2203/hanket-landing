import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // page reload rokhne ke liye
    alert("Your form has been submitted!");

    // Formsubmit.co pe form submit karna
    e.target.submit();

    // Redirect to another website after submission
    window.location.href = "https://hanket-landing.vercel.app/"; // replace with your desired URL
  };

  return (
    <section className="contact">
      <h2 className="section-title">Contact Us</h2>
      <p style={{ textAlign: "center" }}>
        Have questions? Fill out the form and we'll get back to you!
      </p>
      <form
        className="contact-form"
        action="https://formsubmit.co/hanketstudio@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
      >
        {/* Important hidden inputs */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_subject" value="New Contact Form Message" />

        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit" className="btn form-btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
