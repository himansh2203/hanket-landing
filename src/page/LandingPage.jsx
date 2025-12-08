import React from "react";
import Services from "../components/Service";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Landing() {
  return (
    <>
      <div className="landing-container">
        <Header />
        <Hero />
        <Services />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
