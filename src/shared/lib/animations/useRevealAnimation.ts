import { gsap } from 'gsap';
import { useLayoutEffect, type RefObject } from 'react';
import { useMotionSafe } from './useMotionSafe';

type UseRevealAnimationOptions = {
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
};

export function useRevealAnimation(
  scopeRef: RefObject<HTMLElement>,
  selector: string,
  options?: UseRevealAnimationOptions,
) {
  const motionSafe = useMotionSafe();
  const y = options?.y ?? 20;
  const duration = options?.duration ?? 0.6;
  const stagger = options?.stagger ?? 0.08;
  const delay = options?.delay ?? 0;

  useLayoutEffect(() => {
    if (!scopeRef.current || !motionSafe) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        selector,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
        },
      );
    }, scopeRef);

    return () => {
      ctx.revert();
    };
  }, [scopeRef, selector, motionSafe, y, duration, stagger, delay]);
}
