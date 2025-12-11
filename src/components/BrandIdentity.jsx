import React, { useRef } from "react";
import img4 from "../assets/img4.jpeg";
import vid4 from "../assets/vid4.mp4";
import brandvid from "../assets/brandvid1.mp4";
import brandImg from "../assets/brand1.jpeg";

export default function BrandIdentity() {
  const videoRef = useRef();

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch((err) => console.log("Play error:", err));
    }
  };

  return (
    <div className="service-card" id="brand-sec">
      <h3>Brand Identity & Catalog Design</h3>
      <p>Logo, branding & catalog that define your brand.</p>

      <div className="media-gallery">
        <img src={img4} alt="Sample 1" />
        <img src={brandImg} alt="Sample 2" />

        <div style={{ position: "relative", marginTop: "10px" }}>
          <video
            ref={videoRef}
            width="100%"
            autoPlay
            muted
            loop
            playsInline
            style={{ display: "block" }}
          >
            <source src={brandvid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={handleUnmute}
            style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              padding: "5px 10px",
              background: "#000000aa",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Unmute
          </button>
        </div>
      </div>
    </div>
  );
}
