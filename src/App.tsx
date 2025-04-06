import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import NotFoundPage from '@/pages/NotFoundPage';
import AvatarMakerPage from '@/pages/AvatarMakerPage';

// Importa i18n (deve essere importato prima di qualsiasi componente che usa traduzioni)
import '@/i18n';

// Import mock service only in development/mock mode
const isMockMode = import.meta.env.VITE_APP_MOCK_ENABLED === 'true';

const App: React.FC = () => {
  const appTitle = import.meta.env.VITE_APP_TITLE || 'bl-custom-fe-react';
  
  useEffect(() => {
    // Initialize mock API in development mode
    if (isMockMode) {
      import('@/services/mock').then(({ initializeMockApi }) => {
        initializeMockApi();
      });
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <HelmetProvider>
          <Helmet>
            <title>{appTitle}</title>
            <meta name="description" content="A scalable and modular React boilerplate" />
          </Helmet>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<AvatarMakerPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </HelmetProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
