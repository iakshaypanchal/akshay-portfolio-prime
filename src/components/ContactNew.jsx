import React, { useState, useRef } from "react";
import useScrollFade from "../hooks/useScrollFade";
import "../styles/Contact.css";

export default function ContactNew({ profile }) {
  const ref = useScrollFade();

  const [form, setForm] = useState({ name: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [sent, setSent] = useState(false);

  const firstTypedAt = useRef(null);
  const lastSubmittedAt = useRef(0);

  const WEB_APP_URL = import.meta.env.VITE_WEB_APP_URL;

  const SPAM_LIMIT_MS = 8000;
  const MIN_TYPING_TIME = 2000;

  const handleTypingStart = () => {
    if (!firstTypedAt.current) {
      firstTypedAt.current = performance.now();
    }
  };

  const handleSubmit = async () => {
    const now = performance.now();

    if (!form.name.trim() || !form.message.trim()) {
      setStatus("Fill all fields.");
      return;
    }

    if (now - lastSubmittedAt.current < SPAM_LIMIT_MS) {
      setStatus("You're sending too fast. Slow down.");
      return;
    }

    if (!firstTypedAt.current || now - firstTypedAt.current < MIN_TYPING_TIME) {
      setStatus("Write a real message, not instant spam.");
      return;
    }

    if (form.botField && form.botField.length > 0) {
      setStatus("Bot detected.");
      return;
    }

    lastSubmittedAt.current = now;
    setLoading(true);
    setStatus("");

    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(form),
      });

      setSent(true);
      setStatus("");
      setForm({ name: "", message: "" });
      firstTypedAt.current = null;
    } catch (err) {
      setStatus("Error sending message.");
    }

    setLoading(false);
    setTimeout(() => setSent(false), 2200);
  };

  return (
    <section id="contact" ref={ref}>
      <div className="contact-container reveal">
        
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-main-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Side - Contact Info Cards */}
          <div className="contact-info-section">
            <h3 className="contact-section-label">Get in Touch</h3>
            
            {/* Email Card */}
            <a href={`mailto:${profile.email}`} className="contact-info-card ripple-effect">
              <div className="contact-icon-wrapper">
                <i className="pi pi-envelope"></i>
              </div>
              <div className="contact-info-content">
                <p className="contact-info-label">Email</p>
                <p className="contact-info-value">{profile.email}</p>
              </div>
              <i className="pi pi-arrow-right contact-arrow"></i>
            </a>

            {/* LinkedIn Card */}
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-info-card ripple-effect">
              <div className="contact-icon-wrapper">
                <i className="pi pi-linkedin"></i>
              </div>
              <div className="contact-info-content">
                <p className="contact-info-label">LinkedIn</p>
                <p className="contact-info-value">Connect with me</p>
              </div>
              <i className="pi pi-arrow-right contact-arrow"></i>
            </a>

            {/* Phone Card */}
            {/* <a href={`tel:${profile.phone}`} className="contact-info-card ripple-effect">
              <div className="contact-icon-wrapper">
                <i className="pi pi-phone"></i>
              </div>
              <div className="contact-info-content">
                <p className="contact-info-label">Phone</p>
                <p className="contact-info-value">{profile.phone}</p>
              </div>
              <i className="pi pi-arrow-right contact-arrow"></i>
            </a> */}

            {/* Location Card */}
            <div className="contact-info-card contact-info-card-static">
              <div className="contact-icon-wrapper">
                <i className="pi pi-map-marker"></i>
              </div>
              <div className="contact-info-content">
                <p className="contact-info-label">Location</p>
                <p className="contact-info-value">{profile.location}</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-section">
            <h3 className="contact-section-label">Send a Message</h3>
            
            <div className="contact-form-card">
              
              {/* Honeypot (hidden from users, bots fill it) */}
              <input
                type="text"
                style={{ display: "none" }}
                value={form.botField || ""}
                onChange={(e) => setForm({ ...form, botField: e.target.value })}
              />

              <div className="form-field">
                <label className="form-label">
                  <i className="pi pi-user"></i>
                  Name
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => {
                    handleTypingStart();
                    setForm({ ...form, name: e.target.value });
                  }}
                />
              </div>

              <div className="form-field">
                <label className="form-label">
                  <i className="pi pi-comment"></i>
                  Message
                </label>
                <textarea
                  rows="5"
                  className="form-input form-textarea"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => {
                    handleTypingStart();
                    setForm({ ...form, message: e.target.value });
                  }}
                />
              </div>

              <button
                className={`form-submit-btn ripple-effect ${sent ? "sent-success" : ""}`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {sent ? (
                  <>
                    <i className="pi pi-check"></i>
                    Message Sent!
                  </>
                ) : loading ? (
                  <>
                    <i className="pi pi-spin pi-spinner"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="pi pi-send"></i>
                    Send Message
                  </>
                )}
              </button>

              {status && !sent && (
                <div className="form-status-message">
                  <i className="pi pi-info-circle"></i>
                  {status}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
