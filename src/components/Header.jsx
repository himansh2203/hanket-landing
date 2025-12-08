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
        <a href="tel:+919876543210"></a>
        <button className="btn header-btn">Book Now</button>
      </header>
    </div>
  );
};

export default Header;
