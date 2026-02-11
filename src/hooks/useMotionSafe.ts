import { useMemo } from 'react';

export function useMotionSafe(): boolean {
  return useMemo(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);
}
