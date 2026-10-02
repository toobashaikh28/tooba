import { useEffect } from 'react';

/**
 * A very subtle fade-in for sections as they scroll into view.
 * Does nothing (sections stay fully visible) when the reader prefers reduced motion
 * or the browser has no IntersectionObserver.
 */
export default function useReveal() {
  useEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (calm || !('IntersectionObserver' in window)) return undefined;

    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    document.documentElement.classList.add('reveal-ready');
    sections.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('reveal-ready');
    };
  }, []);
}
