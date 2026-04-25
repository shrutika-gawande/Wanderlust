import React from 'react'

function TestimonialCard({ data }) {
    return (
        <div className="testi-card">

            <div className="testi-quote">“</div>

            <p className="testi-text">{data.review}</p>

            <div className="testi-footer">
                <img
                    src={data.avatar}
                    alt={data.name}
                    className="testi-avatar"
                />

                <div>
                    <div className="testi-name">{data.name}</div>
                    <div className="testi-loc">
                        {data.location} · {data.tripType}
                    </div>

                    <div style={{ color: "var(--gold)", fontSize: "0.8rem", marginTop: "4px" }}>
                        {"★".repeat(data.rating)}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TestimonialCard;