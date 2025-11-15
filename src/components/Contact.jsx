import React, { useState, useRef } from "react";
import useScrollFade from "../hooks/useScrollFade";

export default function Contact({ profile }) {
  const ref = useScrollFade();

  const [form, setForm] = useState({ name: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [sent, setSent] = useState(false);

  const firstTypedAt = useRef(null);
  const lastSubmittedAt = useRef(0);

  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbwyEUhjYxBbX7hhMToTNSdSdyu-74SUZOlI6V43mM26JQVU8MaVbIECiAu3qDG85mY_kA/exec";

  const SPAM_LIMIT_MS = 8000; // user must wait 8 seconds between submissions
  const MIN_TYPING_TIME = 2000; // must type for minimum 2 seconds

  const handleTypingStart = () => {
    if (!firstTypedAt.current) {
      firstTypedAt.current = performance.now();
    }
  };

  const handleSubmit = async () => {
    const now = performance.now();

    // -------------------
    // SPAM PROTECTION
    // -------------------

    if (!form.name.trim() || !form.message.trim()) {
      setStatus("Fill all fields.");
      return;
    }

    // 1. rate limit
    if (now - lastSubmittedAt.current < SPAM_LIMIT_MS) {
      setStatus("You're sending too fast. Slow down.");
      return;
    }

    // 2. typing-time validation
    if (!firstTypedAt.current || now - firstTypedAt.current < MIN_TYPING_TIME) {
      setStatus("Write a real message, not instant spam.");
      return;
    }

    // 3. honeypot (hidden trap)
    if (form.botField && form.botField.length > 0) {
      setStatus("Bot detected.");
      return;
    }

    // passed protections
    lastSubmittedAt.current = now;
    setLoading(true);
    setStatus("");

    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(form),
      });

      setSent(true); // trigger animation
      setStatus("");
      setForm({ name: "", message: "" });
      firstTypedAt.current = null; // reset
    } catch (err) {
      setStatus("Error sending message.");
    }

    setLoading(false);

    // auto-hide animation after 2.2s
    setTimeout(() => setSent(false), 2200);
  };

  return (
    <section id="contact" ref={ref}>
      <div className="apple-contact-card reveal">

        <h2 className="reach-title">Reach Out to Me</h2>
        <p className="reach-subline">
          I’m always open to discussing projects, collaborations, or opportunities.
        </p>

        {/* Quick contact */}
        <div className="quick-contact-row">
          <a href={`mailto:${profile.email}`} className="quick-btn">Email</a>
          <a href={profile.linkedin} target="_blank" className="quick-btn">LinkedIn</a>
        </div>

        <div className="contact-field-panel">

          {/* Honeypot (hidden from users, bots fill it) */}
          <input
            type="text"
            style={{ display: "none" }}
            value={form.botField || ""}
            onChange={(e) => setForm({ ...form, botField: e.target.value })}
          />

          <div className="field">
            <label>Name</label>
            <input
              type="text"
              className="apple-input centered-input"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => {
                handleTypingStart();
                setForm({ ...form, name: e.target.value });
              }}
            />
          </div>

          <div className="field">
            <label>Message</label>
            <textarea
              rows="4"
              className="apple-input centered-input"
              placeholder="Write a message"
              value={form.message}
              onChange={(e) => {
                handleTypingStart();
                setForm({ ...form, message: e.target.value });
              }}
            />
          </div>

          <button
            className={`apple-button contact-send-btn ${sent ? "sent-success" : ""}`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {sent ? "✓ Sent" : loading ? "Sending..." : "Send Message"}
          </button>

          {status && !sent && (
            <p
              style={{
                textAlign: "center",
                marginTop: 8,
                color: "var(--muted)",
                fontSize: 14,
              }}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
