'use client';

import { useEffect } from 'react';

export default function ScrollTopFix() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (window.location.hash) {
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );
    }

    const forceTop = () => window.scrollTo(0, 0);

    forceTop();
    const t1 = setTimeout(forceTop, 50);
    const t2 = setTimeout(forceTop, 300);
    const t3 = setTimeout(forceTop, 800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return null;
}