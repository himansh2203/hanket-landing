import React, { useRef } from "react";
import marketVid from "../assets/marketVid1.mp4";
import market1 from "../assets/market1.jpeg";
import vid2 from "../assets/vid4.mp4";

export default function MarketplaceLaunch() {
  const videoRef1 = useRef();
  const videoRef2 = useRef();

  const handleUnmute = (ref) => {
    if (ref.current) {
      ref.current.muted = false;
      ref.current.play().catch((e) => console.log("Play blocked:", e));
    }
  };

  return (
    <div className="service-card" id="market-sec">
      <h3>Marketplace Launch & Sales Support</h3>
      <p>Launch & scale across Amazon, Flipkart, Meesho.</p>

      <div className="media-gallery">
        <img src={market1} alt="Sample 1" />

        {/* VIDEO 1 */}
        <div style={{ position: "relative", marginTop: "10px" }}>
          <video
            ref={videoRef1}
            width="100%"
            autoPlay
            muted
            loop
            playsInline
            style={{ display: "block" }}
          >
            <source src={marketVid} type="video/mp4" />
            Your browser does not support video.
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

        {/* VIDEO 2 */}
        <div style={{ position: "relative", marginTop: "10px" }}>
          <video
            ref={videoRef2}
            width="100%"
            autoPlay
            muted
            loop
            playsInline
            style={{ display: "block" }}
          >
            <source src={vid2} type="video/mp4" />
            Your browser does not support video.
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
