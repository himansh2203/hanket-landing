import React from "react";
import img4 from "../assets/img4.jpeg";
import vid4 from "../assets/vid4.mp4";
import brandvid from "../assets/brandvid1.mp4";
import brandImg from "../assets/brand1.jpeg";

export default function BrandIdentity() {
  return (
    <div className="service-card" id="brand-sec">
      <h3>Brand Identity & Catalog Design</h3>
      <p>Logo, branding & catalog that define your brand.</p>

      <div className="media-gallery">
        <img src={img4} alt="Sample 1" />
        <img src={brandImg} alt="Sample 1" />
        {/* <video controls width="100%">
          <source src={vid4} />
        </video> */}
        <video width="100%" autoPlay muted loop>
          <source src={brandvid} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
