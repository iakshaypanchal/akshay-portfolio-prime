import React from "react";

export default function Footer({ profile }) {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {profile.name} — Front-End Developer
      </p>
    </footer>
  );
}
