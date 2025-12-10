import React from "react";
import vid2 from "../assets/vid2.mp4";

const ComingSoon = () => {
  return (
    <div className="comingsoon">
      <video autoPlay muted loop width="100%">
        <source src={vid2} type="video/mp4" />
      </video>
    </div>
  );
};

export default ComingSoon;
