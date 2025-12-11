import React, { useRef } from "react";
import marketVid from "../assets/marketVid1.mp4";
import market1 from "../assets/market1.jpeg";
import vid2 from "../assets/vid4.mp4";

export default function MarketplaceLaunch() {
  const videoRef1 = useRef();
  const videoRef2 = useRef();

  const handleUnmute = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  return (
    <div className="service-card" id="market-sec">
      <h3>Marketplace Launch & Sales Support</h3>
      <p>Launch & scale across Amazon, Flipkart, Meesho.</p>

      <div className="media-gallery">
        <img src={market1} alt="Sample 1" />

        <div style={{ position: "relative" }}>
          <video ref={videoRef1} width="100%" autoPlay muted loop>
            <source src={marketVid} type="video/mp4" />
          </video>
          <button
            onClick={() => handleUnmute(videoRef1)}
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

        <div style={{ position: "relative", marginTop: "10px" }}>
          <video ref={videoRef2} width="100%" autoPlay muted loop>
            <source src={vid2} type="video/mp4" />
          </video>
          <button
            onClick={() => handleUnmute(videoRef2)}
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
