import React from 'react'
import "../styles/about.css"
import TestimonialCard from "../components/TestimonialCard.jsx";
import { TESTIMONIALS } from "../data.js"

function About() {
  return (
    <div className="page" id="page-about">
      <div className="page-hero-inner">
        <div className="container">
          <div className="breadcrumb"><a>Home</a> / <span>About Us</span></div>
          <h1>Our Story</h1>
          <p>18 years crafting extraordinary journeys across 120+ destinations worldwide.</p>
        </div>
      </div>

      {/* Story section */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap">
              <img src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80" alt="Our team" className="about-img-main" />
              <div className="about-img-badge">
                <div className="num">18+</div>
                <div className="lbl">Years of Experience</div>
              </div>
            </div>
            <div className="about-content about-container">
              <div className="tag">Who We Are</div>
              <h2>Passionate Travel Curators</h2>
              <h2>Since 2006</h2>
              <p>Wanderlust was born from a single belief: that travel, when done thoughtfully, is one of the most transformative forces in human life. Founded in 2006 by a pair of backpackers who fell in love with the world's diversity, we've grown into a full-service luxury travel company without ever losing that original spirit of discovery.</p>
              <p>We don't just book flights and hotels. We architect experiences — weaving together the hidden restaurant, the dawn temple visit, the private sunset sail — into journeys that feel genuinely alive.</p>
              <div className="about-values">
                <div className="value-item"><div className="value-icon">🌿</div><div><h4>Sustainable Travel</h4><p>We partner with eco-certified operators and offset 100% of trip emissions.</p></div></div>
                <div className="value-item"><div className="value-icon">🤝</div><div><h4>Community First</h4><p>20% of profits fund local education and conservation in destinations we serve.</p></div></div>
                <div className="value-item"><div className="value-icon">⭐</div><div><h4>Uncompromising Quality</h4><p>Every vendor is personally vetted by our team. Nothing goes on the site untested.</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item"><div className="stat-num">15K+</div><div className="stat-label">Happy Travellers</div></div>
            <div className="stat-item"><div className="stat-num">120+</div><div className="stat-label">Destinations</div></div>
            <div className="stat-item"><div className="stat-num">50+</div><div className="stat-label">Expert Guides</div></div>
            <div className="stat-item"><div className="stat-num">98%</div><div className="stat-label">Would Recommend Us</div></div>
          </div>
        </div>
      </div>

      {/* Team  */}
      <section className="section">
        <div className="team-container">
          <div className="about-content" style={{ textAlign: "center" }}>
            <div className="tag">The People Behind the Magic</div>
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-sub">Passionate travellers, meticulous planners, and true lovers of this world.</p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-img-wrap">
                <img src="./src/assets/team/Aman-Gupta.png" alt="Aman Gupta" className="team-img" />
              </div>
              <div className="team-name">Aman Gupta</div>
              <div className="team-role">Founder & CEO</div>
              <p className="team-bio">A former travel journalist who turned his passion into purpose. Arjun has visited 87 countries and counting.</p>
            </div>
            <div className="team-card">
              <div className="team-img-wrap">
                <img src="./src/assets/team/Vineeta-Singh.png" alt="Vineeta Singh" className="team-img" />
              </div>
              <div className="team-name">Vineeta Singh</div>
              <div className="team-role">Head of Experiences</div>
              <p className="team-bio">A Parisian with a deep obsession for cultural authenticity. She personally tests every experience we offer.</p>
            </div>
            <div className="team-card">
              <div className="team-img-wrap">
                <img src="./src/assets/team/Peyush-Bansal.png" alt="Peyush Bansal" className="team-img" />
              </div>
              <div className="team-name">Peyush Bansal</div>
              <div className="team-role">Asia Specialist</div>
              <p className="team-bio">Tokyo-born, world-raised. Kenji's encyclopedic knowledge of Asian culture makes every Eastern trip extraordinary.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials on About */}
      <section className="section testimonials-section">
        <div className="container" style={{ marginTop:"60px", marginBottom:"80px"}}>
          <div className="about-content" style={{ textAlign: "center" }}>
            <div className="tag">Testimonials</div>
            <h2 className="section-title">Travellers Love Us</h2>
            <p className="section-sub">Don't take our word for it.</p>
          </div>
          <div className="testi-slider" id="aboutTestiGrid">
              {TESTIMONIALS.slice(0, 3).map((item, index) => (
                <TestimonialCard key={index} data={item} />
              ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default About