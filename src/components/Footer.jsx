import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "../componentsCss/Footer.css"; // Import your CSS file
import samsung from "../componentsSrcAssets/samsung.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:rohithrapheal@gmail.com?subject=New Email&body=${email}`;
    }
  };

  return (
    <footer className="footer">
      {/* Hypersonic Name in the middle */}
      <div className="footer-content">
        {/* <h1 className="footer-title">Hypersonic</h1> */}
        <img src={samsung} alt="Hypersonic Logo" className="footer-logo" />

        {/* Form to collect Gmail */}
        <form onSubmit={handleSubmit} className="email-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="email-input"
          />
          <button type="submit" className="email-button">
            Send
          </button>
        </form>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
