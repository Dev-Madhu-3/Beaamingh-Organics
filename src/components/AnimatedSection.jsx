// AnimatedSection.js
import { useEffect, useRef, useState } from "react";

const AnimatedSection = ({
  children,
  animation = "fade-up",
  delay = 0,
  repeat = false,     // animate every time it enters the viewport
  appear = true,      // animate on first load even if already in view
  resetOn,            // change this (e.g., slide index) to re-trigger animation on demand
}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure one paint with hidden styles before we flip to visible (prevents “no transition” on first load)
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // IntersectionObserver that also nudges to fire when element is already fully visible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // schedule state change on next frame to guarantee CSS transition
          requestAnimationFrame(() => setInView(true));
        } else if (repeat) {
          setInView(false);
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // 0..1
        rootMargin: "0px 0px -1px 0px", // tiny negative bottom margin makes "fully in view" still trigger
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [repeat]);

  // If it’s already in view on mount, still animate (after hidden styles have painted)
  useEffect(() => {
    if (!appear || !mounted || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const alreadyInView = rect.top < vh && rect.bottom > 0;

    if (alreadyInView) {
      // wait a tick so initial hidden classes are committed, then flip visible
      const t = setTimeout(() => setInView(true), 0);
      return () => clearTimeout(t);
    }
  }, [mounted, appear]);

  // Optional: manually re-trigger (useful for slider text per-slide)
  useEffect(() => {
    if (resetOn === undefined) return;
    // brief reset to re-run transition even without scrolling
    setInView(false);
    const t = setTimeout(() => setInView(true), 0);
    return () => clearTimeout(t);
  }, [resetOn]);

  const cls = (() => {
    const base = `transform-gpu will-change-transform will-change-opacity transition-all ease-out`;
    switch (animation) {
      case "fade-up":
        return `${base} duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;
      case "fade-in":
        return `will-change-opacity transition-opacity ease-out duration-700 ${inView ? "opacity-100" : "opacity-0"}`;
      case "slide-left":
        return `${base} duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`;
      case "slide-right":
        return `${base} duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`;
      case "scale":
        return `${base} duration-700 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`;
      default:
        return `${base} duration-700 ${inView ? "opacity-100" : "opacity-0"}`;
    }
  })();

  return (
    <div
      ref={ref}
      className={cls}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
