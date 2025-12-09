import React from "react";
import img1 from "../assets/hanket_image.jpg";

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
          <img
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
            alt="Free Photoshoot"
          />
          <h3>Free Photoshoot</h3>
        </div>

        {/* RECT 2 → Brand Identity */}
        <div
          className="rect rect2 card"
          onClick={() => scrollToSection("brand-sec")}
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Brand Identity"
          />
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
