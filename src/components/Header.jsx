import React from "react";
import logo from "../assets/hanket_image.jpg";
import favicon from "../assets/hanket_image.ico";

const Header = () => {
  return (
    <div>
      <header className="header">
        <link rel="icon" href={favicon} />
        <div className="logo-container">
          <img src={logo} alt="Brand Logo" className="logo-img" />
          <h1 className="logo-text">HANKET</h1>
        </div>
        <button
          className="btn header-btn"
          onClick={() => (window.location.href = "tel:+919876543210")}
        >
          Book Now
        </button>
      </header>
    </div>
  );
};

export default Header;
