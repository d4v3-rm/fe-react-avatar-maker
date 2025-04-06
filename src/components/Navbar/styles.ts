import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.components.navbar};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  transition: background-color 0.3s ease;
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

export const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
  
  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }  
  }
`;

export const NavLinks = styled.div<{ $mobileMenuOpen: boolean }>`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ $mobileMenuOpen }) => $mobileMenuOpen ? 'flex' : 'none'};
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.components.navbar};
    flex-direction: column;
    align-items: flex-start;
    padding: ${({ theme }) => theme.spacing.md};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

export const NavLink = styled(Link) <{ $isActive: boolean }>`
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.accent : theme.colors.text.primary};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-weight: ${({ $isActive, theme }) =>
    $isActive ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.medium};
  position: relative;
  transition: color 0.2s;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
  }
  
  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      &::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: ${theme.spacing.md};
        right: ${theme.spacing.md};
        height: 2px;
        background-color: ${theme.colors.accent};
      }
    `
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.sm} 0;
    width: 100%;
    
    ${({ $isActive, theme }) =>
    $isActive &&
    css`
        &::after {
          left: 0;
          right: 0;
          bottom: 0;
        }
      `
  }
  }
`;

export const NavAction = styled.div`
  display: flex;
  align-items: center;
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.components.navbar};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export const ThemeControls = styled.div`
  padding-top: ${({ theme }) => theme.spacing.sm};
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
`;
