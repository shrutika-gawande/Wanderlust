import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
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
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
          <NavLink to="/destinations" className={({ isActive }) => isActive ? 'active' : ''}>Destinations</NavLink>
          <NavLink to="/packages" className={({ isActive }) => isActive ? 'active' : ''}>Packages</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </div>

        <button className='cta-btn btn-gold'>Book Now</button>
      </div>

    </nav>
  )
}

export default Header