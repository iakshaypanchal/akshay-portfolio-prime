
import React, { useRef, useState, useEffect } from "react";
import useScrollFade from "../hooks/useScrollFade";
import "../styles/Projects.css";

export default function Projects({ items }) {
  const ref = useScrollFade();
  const scrollerRef = useRef(null);

  const [showTip, setShowTip] = useState(false);

  // horizontal wheel scroll
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

  // drag + inertia
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let dragging = false;
    let lastX = 0;
    let velocity = 0;
    let lastT = 0;
    let raf;

    const down = (e) => {
      dragging = true;
      lastX = e.clientX;
      lastT = performance.now();
      velocity = 0;
      el.setPointerCapture(e.pointerId);
    };

    const move = (e) => {
      if (!dragging) return;
      const dx = lastX - e.clientX;
      el.scrollLeft += dx;

      const now = performance.now();
      velocity = dx / (now - lastT);

      lastX = e.clientX;
      lastT = now;
    };

    const up = () => {
      dragging = false;
      let v = velocity * 900;

      const step = () => {
        if (Math.abs(v) < 0.2) return;
        el.scrollLeft += v;
        v *= 0.95;
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);

    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      cancelAnimationFrame(raf);
    };
  }, []);

  // scroll buttons
  const scrollByPage = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <section id="projects" ref={ref} className="projects-section">

      {/* Tooltip icon */}
      
      {/* Scroll buttons */}
    <div className="projects-controls-center">
  <button className="proj-scroll-btn" onClick={() => scrollByPage(-1)}>‹</button>

  <div className="tooltip-wrapper">
    <div
      className="tooltip-icon"
      onClick={() => setShowTip(!showTip)}
    >
      i
    </div>

    {showTip && (
      <span className="tooltip-inline">
        Client projects I worked on (not personal).
      </span>
    )}
  </div>

  <button className="proj-scroll-btn" onClick={() => scrollByPage(1)}>›</button>
</div>


      {/* Cards */}
      <div className="projects-horizontal reveal" ref={scrollerRef}>
        {items.map((p, idx) => (
          <div key={p.title} className="project-card-wrapper">
            <div className="project-card">
              {/* Project header */}
              <div className="project-header">
                <div className="project-number">0{idx + 1}</div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-period">{p.period}</p>
              </div>

              {/* Project description */}
              <ul className="project-features-list">
                {p.description
                  .split("\n")
                  .map((l) => l.trim())
                  .filter(Boolean)
                  .map((bul, i) => (
                    <li key={i}>{bul}</li>
                  ))}
              </ul>

              {/* Project footer with tech stack or links */}
              <div className="project-footer">
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
