import React from "react";
import useScrollFade from "../hooks/useScrollFade";
import useTypingEffect from "../hooks/useTypingEffect";
import profileImg from "../assets/profile.webp";
import AppleCard from "./AppleCard";
import "../styles/About.css";

export default function About({ profile }) {
  const ref = useScrollFade();
  const { displayedText: name, isComplete: nameComplete } = useTypingEffect(
    profile.name,
    80,
    500
  );
  const { displayedText: title } = useTypingEffect(
    profile.title,
    60,
    nameComplete ? 800 : 2000
  );

  return (
    <section id="about" ref={ref}>
      <div className="apple-about-card reveal macos-login-style">
        {/* Profile Header with Image */}
        <div className="about-profile-header">
          <div className="profile-image-wrapper">
            <div className="profile-image-ring">
              <div className="profile-image-inner">
                <img
                  src={profileImg}
                  className="profile-image"
                  alt={profile.name}
                />
              </div>
            </div>
            <div
              className="profile-status-badge"
              title="Available for work"
            ></div>
          </div>

          {/* Name with Typing Effect */}
          <h1 className="profile-name">
            {name}
            <span className="profile-cursor">|</span>
          </h1>

          {/* Title with Typing Effect */}
          <p className="profile-title">
            {title}
            <span className="profile-cursor">|</span>
          </p>

          {/* Subtitle */}
          <p className="profile-subtitle">
            Building pixel-perfect, high-performance web experiences with modern
            React
          </p>
        </div>

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
        {/* Bio/Summary with Quote Style */}
        <div className="profile-bio">
          Front-End Developer with <strong>4+ years</strong> of experience
          building clean, scalable, modern React interfaces with strong focus on
          performance and UI/UX quality. Specialized in creating delightful user
          experiences with attention to detail and pixel-perfect
          implementations.
        </div>

        {/* Quick Stats */}
        <div className="profile-quick-stats">
          <div className="profile-stat-item">
            <p className="profile-stat-number">4+</p>
            <p className="profile-stat-label">Years Exp.</p>
          </div>
          <div className="profile-stat-item">
            <p className="profile-stat-number">10+</p>
            <p className="profile-stat-label">Projects</p>
          </div>
          <div className="profile-stat-item">
            <p className="profile-stat-number">10+</p>
            <p className="profile-stat-label">Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
