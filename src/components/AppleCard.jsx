import React from "react";

export default function AppleCard({
  children,
  className = "",
  style = {},
  onClick,
}) {
  return (
    <div
      className={`apple-card ${className}`}
      onClick={onClick} // ← THIS WAS MISSING
      style={{
        borderRadius: 18,
        background: "var(--card-bg)",
        boxShadow: "var(--shadow)",
        padding: 20,
        cursor: onClick ? "pointer" : "default", // pointer cursor for clickable cards
        transition: "transform .32s cubic-bezier(.2,.9,.3,1), box-shadow .32s",
        willChange: "transform, box-shadow",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
