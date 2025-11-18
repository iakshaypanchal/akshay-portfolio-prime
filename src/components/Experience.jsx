import React from "react";
import useScrollFade from "../hooks/useScrollFade";
import "../styles/Experience.css";

export default function Experience({ items }) {
  const ref = useScrollFade();

  return (
    <section id="experience" ref={ref} className="experience-linkedin-section">
      <div className="experience-timeline">
        {items.map((exp, idx) => (
          <div key={idx} className="experience-timeline-item reveal">
            {/* Timeline connector */}
            <div className="timeline-connector">
              <div className="timeline-logo-wrapper">
                {exp.logo ? (
                  <img src={exp.logo} alt={exp.company} className="timeline-logo" />
                ) : (
                  <div className="timeline-logo-fallback">
                    {exp.company.charAt(0)}
                  </div>
                )}
              </div>
              {/* Always show line except for last item */}
              {idx < items.length - 1 && <div className="timeline-line"></div>}
              {/* Show line for single item or last item but shorter */}
              {items.length === 1 && <div className="timeline-line timeline-line-single"></div>}
              {items.length > 1 && idx === items.length - 1 && <div className="timeline-line timeline-line-last"></div>}
            </div>

            {/* Content */}
            <div className="timeline-content">
              <div className="experience-card">
                <div className="exp-header">
                  <h3 className="exp-role">{exp.title}</h3>
                  <p className="exp-company-name">{exp.company}</p>
                  <p className="exp-period">{exp.period}</p>
                </div>

                {exp.details && exp.details.length > 0 && (
                  <ul className="exp-details-list">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}

                {exp.projects && exp.projects.length > 0 && (
                  <div className="exp-projects">
                    <p className="exp-projects-label">Key Projects:</p>
                    <div className="exp-projects-tags">
                      {exp.projects.map((project, i) => (
                        <span key={i} className="exp-project-tag">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}






