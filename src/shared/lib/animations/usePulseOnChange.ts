import { gsap } from 'gsap';
import { useLayoutEffect, type RefObject } from 'react';
import { useMotionSafe } from './useMotionSafe';

export function usePulseOnChange(scopeRef: RefObject<HTMLElement>, trigger: string) {
  const motionSafe = useMotionSafe();

  useLayoutEffect(() => {
    if (!scopeRef.current || !motionSafe) {
      return;
    }

    gsap.fromTo(
      scopeRef.current,
      { scale: 0.985, autoAlpha: 0.9 },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 0.32,
        ease: 'power2.out',
      },
    );
  }, [scopeRef, motionSafe, trigger]);
}
