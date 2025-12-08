import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-left">
          <h2>We Build & Grow Your Brand</h2>
          <p>
            Get professional support from product photoshoot to brand identity,
            catalog design, marketplace launch and hassle-free setup.
          </p>
          <button
            className="btn hero-btn"
            onClick={() =>
              document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
