import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import type { ThemeMode, AccentColor } from '@/providers/ThemeProvider/types';

interface ThemeState {
  mode: ThemeMode;
  accentColor: AccentColor;
  isPanelOpen: boolean;
}

// Get saved preferences from localStorage or use defaults
const getSavedThemeMode = (): ThemeMode => {
  const savedMode = localStorage.getItem('theme-mode') as ThemeMode;
  return savedMode || 'light';
};

const getSavedAccentColor = (): AccentColor => {
  const savedAccent = localStorage.getItem('accent-color') as AccentColor;
  return savedAccent || 'blue';
};

const initialState: ThemeState = {
  mode: getSavedThemeMode(),
  accentColor: getSavedAccentColor(),
  isPanelOpen: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
      localStorage.setItem('theme-mode', action.payload);
    },
    toggleThemeMode: (state) => {
      const newMode = state.mode === 'light' ? 'dark' : 'light';
      state.mode = newMode;
      localStorage.setItem('theme-mode', newMode);
    },
    setAccentColor: (state, action: PayloadAction<AccentColor>) => {
      state.accentColor = action.payload;
      localStorage.setItem('accent-color', action.payload);
    },
    toggleThemePanel: (state) => {
      state.isPanelOpen = !state.isPanelOpen;
    },
  },
});

export const { setThemeMode, toggleThemeMode, setAccentColor, toggleThemePanel } = themeSlice.actions;

// Selectors
export const selectThemeMode = (state: RootState) => state.theme.mode;
export const selectAccentColor = (state: RootState) => state.theme.accentColor;
export const selectIsPanelOpen = (state: RootState) => state.theme.isPanelOpen;

export default themeSlice.reducer;
