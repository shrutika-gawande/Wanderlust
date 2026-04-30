import React, { useState } from 'react'
import "../styles/packages.css"
import PackageCard from '../components/PackageCard.jsx'
import PackageModal from '../components/PackageModal.jsx'
import BookingModal from '../components/BookingModal.jsx'
import { PACKAGES } from "../data.js"

function Packages() {

  const [selectedPackage, setSelectedPackage] = useState(null); // details
  const [bookingPackage, setBookingPackage] = useState(null); // booking
  const [selectedCat, setSelectedCat] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");


  const filterdPackages = PACKAGES.filter((pkg) => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCat === "All" || pkg.category === selectedCat;

    const min = minPrice ? Number(minPrice) : 0;
    const max = maxPrice ? Number(maxPrice) : Infinity;

    const matchesPrice = pkg.price >= min && pkg.price <= max;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <>
      <div className="pkg-page" id="page-packages">
        <div className="page-hero-inner">
          <div className="container">
            <div className="breadcrumb"><a>Home</a> / <span>Packages</span></div>
            <h1>Travel Packages</h1>
            <p>Meticulously crafted itineraries with transparent pricing and everything included.</p>
          </div>
        </div>

        <section className="section">
          <div className="container">

            {/* <!-- Filters --> */}
            <div className="pkg-filter-bar">
              <div className="filter-btns" id="pkgCatBtns">
                <button className={`filter-btn ${selectedCat === "All" ? "active" : ""}`}
                  onClick={() => setSelectedCat("All")}>All</button>
                <button className={`filter-btn ${selectedCat === "Honeymoon" ? "active" : ""}`}
                  onClick={() => setSelectedCat("Honeymoon")}>💑 Honeymoon</button>
                <button className={`filter-btn ${selectedCat === "Family" ? "active" : ""}`}
                  onClick={() => setSelectedCat("Family")}>👨‍👩‍👧 Family</button>
                <button className={`filter-btn ${selectedCat === "Adventure" ? "active" : ""}`}
                  onClick={() => setSelectedCat("Adventure")}>🧗 Adventure</button>
                <button className={`filter-btn ${selectedCat === "Cultural" ? "active" : ""}`}
                  onClick={() => setSelectedCat("Cultural")}>🏛 Cultural</button>
                <button className={`filter-btn ${selectedCat === "Luxury" ? "active" : ""}`}
                  onClick={() => setSelectedCat("Luxury")}>💎 Luxury</button>
              </div>

              <div className="pkg-range-group">
                <label>Budget:</label>
                <input
                  min={1000}
                  max={10000}
                  value={minPrice}
                  type="number"
                  placeholder="Min $"
                  style={{ width: "80px" }}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <span style={{ color: "var(--ink-soft)" }}>–</span>
                <input
                  max={10000}
                  min={1000}
                  value={maxPrice}
                  type="number"
                  placeholder="Max $"
                  style={{ width: "80px" }}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>

              <div className="filter-search" style={{ flex: "1", minWidth: "160px" }}>
                <span>🔍</span>
                <input type="text" id="pkgSearch" value={searchTerm} placeholder="Search packages..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <p id="pkgCount" style={{ fontSize: ".85rem", color: "var(--ink-soft)", marginBottom: "24px" }}></p>

            <div className="pkg-grid">
              {filterdPackages.map((item) => (
                <PackageCard
                  key={item._id}
                  data={item}
                  onDetails={() => setSelectedPackage(item)}
                  // onBook={() => setBookingPackage(item)}
                  onBook={() => {
                    setSelectedPackage(null);   // close details modal
                    setBookingPackage(item);     // open booking modal
                  }}
                />
              ))}
            </div>
            {filterdPackages.length === 0 && <p>No Package found</p>}
          </div>
        </section>
      </div>

      {/* Details Modal */}
      {selectedPackage && (
        <PackageModal
          data={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}

      {/* Booking Modal */}
      {bookingPackage && (
        <BookingModal
          data={bookingPackage}
          onClose={() => setBookingPackage(null)}
        />
      )}
    </>
  )
}

export default Packages