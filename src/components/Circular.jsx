import React, { useState } from "react";
import img1 from "../assets/hanket_image.jpg";

import FreePhotoshoot from "./FreePhotoShoot";
import BrandIdentity from "./BrandIdentity";
import MarketplaceLaunch from "./MarketPlaceLaunch";
import HassleFreeSetup from "./HassleFreeSetup";

const Circular = () => {
  const [activeComp, setActiveComp] = useState(null);

  return (
    <section className="collage-wrapper">
      <div className="collage-container">
        {/* Circle Image */}
        <div className="circle-image">
          <img src={img1} alt="circle" />
        </div>

        {/* Rect 1 */}
        <div
          className="rect rect1"
          onClick={() => setActiveComp("photoshoot")}
          style={{ cursor: "pointer" }}
        >
          <FreePhotoshoot />
        </div>

        {/* Rect 2 */}
        <div
          className="rect rect2"
          onClick={() => setActiveComp("brand")}
          style={{ cursor: "pointer" }}
        >
          <BrandIdentity />
        </div>

        {/* Rect 3 */}
        <div
          className="rect rect3"
          onClick={() => setActiveComp("market")}
          style={{ cursor: "pointer" }}
        >
          <MarketplaceLaunch />
        </div>

        {/* Rect 4 */}
        <div
          className="rect rect4"
          onClick={() => setActiveComp("setup")}
          style={{ cursor: "pointer" }}
        >
          <HassleFreeSetup />
        </div>
      </div>

      {/* ===================== SHOW COMPONENT BELOW ==================== */}
      <div className="selected-component">
        {activeComp === "photoshoot" && <FreePhotoshoot />}
        {activeComp === "brand" && <BrandIdentity />}
        {activeComp === "market" && <MarketplaceLaunch />}
        {activeComp === "setup" && <HassleFreeSetup />}
      </div>
    </section>
  );
};

export default Circular;
