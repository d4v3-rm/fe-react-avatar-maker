import styled from 'styled-components';

export const StyledThemeSwitcher = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  display: inline-block;
`;

export const SwitchTrack = styled.div<{ $isDark: boolean }>`
  width: 56px;
  height: 28px;
  background-color: ${({ theme, $isDark }) => 
    $isDark ? '#141414' : '#F8F6F1'};
  border-radius: 14px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  transition: background-color 0.3s;
`;

export const SwitchThumb = styled.div<{ $isDark: boolean }>`
  position: absolute;
  left: ${({ $isDark }) => $isDark ? '30px' : '4px'};
  width: 20px;
  height: 20px;
  background-color: ${({ theme, $isDark }) => 
    $isDark ? '#FFFFFF' : '#FFC53D'};
  border-radius: 50%;
  transition: left 0.3s, background-color 0.3s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const IconContainer = styled.div<{ $position: 'left' | 'right' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, $position }) => 
    $position === 'left' 
      ? '#FFC53D' 
      : theme.mode === 'dark' 
        ? '#FFFFFF' 
        : '#141414'};
  z-index: 1;
`;
