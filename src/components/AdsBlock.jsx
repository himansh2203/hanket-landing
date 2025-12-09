import React from "react";
const AdsBlock = () => {
  return (
    <div className="ads-container">
      <h2 className="ads-title">Our Latest Work</h2>

      <div className="insta-video-wrapper">
        <iframe
          className="insta-video"
          src="https://www.instagram.com/reel/DQgzxpVjsbV/embed"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Instagram Reel"
        ></iframe>
      </div>
    </div>
  );
};

export default AdsBlock;
