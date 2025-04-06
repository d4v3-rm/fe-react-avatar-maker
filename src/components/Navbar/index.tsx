import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
import ColorPaletteSelector from '@/components/ui/ColorPaletteSelector';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';
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
  const { t } = useTranslation();
  
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
          <Link to="/">{t('app.title')}</Link>
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
            {t('navigation.home')}
          </NavLink>
          <NavLink 
            onClick={closeMobileMenu}
            to="/about" 
            $isActive={location.pathname === '/about'}
          >
            {t('navigation.about')}
          </NavLink>
        </NavLinks>
        
        <NavAction>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </NavAction>
      </NavbarContent>
      
      {mobileMenuOpen && (
        <MobileMenu>
          <ThemeControls>
            <ColorPaletteSelector title={t('theme.chooseAccentColor')} />
            <LanguageSwitcher />
          </ThemeControls>
        </MobileMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
