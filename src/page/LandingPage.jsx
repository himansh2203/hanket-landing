import React from "react";
import Services from "../components/Service";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Hero from "../components/Hero"; // react-icons use
import WhatsApp from "../components/WhatsApp";
import Instagram from "../components/Instagram";
export default function Landing() {
  return (
    <>
      <div className="landing-container">
        <Header />
        <Hero />
        <Services />
        <ContactForm />

        {/* Floating Social Buttons */}
        <div className="floating-social">
          {/* WhatsApp */}
          <WhatsApp />
          <Instagram />
        </div>
      </div>
      <Footer />
    </>
  );
}
