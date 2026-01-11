import type { RefObject } from 'react';

export type MotionScopeRef = RefObject<HTMLElement>;

export type RevealAnimationOptions = {
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
};

export type InteractiveMotionOptions = {
  hoverScale?: number;
  pressScale?: number;
  duration?: number;
};
