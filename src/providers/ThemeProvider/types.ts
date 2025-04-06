export type ThemeMode = 'light' | 'dark';

export type AccentColor = 'blue' | 'purple' | 'pink' | 'red' | 'orange' | 'green' | 'teal';

export interface Colors {
  // Base colors
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  error: string;
  warning: string;
  success: string;
  info: string;
  
  // Gradients
  gradients: {
    start: string;
    end: string;
  };
  
  // Text colors
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
    link: string;
  };
  
  // Border colors
  border: {
    default: string;
    input: string;
    divider: string;
  };
  
  // Component-specific colors
  components: {
    navbar: string;
    sidebar: string;
    card: string;
    input: {
      background: string;
      placeholder: string;
    };
    button: {
      primary: {
        background: string;
        text: string;
        hover: string;
      };
      secondary: {
        background: string;
        text: string;
        hover: string;
      };
      ghost: {
        background: string;
        text: string;
        hover: string;
      };
    };
  };
}

export interface Spacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface Typography {
  fontFamily: {
    primary: string;
    secondary: string;
    mono: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  fontWeight: {
    light: number;
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

export interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Animation {
  duration: {
    faster: string;
    fast: string;
    normal: string;
    slow: string;
    slower: string;
  };
  easing: {
    easeInOut: string;
    easeOut: string;
    easeIn: string;
    linear: string;
  };
}

export interface BorderRadius {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  round: string;
}

export interface Shadows {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ZIndex {
  dropdown: number;
  sticky: number;
  fixed: number;
  modal: number;
  popover: number;
  tooltip: number;
}

export interface Theme {
  mode: ThemeMode;
  colors: Colors;
  spacing: Spacing;
  typography: Typography;
  breakpoints: Breakpoints;
  animation: Animation;
  borderRadius: BorderRadius;
  shadows: Shadows;
  zIndex: ZIndex;
}
