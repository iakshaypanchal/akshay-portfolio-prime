import { useEffect, useRef } from "react";

/**
 * Hook to add 'in-view' class when element scrolls into view.
 * Returns ref to attach to elements.
 *
 * CSS: you must include styles for .reveal and .reveal.in-view (see styles.apple.css)
 */
export default function useScrollFade(
  options = { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          // if you want the animation only once:
          observer.unobserve(e.target);
        }
      });
    }, options);

    const els = node.querySelectorAll ? node.querySelectorAll(".reveal") : [];
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ref, options]);

  return ref;
}
