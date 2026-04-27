import { useEffect } from "react";
import "../styles/packages.css";

function PackageModal({ data, onClose, onBook }) {
  if (!data) return null;

  // ✅ ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // ✅ stop background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="pkg-detail-overlay open" onClick={onClose}>
      
      {/* MODAL BOX */}
      <div
        className="pkg-detail"
        onClick={(e) => e.stopPropagation()}
      >

        {/* HERO */}
        <div className="pkg-detail__hero">
          <img src={data.image} alt={data.name} />

          <div className="pkg-detail__hero-overlay"></div>

          {/* ❌ CLOSE BTN */}
          <div className="pkg-detail__close" onClick={onClose}>
            ✕
          </div>

          <div className="pkg-detail__hero-content">
            <p className="pkg-card__category">{data.category}</p>
            <h2>{data.title}</h2>
          </div>
        </div>

        {/* BODY */}
        <div className="pkg-detail__body">

          {/* META */}
          <div className="pkg-detail__meta-row">
            <div className="pkg-detail__meta-item">⏱ {data.duration}</div>
            <div className="pkg-detail__meta-item">👥 {data.groupSize}</div>
            <div className="pkg-detail__meta-item">📍 {data.destination}, {data.country}</div>
            <div className="pkg-detail__meta-item">⭐ {data.rating} ({data.reviewCount})</div>
            <div className="pkg-detail__meta-item">🏁 {data.difficulty}</div>
          </div>

          <p className="pkg-card__desc" style={{fontSize:"1rem"}}>{data.description}</p>

          {/* ITINERARY */}
          <h3 className="h3-label">DAY-BY-DAY ITINERARY</h3>

          <div className="itinerary-list">
            {data.itinerary.map((day, index) => (
              <div className="itin-item" key={index}>
                <div className="itin-day">
                  <span>{day.day}</span>
                  DAY
                </div>

                <div className="itin-content">
                  <h4>{day.title}</h4>
                  <p>{day.description}</p>

                  <div className="dest-list-card__highlights">
                    {day.activities.map((t, i) => (
                      <span className="highlight-tag" key={i}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* INCLUDED */}
          <h3 className="h3-label">WHAT'S INCLUDED / EXCLUDED</h3>

          <div className="incl-grid">
            {data.includes.map((item, i) => (
              <div className="incl-item" key={i}>
                <span className="tick">✔</span> {item}
              </div>
            ))}

            {data.excludes.map((item, i) => (
              <div className="incl-item excl" key={i}>
                <span className="cross">✖</span> {item}
              </div>
            ))}
          </div>

          {/* PRICE */}
          <div className="pkg-detail__price-row">

            <div className='price-section'>
              <p className="pkg-old-price">₹{data.originalPrice}</p>
              <h4 className="pkg-price" style={{fontSize:"2rem"}}>₹{data.price}</h4>
              <span className="pkg-per">per person &nbsp;<span className="pkg-discount">{data.discount}% savings</span></span>
            </div>

            <button className="btn-gold" style={{fontSize: "1rem",padding: "14px 28px"}}
              onClick={(e) => {
                e.stopPropagation();
                onBook(data);
              }}
            >
              ✦ Book This Package
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PackageModal;