import type { Theme, ThemeMode, AccentColor, Colors } from './types';

// Base theme configuration shared between light and dark themes
const baseTheme = {
  spacing: {
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    xxl: '3rem',    // 48px
  },
  typography: {
    fontFamily: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      secondary: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      mono: "'Fira Code', 'Roboto Mono', Menlo, Monaco, Consolas, monospace",
    },
    fontSize: {
      xs: '0.75rem',   // 12px
      sm: '0.875rem',  // 14px
      md: '1rem',      // 16px
      lg: '1.125rem',  // 18px
      xl: '1.25rem',   // 20px
      xxl: '1.5rem',   // 24px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      xs: 1.25,
      sm: 1.375,
      md: 1.5,
      lg: 1.625,
      xl: 1.75,
    },
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  animation: {
    duration: {
      faster: '100ms',
      fast: '200ms',
      normal: '300ms',
      slow: '400ms',
      slower: '500ms',
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      linear: 'linear',
    },
  },
  borderRadius: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    round: '50%',
  },
  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
};

// Accent color palette options
const accentColors = {
  blue: '#1677ff',
  purple: '#722ED1',
  pink: '#EB2F96',
  red: '#F5222D',
  orange: '#FA8C16',
  green: '#52C41A',
  teal: '#13C2C2',
};

// Light theme (cream-based soft tones)
export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    primary: '#1677ff',
    secondary: '#6c757d',
    accent: accentColors.blue,
    background: '#F8F6F1', // Cream-based light background
    surface: '#FFFDF7', // Soft panna white
    error: '#F5222D',
    warning: '#FAAD14',
    success: '#52C41A',
    info: '#1677ff',
    
    gradients: {
      start: '#1677ff',
      end: '#4096ff',
    },
    
    text: {
      primary: '#262626',
      secondary: '#595959',
      disabled: '#BFBFBF',
      hint: '#8C8C8C',
      link: '#1677ff',
    },
    
    border: {
      default: '#E8E8E8',
      input: '#D9D9D9',
      divider: '#F0F0F0',
    },
    
    components: {
      navbar: '#FFFFFF',
      sidebar: '#F8F6F1',
      card: '#FFFFFF',
      input: {
        background: '#FFFFFF',
        placeholder: '#BFBFBF',
      },
      button: {
        primary: {
          background: '#1677ff',
          text: '#FFFFFF',
          hover: '#4096ff',
        },
        secondary: {
          background: '#F0F0F0',
          text: '#262626',
          hover: '#D9D9D9',
        },
        ghost: {
          background: 'transparent',
          text: '#262626',
          hover: 'rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
  ...baseTheme,
};

// Dark theme (very dark tones)
export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    primary: '#1677ff',
    secondary: '#6c757d',
    accent: accentColors.blue,
    background: '#121212', // Very dark background
    surface: '#1E1E1E', // Dark surface
    error: '#FF4D4F',
    warning: '#FAAD14',
    success: '#52C41A',
    info: '#1677ff',
    
    gradients: {
      start: '#1677ff',
      end: '#4096ff',
    },
    
    text: {
      primary: '#FFFFFF',
      secondary: '#D9D9D9',
      disabled: '#595959',
      hint: '#8C8C8C',
      link: '#4096ff',
    },
    
    border: {
      default: '#303030',
      input: '#434343',
      divider: '#303030',
    },
    
    components: {
      navbar: '#141414',
      sidebar: '#141414',
      card: '#1F1F1F',
      input: {
        background: '#141414',
        placeholder: '#595959',
      },
      button: {
        primary: {
          background: '#1677ff',
          text: '#FFFFFF',
          hover: '#4096ff',
        },
        secondary: {
          background: '#141414',
          text: '#FFFFFF',
          hover: '#303030',
        },
        ghost: {
          background: 'transparent',
          text: '#FFFFFF',
          hover: 'rgba(255, 255, 255, 0.08)',
        },
      },
    },
  },
  ...baseTheme,
};

// Function to generate a theme with a specific accent color
export const generateThemeWithAccent = (theme: Theme, accentColor: AccentColor): Theme => {
  const newColors: Colors = {
    ...theme.colors,
    accent: accentColors[accentColor],
    primary: accentColors[accentColor],
    text: {
      ...theme.colors.text,
      link: theme.mode === 'light' ? accentColors[accentColor] : lightenColor(accentColors[accentColor], 20),
    },
    components: {
      ...theme.colors.components,
      button: {
        ...theme.colors.components.button,
        primary: {
          ...theme.colors.components.button.primary,
          background: accentColors[accentColor],
          hover: lightenColor(accentColors[accentColor], theme.mode === 'light' ? 10 : -10),
        },
      },
    },
  };

  return {
    ...theme,
    colors: newColors,
  };
};

// Helper function to lighten or darken a color
function lightenColor(hex: string, percent: number): string {
  // Convert hex to RGB
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  // Lighten or darken
  r = Math.min(255, Math.max(0, r + percent * 2.55));
  g = Math.min(255, Math.max(0, g + percent * 2.55));
  b = Math.min(255, Math.max(0, b + percent * 2.55));

  // Convert back to hex
  return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
}
