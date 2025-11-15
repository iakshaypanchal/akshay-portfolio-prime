import React from "react";
import AppleCard from "./AppleCard";
import useScrollFade from "../hooks/useScrollFade";

export default function Experience({ items }) {
  const ref = useScrollFade();

  return (
    <section id="experience" ref={ref}>
      {items.map((item, idx) => (
        <AppleCard key={idx} className="reveal" style={{ marginBottom: 20 }}>
          <h3>
            {item.role} — {item.company}
          </h3>
          <p className="muted">
            {item.start} — {item.end}
          </p>
          <ul>
            {item.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </AppleCard>
      ))}
    </section>
  );
}
