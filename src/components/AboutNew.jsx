
import React from "react";
import useScrollFade from "../hooks/useScrollFade";
import useTypingEffect from "../hooks/useTypingEffect";
import profileImg from "../assets/profile.webp";
import "../styles/About.css";

export default function AboutNew({ profile }) {
  const ref = useScrollFade();
  const { displayedText: name, isComplete: nameComplete } = useTypingEffect(profile.name, 80, 500);
  const { displayedText: title } = useTypingEffect(profile.title, 60, nameComplete ? 800 : 2000);

  return (
    <section id="about" ref={ref} className="about-hero-section">
      <div className="apple-about-card reveal macos-login-style">
        
        {/* Profile Header with Image */}
        <div className="about-profile-header">
          <div className="profile-image-wrapper">
            <div className="profile-image-ring">
              <div className="profile-image-inner">
                <img src={profileImg} className="profile-image" alt={profile.name} />
              </div>
            </div>
            <div className="profile-status-badge" title="Available for work"></div>
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
            Building pixel-perfect, high-performance web experiences with modern React
          </p>
        </div>

        {/* Bio/Summary with Quote Style */}
        <div className="profile-bio">
          Front-End Developer with <strong>4+ years</strong> of experience building clean,
          scalable, modern React interfaces with strong focus on performance and
          UI/UX quality. Specialized in creating delightful user experiences with
          attention to detail and pixel-perfect implementations.
        </div>

        {/* Quick Stats */}
        <div className="profile-quick-stats">
          <div className="profile-stat-item">
            <p className="profile-stat-number">4+</p>
            <p className="profile-stat-label">Years Exp.</p>
          </div>
          <div className="profile-stat-item">
            <p className="profile-stat-number">15+</p>
            <p className="profile-stat-label">Projects</p>
          </div>
          <div className="profile-stat-item">
            <p className="profile-stat-number">100%</p>
            <p className="profile-stat-label">Dedication</p>
          </div>
        </div>

      </div>

      {/* Social Cards - Outside container on mobile */}
      <div className="about-social-grid">
        {/* LinkedIn */}
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="about-social-card ripple-effect"
        >
          <div className="about-social-icon">
            <i className="pi pi-linkedin"></i>
          </div>
          <p className="about-social-label">LinkedIn</p>
        </a>

        {/* Email */}
        <a
          href={`mailto:${profile.email}`}
          className="about-social-card ripple-effect"
        >
          <div className="about-social-icon">
            <i className="pi pi-envelope"></i>
          </div>
          <p className="about-social-label">Email</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/iakshaypanchal"
          target="_blank"
          rel="noopener noreferrer"
          className="about-social-card ripple-effect"
        >
          <div className="about-social-icon">
            <i className="pi pi-github"></i>
          </div>
          <p className="about-social-label">GitHub</p>
        </a>
      </div>
    </section>
  );
}
