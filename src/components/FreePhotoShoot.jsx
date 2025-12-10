import React from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img 2.jpeg";

export default function FreePhotoshoot() {
  return (
    <div className="service-card" id="photoshoot-sec">
      <h3>Free Product Photoshoot</h3>
      <p>Get premium product images at zero cost.</p>

      {/* Example images/videos */}
      <div className="media-gallery">
        <img src={img1} alt="Sample 1" />
        <img src={img2} alt="Sample 2" />
        <video controls width="100%">
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
