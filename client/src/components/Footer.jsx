import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/footer.css"

function Footer() {
    return (
        <footer className='footer'>

            <div className="footer-grid">
                <div className="footer-brand">
                    <div className="logo">
                        <div className="logo-mark">✈</div>
                        <div className="logo-text">
                            <span className="logo-main">Wanderlust</span>
                            <span className="logo-sub">Travel & Tours</span>
                        </div>
                    </div>
                    <p>Crafting extraordinary journeys since 2006. Your world, your way — with expertise, care, and soul.</p>
                    <div className="footer-socials">
                        <button title="Facebook">f</button>
                        <button title="Instagram">◉</button>
                        <button title="Twitter">𝕏</button>
                        <button title="YouTube">▶</button>
                    </div>
                </div>

                <div className="quick-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/destinations">Destinations</Link></li>
                        <li><Link to="/packages">Packages</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="quick-links">
                    <h4>Top Destinations</h4>
                    <ul>
                        <li><a>Santorini, Greece</a></li>
                        <li><a>Bali, Indonesia</a></li>
                        <li><a>Maldives</a></li>
                        <li><a>Swiss Alps</a></li>
                        <li><a>Safari Kenya</a></li>
                    </ul>
                </div>

                <div className="newsletter quick-links">
                    <h4>Newsletter</h4>
                    <p>Get exclusive deals, travel inspiration, and destination guides in your inbox.</p>
                    <div className='newsletter-input'>
                        <input type="email" placeholder='your@email.com' />
                        <button className='btn-gold'> → </button>
                    </div>
                    {/* <p id="newsletterMsg" style="margin-top:10px;font-size:.78rem;color:var(--gold-pale);display:none">✓ You're subscribed!</p> */}
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Wanderlust Travel & Tours. All rights reserved.</p>
                <div className="footer-bottom-links">
                    <a>Privacy Policy</a>
                    <a>Terms of Service</a>
                    <a>Cookie Policy</a>
                </div>
            </div>

        </footer>
    )
}

export default Footer