import { InputHTMLAttributes, ReactNode } from 'react';

export type InputSize = 'small' | 'medium' | 'large';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input label */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Icon or element to display before the input */
  prefix?: ReactNode;
  /** Icon or element to display after the input */
  suffix?: ReactNode;
  /** Input size variant */
  size?: InputSize;
  /** Whether the input should take full width of parent */
  fullWidth?: boolean;
}
