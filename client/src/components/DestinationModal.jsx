import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/destinationModal.css";

function DestinationModal({ data, onClose }) {

    const navigate = useNavigate();

    // ESC key close
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    // click outside close
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-box">

                {/* ❌ Close button */}
                <button className="modal-close" onClick={onClose}>
                    ✕
                </button>

                {/* Image */}
                <div className="modal-img">
                    <img src={data.image} alt={data.name} />
                    <span className="modal-badge">{data.category}</span>
                </div>

                {/* Content */}
                <div className="modal-body">
                    <h2>{data.name}</h2>
                    <p className="modal-country">📍 {data.country}</p>

                    <div className="rating">
                        <span className="stars">★★★★★</span>
                        <span>{data.rating}</span>
                    </div>

                    <p className="modal-desc">{data.description}</p>

                    {/* Highlights */}
                    <div className="dest-list-card__highlights">
                        {data.highlights.map((item, i) => (
                            <span key={i} className="highlight-tag">
                                {item}
                            </span>
                        ))}
                    </div>

                    <button onClick={() => navigate("/packages")} className="cta-btn btn-gold" style={{ margin: "25px auto 0", display: "block" }}>
                        ✦ View Packages for {data.name}
                    </button>
                </div>

            </div>
        </div>
    );
}

export default DestinationModal;