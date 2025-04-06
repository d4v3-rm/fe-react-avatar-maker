import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import Avatar from '@/components/Avatar/Avatar';
import AvatarCustomizer from '@/components/Avatar/AvatarCustomizer';
import AvatarExporter from '@/components/Avatar/AvatarExporter';

const PageContainer = styled.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 576px) {
    padding: 1rem 0.5rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }
`;

const PageDescription = styled.p`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 576px) {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
`;

const AvatarMakerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
  
  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

const PreviewSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AvatarPreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.components.card};
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 992px) {
    margin: 0 auto 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 1rem;
    max-width: 280px;
  }
`;

const CustomizationSection = styled.div`
  background-color: ${({ theme }) => theme.colors.components.card};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: 70vh;
  
  @media (max-width: 992px) {
    max-height: none;
  }
  
  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`;

const AvatarMakerPage: React.FC = () => {
  return (
    <PageContainer>
      <Helmet>
        <title>Avatar Maker - Create Your Custom Avatar</title>
        <meta name="description" content="Create your own personalized avatar with our easy-to-use avatar maker tool." />
      </Helmet>

      <PageTitle>Avatar Maker</PageTitle>
      <PageDescription>
        Create your own personalized avatar by customizing various features like hairstyle, clothes, 
        accessories, and more. Preview in real-time and download your creation in multiple formats.
      </PageDescription>

      <AvatarMakerContainer>
        <PreviewSection>
          <SectionTitle>Preview</SectionTitle>
          <AvatarPreviewContainer>
            <Avatar size={300} />
          </AvatarPreviewContainer>
          <AvatarExporter />
        </PreviewSection>

        <CustomizationSection>
          <SectionTitle>Customize Your Avatar</SectionTitle>
          <AvatarCustomizer />
        </CustomizationSection>
      </AvatarMakerContainer>
    </PageContainer>
  );
};

export default AvatarMakerPage;
