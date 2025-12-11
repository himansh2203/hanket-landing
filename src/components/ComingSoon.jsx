import React, { useRef } from "react";
import vid2 from "../assets/vid2.mp4";

const ComingSoon = () => {
  const videoRef = useRef();

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch((err) => {
        console.log("Play error:", err);
      });
    }
  };

  return (
    <div className="comingsoon" style={{ position: "relative", width: "100%" }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        width="100%"
        style={{ display: "block" }}
        playsInline // Important for mobile Safari
      >
        <source src={vid2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Unmute Button */}
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
  );
};

export default ComingSoon;
