import React from 'react'
import toast from 'react-hot-toast';
import "../styles/contact.css"
import { useState, useRef } from "react";

function Contact() {
  const [validated, setValidated] = useState(false);
  const formRef = useRef();

  return (
    <div className="page" id="page-contact">
      <div className="page-hero-inner">
        <div className="container">
          <div className="breadcrumb"><a>Home</a> / <span>Contact Us</span></div>
          <h1>Get In Touch</h1>
          <p>Our travel experts are ready to craft your perfect journey.</p>
        </div>
      </div>

      <section className="section">
        <div className="contact-container">
          <div className="contact-grid">

            {/* Info */}
            <div className="contact-info">
              <div className="tag">Reach Out</div>
              <h3>Let's Plan Your Dream Trip Together</h3>
              <p>Whether you have a specific destination in mind or just a feeling that you need to travel — we're here to make it happen. Speak with one of our specialists today.</p>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div><h4>Our Office</h4><p>42, Connaught Place, New Delhi 110001<br />India</p></div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div><h4>Call Us</h4><p>+91 98765 43210<br />Mon–Sat, 9 AM – 7 PM IST</p></div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div><h4>Email Us</h4><p>hello@wanderlust.travel<br />We reply within 4 hours</p></div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">💬</div>
                  <div><h4>WhatsApp</h4><p>+91 98765 43210<br />Available 24/7 for emergencies</p></div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-card">
              <h3>Send Us a Message</h3>
              <p>Fill out the form and a travel specialist will respond within 4 hours.</p>

              <div id="contactSuccess" className="form-success">
                <h4>✅ Message Received!</h4>
                <p>Thank you! A travel specialist will contact you within 4 hours.</p>
              </div>

              <form
              ref={formRef}
                className={`needs-validation ${validated ? "was-validated" : ""}`}
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  setValidated(true);
                  if (e.currentTarget.checkValidity()) {
                    toast.success("Message Received!");
                    formRef.current.reset();   // clears inputs
                    setValidated(false);       // reset validation UI
                  }
                }}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor='cf-fname' className='form-label'>First Name *</label>
                    <input type="text" id="cf-fname" className="form-control" placeholder="Shrutika" required />
                    <div className="err-msg" id="err-fname">Please enter your first name.</div>
                    <div className="invalid-feedback">
                      Please enter your first name.
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor='cf-lname' className='form-label'>Last Name *</label>
                    <input type="text" id="cf-lname" className="form-control" placeholder="Gawande" required />
                    <div className="err-msg" id="err-lname">Please enter your last name.</div>
                    <div className="invalid-feedback">
                      Please enter your last name.
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor='cf-email' className='form-label'>Email Address *</label>
                    <input type="email" id="cf-email" className="form-control" placeholder="shruti@email.com" required />
                    <div className="err-msg" id="err-email">Please enter a valid email.</div>
                    <div className="invalid-feedback">
                      Please enter a valid email.
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor='cf-phone' className='form-label'>Phone Number</label>
                    <input type="tel" id="cf-phone" className="form-control" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor='cf-subject' className='form-label'>Subject *</label>
                  <select id="cf-subject" className="form-control" required>
                    <option value="">Select a subject</option>
                    <option>Package Enquiry</option>
                    <option>Custom Itinerary Request</option>
                    <option>Booking Support</option>
                    <option>General Question</option>
                    <option>Group Travel</option>
                  </select>
                  <div className="err-msg" id="err-subject">Please select a subject.</div>
                  <div className="invalid-feedback">
                    Please select a subject.
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor='cf-message' className='form-label'>Your Message *</label>
                  <textarea id="cf-message" minLength={20} className="form-control" placeholder="Tell us about your dream trip — destination, dates, number of travellers, special preferences..." required></textarea>
                  <div className="err-msg" id="err-message">Please enter a message (at least 20 characters).</div>
                  <div className="invalid-feedback">
                    Please enter a message (at least 20 characters).
                  </div>
                </div>

                <button type="submit" className="btn btn-gold" style={{ width: "100%", justifyContent: "center" }}>
                  ✦ Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="map-placeholder">
            <div className="map-placeholder-content">
              <h3>📍 New Delhi, India</h3>
              <p>42, Connaught Place — India's travel heartland</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact