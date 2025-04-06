import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  AboutContainer, 
  AboutHeader, 
  AboutContent,
  AboutSection,
  TechStackGrid,
  TechItem,
  TechIcon,
  TechName,
  TeamSection,
  TeamGrid,
  TeamMember,
  MemberImage,
  MemberInfo,
  MemberName,
  MemberRole
} from './styles';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Redux Toolkit', icon: '🔄' },
    { name: 'styled-components', icon: '💅' },
    { name: 'React Router', icon: '🔀' },
    { name: 'Vite', icon: '⚡' },
  ];

  const team = [
    {
      name: '5h1ngy',
      role: 'Software Engineer',
      image: '/avatar.png'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('navigation.about')} | {t('app.title')}</title>
        <meta name="description" content="Learn about the Avatar Maker application and its creator" />
      </Helmet>
      
      <AboutContainer>
        <AboutHeader>
          <h1>{t('about.title')}</h1>
          <p>{t('about.subtitle')}</p>
        </AboutHeader>
        
        <AboutContent>
          <AboutSection>
            <h2>{t('about.overview.title')}</h2>
            <Card shadow="sm">
              <p>
                Avatar Maker is an application that allows users to create personalized avatars by customizing various features.
                Created with React, TypeScript, and modern web technologies, it provides a fun and easy way to generate unique avatars.
              </p>
              <p>
                The application supports multiple languages, real-time preview, and the ability to export your creation in various formats (SVG, PNG, JPG).
                You can also share your avatar by copying a URL that contains all your customization choices.
              </p>
            </Card>
          </AboutSection>
          
          <AboutSection>
            <h2>Tech Stack</h2>
            <Card shadow="sm">
              <TechStackGrid>
                {techStack.map((tech, index) => (
                  <TechItem key={index}>
                    <TechIcon>{tech.icon}</TechIcon>
                    <TechName>{tech.name}</TechName>
                  </TechItem>
                ))}
              </TechStackGrid>
            </Card>
          </AboutSection>
          
          <TeamSection>
            <h2>{t('about.team.title')}</h2>
            <TeamGrid>
              {team.map((member, index) => (
                <TeamMember key={index}>
                  <Card hoverable shadow="sm">
                    <MemberImage src={member.image} alt={member.name} />
                    <MemberInfo>
                      <MemberName>{member.name}</MemberName>
                      <MemberRole>{member.role}</MemberRole>
                    </MemberInfo>
                  </Card>
                </TeamMember>
              ))}
            </TeamGrid>
          </TeamSection>
          
          <AboutSection>
            <h2>{t('about.getStarted.title')}</h2>
            <Card shadow="sm">
              <p>
                Ready to create your own avatar? Go to the home page and start customizing your avatar with various options.
                Once you're satisfied with your creation, you can download it or share it with others.
              </p>
              <Button 
                variant="primary" 
                onClick={() => window.location.href = '/'}
              >
                {t('about.getStarted.backToHome')}
              </Button>
            </Card>
          </AboutSection>
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default AboutPage;
