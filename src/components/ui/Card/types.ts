import { HTMLAttributes, ReactNode } from 'react';

export type CardShadow = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Card title */
  title?: ReactNode;
  /** Extra content in the top-right corner */
  extra?: ReactNode;
  /** Footer content */
  footer?: ReactNode;
  /** Whether the card should have a hover effect */
  hoverable?: boolean;
  /** Whether to show a border */
  bordered?: boolean;
  /** Shadow size */
  shadow?: CardShadow;
}
