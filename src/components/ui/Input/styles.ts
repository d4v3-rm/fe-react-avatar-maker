import styled, { css } from 'styled-components';
import type { InputSize } from './types';

export const StyledInputWrapper = styled.div<{ $fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

// Get size styles for the input container
const getInputSizeStyles = (size: InputSize) => {
  switch (size) {
    case 'small':
      return css`
        height: 32px;
      `;
    case 'large':
      return css`
        height: 48px;
      `;
    case 'medium':
    default:
      return css`
        height: 40px;
      `;
  }
};

export const StyledInputContainer = styled.div<{
  $size: InputSize;
  $hasError: boolean;
  $disabled: boolean;
}>`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.components.input.background};
  border: 1px solid ${({ theme, $hasError }) => 
    $hasError ? theme.colors.error : theme.colors.border.input};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  width: 100%;
  transition: all 0.2s ${({ theme }) => theme.animation.easing.easeInOut};
  
  ${({ $size }) => getInputSizeStyles($size)}
  
  &:focus-within {
    border-color: ${({ theme, $hasError }) => 
      $hasError ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme, $hasError }) => 
      $hasError ? `${theme.colors.error}33` : `${theme.colors.primary}33`};
  }
  
  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      background-color: ${theme.mode === 'light' ? '#f5f5f5' : '#2d2d2d'};
      border-color: ${theme.colors.border.input};
      cursor: not-allowed;
      opacity: 0.7;
      
      &:focus-within {
        border-color: ${theme.colors.border.input};
        box-shadow: none;
      }
    `}
`;

export const StyledInput = styled.input<{
  $hasPrefix: boolean;
  $hasSuffix: boolean;
}>`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  padding-left: ${({ theme, $hasPrefix }) => $hasPrefix ? '0' : theme.spacing.sm};
  padding-right: ${({ theme, $hasSuffix }) => $hasSuffix ? '0' : theme.spacing.sm};
  outline: none;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.components.input.placeholder};
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`;

export const StyledPrefixIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: ${({ theme }) => theme.spacing.sm};
  padding-right: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const StyledSuffixIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: ${({ theme }) => theme.spacing.xs};
  padding-right: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const StyledError = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.error};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;
