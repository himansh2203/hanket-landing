import React, { useRef } from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img 2.jpeg";
import vid1 from "../assets/vid1.mp4";

export default function FreePhotoshoot() {
  const videoRef = useRef();

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  return (
    <div className="service-card" id="photoshoot-sec">
      <h3>Free Product Photoshoot</h3>
      <p>Get premium product images at zero cost.</p>

      <div className="media-gallery">
        <img src={img1} alt="Sample 1" />
        <img src={img2} alt="Sample 2" />

        <div style={{ position: "relative", marginTop: "10px" }}>
          <video ref={videoRef} width="100%" autoPlay muted loop>
            <source src={vid1} type="video/mp4" />
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
