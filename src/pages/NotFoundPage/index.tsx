import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { 
  NotFoundContainer, 
  NotFoundContent,
  NotFoundTitle,
  NotFoundDescription,
  NotFoundActions
} from './styles';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Helmet>
        <title>Page Not Found | bl-custom-fe-react</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>
      
      <NotFoundContainer>
        <NotFoundContent>
          <NotFoundTitle>404</NotFoundTitle>
          <NotFoundDescription>
            Oops! The page you are looking for does not exist.
          </NotFoundDescription>
          <NotFoundActions>
            <Button 
              variant="primary" 
              size="large" 
              onClick={() => navigate('/')}
            >
              Go Home
            </Button>
            <Button 
              variant="secondary" 
              size="large" 
              onClick={() => navigate(-1)}
            >
              Go Back
            </Button>
          </NotFoundActions>
        </NotFoundContent>
      </NotFoundContainer>
    </>
  );
};

export default NotFoundPage;
