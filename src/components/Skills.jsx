import React from "react";
import AppleCard from "./AppleCard";
import { Chip } from "primereact/chip";
import useScrollFade from "../hooks/useScrollFade";

export default function Skills({ skills }) {
  const ref = useScrollFade();

  return (
    <section id="skills" ref={ref}>
      <div className="skills-grid reveal">
        {skills.map((skill) => (
          <AppleCard key={skill} className="skill-card reveal">
            <Chip label={skill} className="skill-chip" />
          </AppleCard>
        ))}
      </div>
    </section>
  );
}
