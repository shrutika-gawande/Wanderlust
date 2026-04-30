import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/home.css"
import { PACKAGES } from "../data";
import PackageCard from "../components/PackageCard";

function Homepage() {

  const navigate = useNavigate();

  return (
    <div>
      <div className="home-page active">

        {/* <!-- Hero --> */}
        <section className="hero">
          <div className="hero__bg"></div>
          <div className="hero__overlay"></div>
          <div className="container">
            <div className="hero__content">
              <div className="hero__eyebrow">Crafting Extraordinary Journeys</div>
              <h1 className="hero__title">
                The World Awaits<br /><em>Your Story</em>
              </h1>
              <p className="hero__desc">
                From Aegean sunsets to African savannas — we design transformative travel experiences that stay with you forever.
              </p>
              <div className="hero__actions">
                <button className="btn btn-gold" onClick={() => navigate("/packages")}>✦ Explore Packages</button>
                <button className="btn btn-outline-white" onClick={() => navigate("/destinations")}>View Destinations →</button>
              </div>
            </div>

          </div>
        </section>

        {/* <!-- Search Bar -->
      <div class="search-bar">
        <div class="search-field">
          <label>🔍 Search Destination</label>
          <input type="text" id="heroSearch" placeholder="Where do you want to go?" oninput="heroSearchHandler()"/>
        </div>
        <div class="search-field">
          <label>🗂 Category</label>
          <select id="heroCat" onchange="heroSearchHandler()">
            <option value="">All Categories</option>
            <option>Beach</option>
            <option>Mountain</option>
            <option>Cultural</option>
            <option>Adventure</option>
            <option>Wildlife</option>
          </select>
        </div>
        <div class="search-field">
          <label>💰 Budget</label>
          <select id="heroBudget">
            <option value="">Any Budget</option>
            <option value="1500">Under $1,500</option>
            <option value="3000">Under $3,000</option>
            <option value="5000">Under $5,000</option>
          </select>
        </div>
        <button class="btn btn-teal" onclick="handleHeroSearch()">Search</button>
      </div>
    </div> */}


        {/* <!-- Stats --> */}
        <div className="stats-strip">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item"><div className="stat-num">15K+</div><div className="stat-label">Happy Travellers</div></div>
              <div className="stat-item"><div className="stat-num">120+</div><div className="stat-label">Destinations</div></div>
              <div className="stat-item"><div className="stat-num">18</div><div className="stat-label">Years of Excellence</div></div>
              <div className="stat-item"><div className="stat-num">4.9★</div><div className="stat-label">Average Rating</div></div>
            </div>
          </div>
        </div>

        {/* <!-- Featured Destinations --> */}
        {/* <section className="section">
          <div className="container">
            <div className="text-center mb-56">
              <div className="tag">Handpicked For You</div>
              <h2 className="section-title">Featured Destinations</h2>
              <p className="section-sub">Curated escapes that combine natural wonder, cultural depth, and unforgettable experiences.</p>
            </div>
            <div className="dest-grid"></div>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <button className="btn btn-outline-gold">View All Destinations →</button>
            </div>
          </div>
        </section> */}

        {/* <!-- Why Choose Us --> */}
        <section className="section" style={{ background: "var(--sand-dark)" }}>
          <div className="container">
            <div className="text-center mb-56">
              <div className="tag">Why Wanderlust</div>
              <h2 className="section-title">Travel With Confidence</h2>
              <p className="section-sub">We handle every detail so you can focus on making memories.</p>
            </div>
            <div className="why-grid">
              <div className="why-card">
                <div className="why-icon">🌍</div>
                <div className="why-title">Expert Local Knowledge</div>
                <p className="why-text">Our guides have decades of experience in their regions, unlocking experiences no guidebook can offer.</p>
              </div>
              <div className="why-card">
                <div className="why-icon">🛡️</div>
                <div className="why-title">100% Safe & Secure</div>
                <p className="why-text">Comprehensive travel insurance, 24/7 emergency support, and vetted partners ensure your peace of mind.</p>
              </div>
              <div className="why-card">
                <div className="why-icon">✨</div>
                <div className="why-title">Tailored Experiences</div>
                <p className="why-text">No two journeys are alike. Every itinerary is crafted around your interests, pace, and travel style.</p>
              </div>
              <div className="why-card">
                <div className="why-icon">💳</div>
                <div className="why-title">Best Price Guarantee</div>
                <p className="why-text">Found it cheaper? We'll match it. Our relationships with suppliers mean exceptional value every time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Featured Packages --> */}
        <section className="section packages-section">
          <div className="container">
            <div className="text-center mb-56">
              <div className="tag">Popular Packages</div>
              <h2 className="section-title">Ready-Made Adventures</h2>
              <p className="section-sub">Expertly crafted itineraries with everything included — just bring your passport and a sense of wonder.</p>
            </div>

            <div className="pkg-grid">
              {PACKAGES.slice(0, 3).map((pkg) => (
                <PackageCard
                  key={pkg._id}
                  data={pkg}
                  onDetails={() => navigate("/packages")}
                  onBook={() => navigate("/packages")}
                />
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <button className="btn btn-outline-gold">View All Packages →</button>
            </div>
          </div>
        </section>

        {/* <!-- CTA --> */}
        <section className="cta-banner">
          <div className="container">
            <div className="tag" style={{ color: "var(--gold-pale)" }}>Start Your Journey</div>
            <h2>Your Dream Trip is One Click Away</h2>
            <p>Let our travel experts design your perfect escape. Personalised itineraries, unbeatable prices, memories for life.</p>
            <div className="cta-actions">
              <button className="btn btn-gold" onClick={() => navigate("/packages")}>✦ Explore Packages</button>
              <button className="btn btn-outline-white" onClick={() => navigate("/contact")}>Talk to an Expert</button>
            </div>
          </div>
        </section>

      </div>

    </div>
  )
}

export default Homepage