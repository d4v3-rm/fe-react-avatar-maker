import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import avatarReducer from './slices/avatarSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    avatar: avatarReducer,
  },
  devTools: import.meta.env.MODE !== 'prod',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
