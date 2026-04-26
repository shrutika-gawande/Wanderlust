import React from 'react'
import { useNavigate } from 'react-router-dom'

function DestinationCard({ data, onClick }) {

  const navigate = useNavigate();

  return (
    <div className="dest-list-card" onClick={onClick}>

      {/* Image */}
      <div className="dest-list-card__img-wrap">
        <img
          src={data.image}
          alt={data.name}
          className="dest-list-card__img"
        />

        <div className="dest-list-card__cat-badge">
          {data.category}
        </div>
      </div>

      {/* Body */}
      <div className="dest-list-card__body">

        <h3 className="dest-list-card__name">{data.name}</h3>

        <div className="dest-list-card__country">
          📍 {data.country}
        </div>

        <p className="dest-list-card__desc">
          {data.description}
        </p>

        {/* Highlights */}
        <div className="dest-list-card__highlights">
          {data.highlights.map((item, i) => (
            <span key={i} className="highlight-tag">
              {item}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="dest-list-card__footer">

          <div className="rating">
            <span className="stars">{"★".repeat(Math.floor(data.rating))}</span>
           <span>{data.rating} ({data.reviewCount})</span>
          </div>

          <button onClick={() => navigate("/packages")} className="btn-outline">
            View Packages
          </button>

        </div>
      </div>
    </div>
  );
}

export default DestinationCard