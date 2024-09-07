import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="App">
        <nav className="navbar">
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#blog">SERVICES</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
    </div> 
  )
}

export default Navbar