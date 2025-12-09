import React from "react";
import img1 from "../assets/hanket_image.jpg";
import photo1 from "../assets/hanket_image.jpg";
import photo2 from "../assets/hanket_image.jpg";
import photo3 from "../assets/hanket_image.jpg";
import photo4 from "../assets/hanket_image.jpg";

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
        <div className="circle-image">
          <img src={img1} alt="center" />
        </div>

        {/* RECT 1 → Free Photoshoot */}
        <div
          className="rect rect1 card"
          onClick={() => scrollToSection("photoshoot-sec")}
        >
          <img src={photo1} alt="Free Photoshoot" />
          <h3>Free Photoshoot</h3>
        </div>

        {/* RECT 2 → Brand Identity */}
        <div
          className="rect rect2 card"
          onClick={() => scrollToSection("brand-sec")}
        >
          <img src={photo2} alt="Brand Identity" />
          <h3>Brand Identity</h3>
        </div>

        {/* RECT 3 → Marketplace Launch */}
        <div
          className="rect rect3 card"
          onClick={() => scrollToSection("market-sec")}
        >
          <img src={photo3} alt="Marketplace Launch" />
          <h3>Marketplace Launch</h3>
        </div>

        {/* RECT 4 → Hassle Free Setup */}
        <div
          className="rect rect4 card"
          onClick={() => scrollToSection("setup-sec")}
        >
          <img src={photo4} alt="Hassle Free Setup" />
          <h3>Hassle Free Setup</h3>
        </div>
      </div>
    </section>
  );
};

export default Circular;
