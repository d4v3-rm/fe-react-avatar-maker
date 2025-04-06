import styled, { css, keyframes } from 'styled-components';
import type { ButtonProps, IconPositionType } from './types';

// Loading spinner animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Button size styles
const getSizeStyles = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small':
      return css`
        height: 32px;
        padding: 0 ${({ theme }) => theme.spacing.sm};
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
      `;
    case 'large':
      return css`
        height: 48px;
        padding: 0 ${({ theme }) => theme.spacing.lg};
        font-size: ${({ theme }) => theme.typography.fontSize.lg};
      `;
    case 'medium':
    default:
      return css`
        height: 40px;
        padding: 0 ${({ theme }) => theme.spacing.md};
        font-size: ${({ theme }) => theme.typography.fontSize.md};
      `;
  }
};

// Button variant styles
const getVariantStyles = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'secondary':
      return css`
        background-color: ${({ theme }) => theme.colors.components.button.secondary.background};
        color: ${({ theme }) => theme.colors.components.button.secondary.text};
        border: 1px solid ${({ theme }) => theme.colors.border.default};
        
        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.components.button.secondary.hover};
        }
        
        &:active:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.components.button.secondary.hover};
          transform: translateY(1px);
        }
      `;
    case 'ghost':
      return css`
        background-color: ${({ theme }) => theme.colors.components.button.ghost.background};
        color: ${({ theme }) => theme.colors.components.button.ghost.text};
        border: 1px solid transparent;
        
        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.components.button.ghost.hover};
        }
        
        &:active:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.components.button.ghost.hover};
        }
      `;
    case 'link':
      return css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary};
        border: none;
        padding: 0;
        height: auto;
        
        &:hover:not(:disabled) {
          text-decoration: underline;
        }
        
        &:active:not(:disabled) {
          color: ${({ theme }) => theme.colors.text.primary};
        }
      `;
    case 'primary':
    default:
      return css`
        background-color: ${({ theme }) => theme.colors.components.button.primary.background};
        color: ${({ theme }) => theme.colors.components.button.primary.text};
        border: none;
        
        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.components.button.primary.hover};
        }
        
        &:active:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.components.button.primary.hover};
          transform: translateY(1px);
        }
      `;
  }
};

export const StyledButton = styled.button<ButtonProps & { $hasIcon: boolean, $fullWidth: boolean, $size: ButtonProps['size'], $variant: ButtonProps['variant'] }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ${({ theme }) => theme.animation.easing.easeInOut};
  outline: none;
  position: relative;
  white-space: nowrap;
  
  ${({ $size }) => getSizeStyles($size)}
  ${({ $variant }) => getVariantStyles($variant)}
  
  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};
  
  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  /* Focus state */
  &:focus-visible {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.background}, 
                0 0 0 4px ${({ theme }) => theme.colors.primary}80;
  }
`;

export const StyledButtonContent = styled.span<{ $iconPosition: IconPositionType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ $iconPosition }) => $iconPosition === 'left' ? 'row' : 'row-reverse'};
`;

export const StyledIcon = styled.span<{ 
  $iconPosition: IconPositionType;
  $isLoading: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-${({ $iconPosition }) => $iconPosition === 'left' ? 'right' : 'left'}: ${({ theme }) => theme.spacing.xs};
  
  ${({ $isLoading }) => $isLoading && css`
    .loading-icon {
      animation: ${rotate} 1.2s infinite linear;
      display: inline-flex;
    }
  `}
`;
