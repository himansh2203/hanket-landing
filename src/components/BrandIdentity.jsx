import React, { useRef } from "react";

export default function BrandIdentity() {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };

  return (
    <div className="service-card" id="brand-sec">
      <h3>Brand Identity & Catalog Design</h3>
      <p>Logo, branding & catalog that define your brand.</p>

      <div className="media-gallery">
        <video ref={videoRef} width="100%" loop>
          <source src={brandvid} type="video/mp4" />
        </video>
        <button onClick={handlePlay} style={{ marginTop: "10px" }}>
          Play Video with Sound
        </button>
      </div>
    </div>
  );
}
