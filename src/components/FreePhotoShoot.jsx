import React from "react";

export default function FreePhotoshoot() {
  return (
    <div className="service-card" id="photoshoot-sec">
      <h3>Free Product Photoshoot</h3>
      <p>Get premium product images at zero cost.</p>

      {/* Example images/videos */}
      <div className="media-gallery">
        <img
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
          alt="Sample 1"
        />
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
          alt="Sample 2"
        />
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
