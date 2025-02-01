import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        {/* Toggle Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>
        {/* Navbar List */}
        <ul className={`navbar-list ${isOpen ? "show" : ""}`}>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#projects">PORTFOLIO</a></li>
          <li><a href="#publications">PUBLICATIONS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
