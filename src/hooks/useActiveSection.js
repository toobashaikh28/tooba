import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Returns the id of the section the reader is in: the last one whose top has passed
 * just below the sticky nav. At the very bottom of the page it returns the last section.
 * `select(id)` lets a nav click set the highlight directly, until the reader scrolls on their own.
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const locked = useRef(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      if (locked.current) return;
      const line = 60 + 80; // nav height plus a little breathing room
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      });
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      setActive(atBottom ? ids[ids.length - 1] : current);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const unlock = () => { locked.current = false; };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('wheel', unlock, { passive: true });
    window.addEventListener('touchstart', unlock, { passive: true });
    window.addEventListener('keydown', unlock);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('wheel', unlock);
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('keydown', unlock);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ids]);

  const select = useCallback((id) => {
    locked.current = true;
    setActive(id);
  }, []);

  return [active, select];
}
