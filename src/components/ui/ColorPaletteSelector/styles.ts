import styled from 'styled-components';

export const StyledColorPaletteSelector = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const SelectorTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const ColorOption = styled.button<{ selected: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  border: 2px solid ${({ theme, selected }) => 
    selected ? theme.colors.primary : 'transparent'};
  background: transparent;
  padding: 2px;
  margin-right: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
  }
`;

export const ColorSwatch = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;
