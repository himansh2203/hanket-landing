import React from "react";

export default function BrandIdentity() {
  return (
    <div className="service-card" id="brand-sec">
      <h3>Brand Identity & Catalog Design</h3>
      <p>Logo, branding & catalog that define your brand.</p>

      <div className="media-gallery">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Sample 1"
        />
        <img
          src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed8b"
          alt="Sample 2"
        />
        <video controls width="100%">
          <source
            src="https://www.w3schools.com/html/movie.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
