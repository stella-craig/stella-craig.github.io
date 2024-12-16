// src/components/Footer.js
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css"; // Optional: Add styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Stella Craig. All Rights Reserved.</p>
        <div className="footer-icons">
          <a
            href="https://github.com/stella-craig"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/stellacraig/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:stellarstellacraig@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
