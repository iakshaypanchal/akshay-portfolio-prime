

import React from "react";
import useScrollFade from "../hooks/useScrollFade";

/**
 * Apple-style subtle divider with title and thin line.
 * Props:
 *  - title (string) optional
 */
export default function SectionDivider({ title }) {
  const ref = useScrollFade();
  
  return (
    <div
      ref={ref}
      className="section-divider-wrapper reveal"
    >
      <div className="section-divider-line left" />
      {title && <div className="section-divider-title">{title}</div>}
      <div className="section-divider-line right" />
    </div>
  );
}
