import React from "react";
import AppleCard from "./AppleCard";
import useScrollFade from "../hooks/useScrollFade";

export default function ExperienceLinkedIn({ items }) {
  const ref = useScrollFade();

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="experience" ref={ref}>
      <div className="experience-linkedin-list reveal">
        {items.map((exp, index) => (
          <AppleCard key={index} className="experience-linkedin-card">
            <div className="exp-row">
              {/* LOGO */}
              <div className="exp-logo-box">
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="exp-logo-img"
                  />
                ) : (
                  <div className="exp-logo-fallback">
                    {exp.company.charAt(0)}
                  </div>
                )}
              </div>

              {/* RIGHT CONTENT */}
              <div className="exp-right">
                <h3 className="exp-company">{exp.company}</h3>
                <p className="exp-title">{exp.title}</p>
                <p className="exp-dates">{exp.period}</p>

                <ul className="exp-detail-ul">
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>

                {exp.projects?.length > 0 && (
                  <div className="exp-projects-wrapper">
                    <p className="exp-project-header">Projects</p>

                    {exp.projects.map((proj, idx) => (
                      <button
                        key={idx}
                        className="exp-project-btn"
                        onClick={scrollToProjects}
                      >
                        {proj}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </AppleCard>
        ))}
      </div>
    </section>
  );
}
