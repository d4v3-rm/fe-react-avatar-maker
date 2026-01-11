import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import type { InteractiveMotionOptions, MotionScopeRef } from './animations.types';
import { useMotionSafe } from './useMotionSafe';

export function useInteractiveMotion(
  scopeRef: MotionScopeRef,
  selector: string,
  options?: InteractiveMotionOptions,
) {
  const motionSafe = useMotionSafe();
  const hoverScale = options?.hoverScale ?? 1.03;
  const pressScale = options?.pressScale ?? 0.985;
  const duration = options?.duration ?? 0.2;

  useLayoutEffect(() => {
    if (!scopeRef.current || !motionSafe) {
      return;
    }

    const elements = Array.from(scopeRef.current.querySelectorAll<HTMLElement>(selector));
    const cleanups: Array<() => void> = [];

    for (const element of elements) {
      const onEnter = () => {
        gsap.to(element, { scale: hoverScale, duration, ease: 'power2.out' });
      };

      const onLeave = () => {
        gsap.to(element, { scale: 1, duration, ease: 'power2.out' });
      };

      const onDown = () => {
        gsap.to(element, { scale: pressScale, duration: duration * 0.8, ease: 'power2.out' });
      };

      const onUp = () => {
        gsap.to(element, { scale: hoverScale, duration: duration * 0.8, ease: 'power2.out' });
      };

      element.addEventListener('mouseenter', onEnter);
      element.addEventListener('mouseleave', onLeave);
      element.addEventListener('focus', onEnter);
      element.addEventListener('blur', onLeave);
      element.addEventListener('mousedown', onDown);
      element.addEventListener('mouseup', onUp);

      cleanups.push(() => {
        element.removeEventListener('mouseenter', onEnter);
        element.removeEventListener('mouseleave', onLeave);
        element.removeEventListener('focus', onEnter);
        element.removeEventListener('blur', onLeave);
        element.removeEventListener('mousedown', onDown);
        element.removeEventListener('mouseup', onUp);
      });
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [scopeRef, selector, motionSafe, hoverScale, pressScale, duration]);
}
