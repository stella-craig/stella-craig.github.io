// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Optional: Custom styles for the header

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">
          <Link to="/">Stella Craig</Link>
        </h1>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
