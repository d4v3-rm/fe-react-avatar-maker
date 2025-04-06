import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import { lightTheme, darkTheme, generateThemeWithAccent } from './themes';
import { GlobalStyles } from './GlobalStyles';
import type { ThemeMode, AccentColor, Theme } from './types';

interface ThemeContextProps {
  themeMode: ThemeMode;
  toggleTheme: () => void;
  accentColor: AccentColor;
  setAccentColor: (color: AccentColor) => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Get saved preferences from localStorage or use defaults
  const savedMode = localStorage.getItem('theme-mode') as ThemeMode;
  const savedAccent = localStorage.getItem('accent-color') as AccentColor;

  const [themeMode, setThemeMode] = useState<ThemeMode>(savedMode || 'light');
  const [accentColor, setAccentColor] = useState<AccentColor>(savedAccent || 'blue');

  // Calculate the current theme based on mode and accent color
  const baseTheme = themeMode === 'light' ? lightTheme : darkTheme;
  const theme = generateThemeWithAccent(baseTheme, accentColor);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newMode);
    localStorage.setItem('theme-mode', newMode);
  };

  // Update accent color
  const handleSetAccentColor = (color: AccentColor) => {
    setAccentColor(color);
    localStorage.setItem('accent-color', color);
  };

  // Apply theme mode to the document element for global CSS variables
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
  }, [themeMode]);

  const value = {
    themeMode,
    toggleTheme,
    accentColor,
    setAccentColor: handleSetAccentColor,
    theme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <StyledComponentsProvider theme={theme}>
        <GlobalStyles />
        {children}
      </StyledComponentsProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
