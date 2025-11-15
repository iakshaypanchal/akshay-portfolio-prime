import React from "react";

/**
 * Apple-style subtle divider with title and thin line.
 * Props:
 *  - title (string) optional
 */
export default function SectionDivider({ title }) {
  return (
    <div
      style={{
        margin: "36px 0 18px",
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <div
        style={{
          flex: 1,
          height: 1,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.06), rgba(0,0,0,0.02))",
          borderRadius: 2,
        }}
      />
      {title && (
        <div
          style={{
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(0,0,0,0.02)",
            fontWeight: 600,
            fontSize: 13,
            color: "var(--muted)",
          }}
        >
          {title}
        </div>
      )}
      <div
        style={{
          flex: 1,
          height: 1,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.02), rgba(0,0,0,0.06))",
          borderRadius: 2,
        }}
      />
    </div>
  );
}
