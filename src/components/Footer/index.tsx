import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FooterContainer, 
  FooterContent, 
  FooterLogo, 
  FooterLinks,
  FooterLink,
  FooterCopyright,
  FooterSection,
  FooterSectionTitle,
  ColorThemeSection
} from './styles';
import ColorPaletteSelector from '@/components/ui/ColorPaletteSelector';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <Link to="/">bl-custom-fe-react</Link>
          </FooterLogo>
          <p>A scalable and modular React boilerplate with styled-components and modern design principles</p>
        </FooterSection>
        
        <FooterSection>
          <FooterSectionTitle>Links</FooterSectionTitle>
          <FooterLinks>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <ColorThemeSection>
          <FooterSectionTitle>Customize Theme</FooterSectionTitle>
          <ColorPaletteSelector title="Accent Color" />
        </ColorThemeSection>
      </FooterContent>
      
      <FooterCopyright>
        &copy; {currentYear} bl-custom-fe-react. All rights reserved.
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
