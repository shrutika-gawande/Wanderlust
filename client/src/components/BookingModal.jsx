import { useEffect, useState } from "react";
import toast from "react-hot-toast";
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

  const [validated, setValidated] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formEl = e.currentTarget;

    if (formEl.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    // ✅ SUCCESS
    toast.success("Booking Confirmed 🎉");

    console.log("Booking Data:", form);

    onClose();
  };

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
        <form
          noValidate
          className={`booking-body needs-validation ${validated ? "was-validated" : ""}`}
          onSubmit={handleSubmit}
        >

           {/* First Name */}
          <div className="mb-3">
            <label className="form-label">First Name *</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              required
              onChange={handleChange}
            />
            <div className="invalid-feedback">
              Please enter first name
            </div>
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <label className="form-label">Last Name *</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              required
              onChange={handleChange}
            />
            <div className="invalid-feedback">
              Please enter last name
            </div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email *</label>
            <input
              type="email"
              name="email"
              className="form-control"
              required
              onChange={handleChange}
            />
            <div className="invalid-feedback">
              Enter valid email
            </div>
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label">Phone *</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              required
              pattern="[0-9]{10}"
              onChange={handleChange}
            />
            <div className="invalid-feedback">
              Enter valid 10-digit phone
            </div>
          </div>

          {/* Travellers */}
          <div className="mb-3">
            <label className="form-label">Travellers *</label>
            <input
              type="number"
              name="travellers"
              className="form-control"
              min="1"
              required
              value={form.travellers}
              onChange={handleChange}
            />
          </div>

          {/* Date */}
          <div className="mb-3">
            <label className="form-label">Travel Date *</label>
            <input
              type="date"
              name="date"
              className="form-control"
              required
              onChange={handleChange}
            />
          </div>

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

          <button type="submit" className="btn-gold confirm-btn">
            ✦ Confirm Booking
          </button>

        </form>
      </div>
    </div>
  );
}

export default BookingModal;