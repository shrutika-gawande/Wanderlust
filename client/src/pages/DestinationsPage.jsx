import React, { useState } from 'react'
import { DESTINATIONS } from '../data.js'
import "../styles/destinations.css"
import DestinationCard from '../components/DestinationCard'
import DestinationModal from '../components/DestinationModal.jsx'

function Destinations() {

  const [selectedDestination, setSelectedDestination] = useState(null);
  const [destSearch, setDestSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const filterdDestinations = DESTINATIONS.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(destSearch.toLowerCase()) ||
      destination.country.toLowerCase().includes(destSearch.toLowerCase())

    const matchesCategory = selectedCat === "All" ||
      destination.category === selectedCat

    return matchesSearch && matchesCategory
  });

  return (
    <>
      <div className="page">
        <div className="page-hero-inner">
          <div className="container">
            <div className="breadcrumb"><a>Home</a> / <span>Destinations</span></div>
            <h1>Explore Destinations</h1>
            <p>Over 120 carefully curated destinations spanning every continent on the globe.</p>
          </div>
        </div>

        <section className="section">
          <div className="destinations-container">

            <div className="filter-bar">
              <div className="filter-search">
                <span>🔍</span>
                <input
                  type="text"
                  value={destSearch}
                  placeholder="Search destinations..."
                  onChange={(e) => setDestSearch(e.target.value)}
                />
              </div>
              <div className="filter-btns" id="destFilterBtns">
                <button className={`filter-btn ${selectedCat === "All" ? "active" : ""}`}
                  onClick={() => setSelectedCat("All")}>All</button>
                <button className={`filter-btn ${selectedCat === "Beach" ? "active" : ""}`}
                  onClick={() => setSelectedCat("Beach")}>🏖 Beach</button>
                <button className={`filter-btn ${selectedCat === "Mountain" ? "active" : ""}`}
                  onClick={() => setSelectedCat("Mountain")}>🏔 Mountain</button>
                <button className={`filter-btn ${selectedCat === "Cultural" ? "active" : ""}`}
                  onClick={() => setSelectedCat("Cultural")}>🏛 Cultural</button>
                <button className={`filter-btn ${selectedCat === "Adventure" ? "active" : ""}`}
                  onClick={() => setSelectedCat("Adventure")}>🧗 Adventure</button>
                <button className={`filter-btn ${selectedCat === "Wildlife" ? "active" : ""}`}
                  onClick={() => setSelectedCat("Wildlife")}>🦁 Wildlife</button>
              </div>
            </div>

            <p id="destCount" style={{ fontSize: ".85rem", color: "var(--ink-soft)", marginBottom: "24px" }}></p>

            <div className="dest-list-grid" id="destListGrid">
              {filterdDestinations.map((item) => (
                <DestinationCard
                  key={item._id}
                  data={item}
                  onClick={() => setSelectedDestination(item)}
                />
              ))}
              {filterdDestinations.length === 0 && <p>No Destination found</p>}
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedDestination && (
        <DestinationModal
          data={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}
    </>
  )
}

export default Destinations