import React from "react";
import { FaInstagram } from "react-icons/fa";

const Instagram = () => {
  return (
    <div>
      <a
        href="https://instagram.com/yourusername" // Apna Instagram profile
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn instagram"
      >
        <FaInstagram size={25} />
      </a>
    </div>
  );
};

export default Instagram;
