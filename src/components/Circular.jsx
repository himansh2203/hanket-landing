import React from "react";
import img from "../assets/hanket_image.jpg";
import img4 from "../assets/img4.jpeg";
import img1 from "../assets/img1.jpeg";

const Circular = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="collage-wrapper">
      <div className="collage-container">
        {/* Circle Image */}
        {/* <div className="circle-image">
          <img src={img1} alt="center" />
        </div> */}

        {/* RECT 1 → Free Photoshoot */}
        <div
          className="rect rect1 card"
          onClick={() => scrollToSection("photoshoot-sec")}
        >
          <img src={img1} alt="Free Photoshoot" />
          <h3>Free Photoshoot</h3>
        </div>

        {/* RECT 2 → Brand Identity */}
        <div
          className="rect rect2 card"
          onClick={() => scrollToSection("brand-sec")}
        >
          <img src={img4} alt="Brand Identity" />
          <h3>Brand Identity</h3>
        </div>

        {/* RECT 3 → Marketplace Launch */}
        <div
          className="rect rect3 card"
          onClick={() => scrollToSection("market-sec")}
        >
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
            alt="Marketplace Launch"
          />
          <h3>Marketplace Launch</h3>
        </div>

        {/* RECT 4 → Hassle Free Setup */}
        <div
          className="rect rect4 card"
          onClick={() => scrollToSection("setup-sec")}
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Hassle Free Setup"
          />
          <h3>Hassle Free Setup</h3>
        </div>
      </div>
    </section>
  );
};

export default Circular;
