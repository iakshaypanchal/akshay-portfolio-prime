
import React from "react";
import useScrollFade from "../hooks/useScrollFade";
import useTypingEffect from "../hooks/useTypingEffect";
import profileImg from "../assets/profile.webp";
import AppleCard from "./AppleCard";

export default function About({ profile }) {
  const ref = useScrollFade();
  const { displayedText: name, isComplete: nameComplete } = useTypingEffect(profile.name, 80, 500);
  const { displayedText: title } = useTypingEffect(profile.title, 60, nameComplete ? 800 : 2000);

  return (
    <section id="about" ref={ref}>
      <div className="apple-about-card reveal macos-login-style">
        {/* Avatar */}
        <div className="avatar-wrapper">
          <img src={profileImg} className="hero-photo" alt="Profile" />
        </div>

        {/* Name + Title */}
        <h1 className="hero-title">
          {name}
          <span className="typing-cursor">|</span>
        </h1>
        <p className="hero-subtitle">{title}<span className="typing-cursor">|</span></p>

        {/* Social Cards */}
        <div className="about-social-cards">
          {/* LinkedIn */}
          <AppleCard
            className="social-card ripple-effect"
            onClick={() => window.open(profile.linkedin, "_blank")}
          >
            <div className="social-icon">
              <i className="pi pi-linkedin"></i>
            </div>
            <div className="social-label">LinkedIn</div>
          </AppleCard>

          {/* Email */}
          <AppleCard
            className="social-card ripple-effect"
            onClick={() => (window.location.href = `mailto:${profile.email}`)}
          >
            <div className="social-icon">
              <i className="pi pi-envelope"></i>
            </div>
            <div className="social-label">Email</div>
          </AppleCard>

          {/* GitHub */}
          <AppleCard
            className="social-card ripple-effect"
            onClick={() =>
              window.open("https://github.com/iakshaypanchal", "_blank")
            }
          >
            <div className="social-icon">
              <i className="pi pi-github"></i>
            </div>
            <div className="social-label">GitHub</div>
          </AppleCard>
        </div>

        {/* Summary */}
        <p className="about-summary">
          Front-End Developer with 4+ years of experience building clean,
          scalable, modern React interfaces with strong focus on performance and
          UI/UX quality.
        </p>
      </div>
    </section>
  );
}


