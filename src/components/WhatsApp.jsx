import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <div>
      <a
        href="https://wa.me/919811306669" // Apna WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn whatsapp"
      >
        <FaWhatsapp size={25} />
      </a>
    </div>
  );
};

export default WhatsApp;
