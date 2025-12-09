import React from "react";
import img1 from "../assets/hanket_image.jpg";
import HassleFreeSetup from "./HassleFreeSetup";
import MarketplaceLaunch from "./MarketPlaceLaunch";
import BrandIdentity from "./BrandIdentity";
import FreePhotoshoot from "./FreePhotoShoot";

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

        {/* RECT 1 → scroll to FreePhotoshoot */}
        <div
          className="rect rect1"
          onClick={() => scrollToSection("photoshoot-sec")}
        >
          <FreePhotoshoot />
        </div>

        {/* RECT 2 → scroll to Brand Identity */}
        <div
          className="rect rect2"
          onClick={() => scrollToSection("brand-sec")}
        >
          <BrandIdentity />
        </div>

        {/* RECT 3 → scroll to Marketplace Launch */}
        <div
          className="rect rect3"
          onClick={() => scrollToSection("market-sec")}
        >
          <MarketplaceLaunch />
        </div>

        {/* RECT 4 → scroll to Hassle Free Setup */}
        <div
          className="rect rect4"
          onClick={() => scrollToSection("setup-sec")}
        >
          <HassleFreeSetup />
        </div>
      </div>
    </section>
  );
};

export default Circular;
