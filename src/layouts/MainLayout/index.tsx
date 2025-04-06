import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  LayoutContainer, 
  MainContent,
  ContentWrapper
} from './styles';

const MainLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Navbar />
      <MainContent>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default MainLayout;
