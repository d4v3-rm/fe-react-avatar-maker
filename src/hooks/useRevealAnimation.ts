import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import type { MotionScopeRef, RevealAnimationOptions } from './animations.types';
import { useMotionSafe } from './useMotionSafe';

export function useRevealAnimation(
  scopeRef: MotionScopeRef,
  selector: string,
  options?: RevealAnimationOptions,
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

    const context = gsap.context(() => {
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
      context.revert();
    };
  }, [scopeRef, selector, motionSafe, y, duration, stagger, delay]);
}
