import React from "react";

/**
 * Apple-style subtle divider with title and thin line.
 * Props:
 *  - title (string) optional
 */
export default function SectionDivider({ title }) {
  return (
    <div
      className="section-divider-wrapper reveal"
    >
      <div className="section-divider-line left" />
      {title && <div className="section-divider-title">{title}</div>}
      <div className="section-divider-line right" />
    </div>
  );
}
