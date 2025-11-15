import React, { useRef, useState, useEffect } from "react";
import AppleCard from "./AppleCard";
import useScrollFade from "../hooks/useScrollFade";

export default function Projects({ items }) {
  const ref = useScrollFade();
  const scrollerRef = useRef(null);
  const dragging = useRef(false);
  const last = useRef({ x: 0, t: 0, vx: 0 });
  const raf = useRef(null);

  // WHEEL → horizontal scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        el.scrollBy({ left: e.deltaY, behavior: "smooth" });
        e.preventDefault();
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // DRAG scroll with inertia
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onPointerDown = (e) => {
      dragging.current = true;
      last.current = { x: e.clientX, t: performance.now(), vx: 0 };
      el.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
      if (!dragging.current) return;
      const dx = last.current.x - e.clientX;
      el.scrollLeft += dx;

      const now = performance.now();
      const dt = now - last.current.t || 16;
      last.current.vx = dx / dt;

      last.current.x = e.clientX;
      last.current.t = now;
    };

    const onPointerUp = () => {
      dragging.current = false;

      // inertia
      let v = last.current.vx * 800; // px/s
      const friction = 0.0012;

      const animate = () => {
        if (Math.abs(v) < 0.2) return;

        scrollerRef.current.scrollLeft += v;
        v *= 0.95; // smooth deceleration

        raf.current = requestAnimationFrame(animate);
      };

      raf.current = requestAnimationFrame(animate);
    };

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  // Button scroll
  const scrollByPage = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollBy({ left: dir * w * 0.9, behavior: "smooth" });
  };

  return (
    <section id="projects" ref={ref} className="projects-section">
      {/* CENTERED BUTTONS */}
      <div className="projects-buttons-center">
        <button className="proj-scroll-btn" onClick={() => scrollByPage(-1)}>
          ‹
        </button>
        <button className="proj-scroll-btn" onClick={() => scrollByPage(1)}>
          ›
        </button>
      </div>

      {/* Horizontal Scroller */}
      <div className="projects-horizontal reveal" ref={scrollerRef}>
        {items.map((p) => (
          <AppleCard key={p.title} className="project-vertical-card">
            <h3>{p.title}</h3>
            <p className="muted">{p.period}</p>

            <ul className="project-bullets">
              {p.description
                .split("\n")
                .map((l) => l.trim())
                .filter(Boolean)
                .flatMap((l) => l.split(".").map((s) => s.trim()))
                .filter(Boolean)
                .map((bul, i) => (
                  <li key={i}>{bul}</li>
                ))}
            </ul>
          </AppleCard>
        ))}
      </div>
    </section>
  );
}
