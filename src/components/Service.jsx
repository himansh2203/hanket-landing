import React from "react";
import FreePhotoshoot from "./FreePhotoShoot";
import BrandIdentity from "./BrandIdentity";
import MarketplaceLaunch from "./MarketPlaceLaunch";
import HassleFreeSetup from "./HassleFreeSetup";

export default function Services() {
  return (
    <section className="services">
      <h2 className="section-title">Our Services</h2>
      <div className="service-grid">
        <FreePhotoshoot />
        <BrandIdentity />
        <MarketplaceLaunch />
        <HassleFreeSetup />
      </div>
    </section>
  );
}
