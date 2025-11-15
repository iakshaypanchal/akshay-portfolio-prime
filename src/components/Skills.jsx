import React from "react";
import useScrollFade from "../hooks/useScrollFade";
import { SKILLS_ICONS } from "../data/profile";

export default function Skills() {
  const ref = useScrollFade();

  return (
    <section id="skills" ref={ref}>
      <div className="skills-icons-flex reveal">
        {SKILLS_ICONS.map((skill) => (
          <div
            key={skill.name}
            className="skill-icon-wrapper"
            title={skill.name}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="skill-only-icon"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
