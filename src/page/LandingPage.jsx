import React from "react";
import Services from "../components/Service";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Hero from "../components/Hero"; // react-icons use
import WhatsApp from "../components/WhatsApp";
import Instagram from "../components/Instagram";
import ReviewSlider from "../components/ReviewSlider";
import AdsBloock from "../components/AdsBlock";
import Circular from "../components/Circular";
export default function Landing() {
  return (
    <>
      <div className="landing-container">
        <Header />
        <Hero />
        <AdsBloock />
        <Circular />
        <Services />
        <ContactForm />
        <ReviewSlider />
        <div className="floating-social">
          <WhatsApp />
          <Instagram />
        </div>
      </div>
      <Footer />
    </>
  );
}
