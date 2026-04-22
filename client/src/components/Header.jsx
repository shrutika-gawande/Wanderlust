import React from 'react'
import { useState } from 'react';
import "../styles/header.css"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='header'>


      <div className="logo">
        <div className="logo-mark">✈</div>
        <div className="logo-text">
          <span className="logo-main">Wanderlust</span>
          <span className="logo-sub">Travel & Tours</span>
        </div>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <div className="header-links">
          <a href=''>Home</a>
          <a href=''>About Us</a>
          <a href=''>Destinations</a>
          <a href=''>Packages</a>
          <a href=''>Contact</a>
        </div>

        <button className='cta-btn'>Book Now</button>
      </div>

    </nav>
  )
}

export default Header