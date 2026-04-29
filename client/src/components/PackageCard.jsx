import React from 'react'

function PackageCard({ data, onDetails, onBook }) {
  return (
    <>
      <div className="pkg-card">

        {/* Discount Badge */}
        <span className="pkg-card__badge">{data.discount}% OFF</span>

        {/* Image */}
        <div className="pkg-card__img-wrap">
          <img src={data.image} alt={data.title} />
        </div>

        {/* Body */}
        <div className="pkg-card__body">
          <p className="pkg-card__category">
            {data.tags.join(" • ")}
          </p>

          <h3 className="pkg-card__title">{data.title}</h3>

          <p className="pkg-card__desc">{data.description}</p>

          {/* Meta Row */}
          <div className="pkg-card__meta">
            <span>⏱ {data.duration}</span>
            <span>👥 {data.groupSize} People</span>
            <span>📍 {data.destination}</span>
          </div>

          {/* Footer */}
          <div className="pkg-card__footer">
            <div className='price-section'>
              <p className="pkg-old-price">₹{data.originalPrice}</p>
              <h4 className="pkg-price">₹{data.price}</h4>
              <span className="pkg-per">per person</span>
            </div>

            <div className="pkg-actions">
              <button className="btn-outline" onClick={(e) => {
                e.stopPropagation();
                onDetails();
              }}>Details</button>
              <button className="btn-gold" onClick={(e) => {
                e.stopPropagation();
                onBook();
              }}>Book Now</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default PackageCard