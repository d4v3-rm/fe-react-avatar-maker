import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  HomeContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  FeaturesSection,
  FeaturesList,
  FeatureItem,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  CtaSection
} from './styles';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('app.title')}</title>
        <meta name="description" content={t('app.description')} />
      </Helmet>
      
      <HomeContainer>
        <HeroSection>
          <HeroContent>
            <HeroTitle>{t('home.hero.title')}</HeroTitle>
            <HeroSubtitle>
              {t('home.hero.subtitle')}
            </HeroSubtitle>
            <Button 
              size="large" 
              onClick={() => window.open('https://github.com/5h1ngy/bl-custom-fe-react', '_blank')}
            >
              {t('home.hero.getStarted')}
            </Button>
          </HeroContent>
        </HeroSection>
        
        <FeaturesSection>
          <h2>{t('home.features.title')}</h2>
          <FeaturesList>
            <FeatureItem>
              <Card 
                hoverable 
                shadow="sm"
                title={
                  <FeatureTitle>
                    <FeatureIcon>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </FeatureIcon>
                    Modern Tech Stack
                  </FeatureTitle>
                }
              >
                <FeatureDescription>
                  Built with React, TypeScript, styled-components, Redux Toolkit, and other modern libraries to provide a powerful development experience.
                </FeatureDescription>
              </Card>
            </FeatureItem>
            
            <FeatureItem>
              <Card 
                hoverable 
                shadow="sm"
                title={
                  <FeatureTitle>
                    <FeatureIcon>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="4"></circle>
                        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                        <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
                        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                      </svg>
                    </FeatureIcon>
                    Theming Support
                  </FeatureTitle>
                }
              >
                <FeatureDescription>
                  Comprehensive theming system with light and dark modes, customizable accent colors, and a design inspired by Ant Design principles.
                </FeatureDescription>
              </Card>
            </FeatureItem>
            
            <FeatureItem>
              <Card 
                hoverable 
                shadow="sm"
                title={
                  <FeatureTitle>
                    <FeatureIcon>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                      </svg>
                    </FeatureIcon>
                    Mock API Mode
                  </FeatureTitle>
                }
              >
                <FeatureDescription>
                  Built-in mock API service for development and testing, making it easy to work on the frontend without a backend dependency.
                </FeatureDescription>
              </Card>
            </FeatureItem>
          </FeaturesList>
        </FeaturesSection>
        
        <CtaSection>
          <Card shadow="md">
            <h3>Ready to build your next project?</h3>
            <p>Start with this boilerplate to save time and focus on building great features.</p>
            <Button 
              variant="primary" 
              size="large"
              onClick={() => window.location.href = '/about'}
            >
              Learn More
            </Button>
          </Card>
        </CtaSection>
      </HomeContainer>
    </>
  );
};

export default HomePage;
