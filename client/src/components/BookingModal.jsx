import { useEffect, useState } from "react";
import "../styles/bookingModal.css";

function BookingModal({ data, onClose }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    travellers: 1,
    date: "",
    request: "",
  });

  // ESC close
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  // stop background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const total = form.travellers * data.price;

  return (
    <div className="booking-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="booking-header">
          <div>
            <h2>{data.title}</h2>
            <p>{data.duration} • from ₹{data.price}/person</p>
          </div>

          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Form */}
        <div className="booking-body">

          <label>First Name *</label>
          <input name="firstName" onChange={handleChange} placeholder="Rahul" />

          <label>Last Name *</label>
          <input name="lastName" onChange={handleChange} placeholder="Sharma" />

          <label>Email *</label>
          <input name="email" onChange={handleChange} placeholder="rahul@email.com" />

          <label>Phone *</label>
          <input name="phone" onChange={handleChange} placeholder="+91 98765 43210" />

          <label>No. of Travellers *</label>
          <input
            type="number"
            name="travellers"
            value={form.travellers}
            min="1"
            onChange={handleChange}
          />

          <label>Travel Date *</label>
          <input type="date" name="date" onChange={handleChange} />

          <label>Special Requests</label>
          <textarea
            name="request"
            onChange={handleChange}
            placeholder="Dietary requirements, accessibility needs..."
          />

          {/* Price Box */}
          <div className="booking-summary">
            <span>₹{data.price} × {form.travellers} travellers</span>
            <strong style={{color:"var(--teal)", fontSize:"1rem"}}>Total: ₹{total}</strong>
          </div>

          <button className="btn-gold confirm-btn">
            ✦ Confirm Booking
          </button>

        </div>
      </div>
    </div>
  );
}

export default BookingModal;