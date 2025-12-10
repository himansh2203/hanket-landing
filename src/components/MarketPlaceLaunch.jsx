import React from "react";
import marketVid from "../assets/marketVid1.mp4";
import market1 from "../assets/market1.jpeg";
import vid2 from "../assets/vid4.mp4";

export default function MarketplaceLaunch() {
  return (
    <div className="service-card" id="market-sec">
      <h3>Marketplace Launch & Sales Support</h3>
      <p>Launch & scale across Amazon, Flipkart, Meesho.</p>

      <div className="media-gallery">
        <img src={market1} alt="Sample 1" />
        <video width="100%" autoPlay muted loop>
          <source src={marketVid} type="video/mp4" />
        </video>
        <video width="100%" autoPlay muted loop>
          <source src={vid2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
