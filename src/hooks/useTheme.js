import { useCallback, useState } from 'react';

/**
 * Theme state. The starting value comes from the system setting (set in index.html before first paint).
 * The choice lives in memory only, so it resets on reload and follows the system again.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      return next;
    });
  }, []);

  return [theme, toggle];
}
