import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
import ColorPaletteSelector from '@/components/ui/ColorPaletteSelector';
import { 
  NavbarContainer, 
  NavbarContent, 
  Logo, 
  NavLinks, 
  NavLink,
  NavAction,
  MobileMenuButton,
  MobileMenu,
  ThemeControls
} from './styles';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo>
          <Link to="/">bl-custom-fe-react</Link>
        </Logo>
        
        <MobileMenuButton onClick={toggleMobileMenu} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </MobileMenuButton>
        
        <NavLinks $mobileMenuOpen={mobileMenuOpen}>
          <NavLink 
            onClick={closeMobileMenu}
            to="/" 
            $isActive={location.pathname === '/'}
          >
            Home
          </NavLink>
          <NavLink 
            onClick={closeMobileMenu}
            to="/about" 
            $isActive={location.pathname === '/about'}
          >
            About
          </NavLink>
        </NavLinks>
        
        <NavAction>
          <ThemeSwitcher />
        </NavAction>
      </NavbarContent>
      
      {mobileMenuOpen && (
        <MobileMenu>
          <ThemeControls>
            <ColorPaletteSelector title="Choose accent color" />
          </ThemeControls>
        </MobileMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
