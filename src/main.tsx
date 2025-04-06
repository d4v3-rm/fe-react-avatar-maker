import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { store } from '@/store';
import { ThemeProvider } from '@/providers/ThemeProvider';

// Initialize mock API if enabled
if (import.meta.env.VITE_APP_MOCK_ENABLED === 'true') {
  import('@/services/mock').then(({ initializeMockApi }) => {
    initializeMockApi();
    console.info('🔶 Mock API initialized');
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <HelmetProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </HelmetProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
