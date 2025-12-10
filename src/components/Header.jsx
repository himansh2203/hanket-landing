import React from "react";
import logo from "../assets/hanket_image.jpg";
import favicon from "../assets/hanket_image.ico";

const Header = () => {
  return (
    <div>
      <header className="header">
        <link rel="icon" href={favicon} />
        <div
          className="logo-container"
          onClick={() => window.location.reload()}
          style={{ cursor: "pointer" }} // cursor pointer to indicate clickable
        >
          <img src={logo} alt="Brand Logo" className="logo-img" />
          <h1 className="logo-text ">HANKET</h1>
        </div>

        <button
          className="btn header-btn"
          onClick={() => (window.location.href = "tel:+919711155417")}
        >
          Book Now
        </button>
      </header>
    </div>
  );
};

export default Header;
