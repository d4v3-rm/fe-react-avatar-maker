import styled, { css } from 'styled-components';
import { CardShadow } from './types';

export const StyledCard = styled.div<{
  $hoverable: boolean;
  $bordered: boolean;
  $shadow: CardShadow;
}>`
  background-color: ${({ theme }) => theme.colors.components.card};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  
  ${({ $bordered, theme }) => $bordered && css`
    border: 1px solid ${theme.colors.border.default};
  `}
  
  ${({ $shadow, theme }) => {
    switch ($shadow) {
      case 'sm':
        return css`box-shadow: ${theme.shadows.sm};`;
      case 'md':
        return css`box-shadow: ${theme.shadows.md};`;
      case 'lg':
        return css`box-shadow: ${theme.shadows.lg};`;
      case 'none':
      default:
        return css``;
    }
  }}
  
  ${({ $hoverable }) => $hoverable && css`
    transition: transform 0.3s, box-shadow 0.3s;
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${({ theme }) => theme.shadows.md};
    }
  `}
`;

export const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
`;

export const StyledCardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin: 0;
`;

export const StyledCardExtra = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;

export const StyledCardFooter = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
`;
