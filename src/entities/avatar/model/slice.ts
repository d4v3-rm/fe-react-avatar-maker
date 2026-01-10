import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_AVATAR_OPTIONS } from './defaultOptions';
import type { AvatarOptions } from './types';

export type AvatarState = {
  options: AvatarOptions;
};

type UpdateOptionPayload = {
  key: keyof AvatarOptions;
  value: string;
};

const initialState: AvatarState = {
  options: { ...DEFAULT_AVATAR_OPTIONS },
};

const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    updateOption(state, action: PayloadAction<UpdateOptionPayload>) {
      const { key, value } = action.payload;
      state.options[key] = value;
    },
    resetOptions(state) {
      state.options = { ...DEFAULT_AVATAR_OPTIONS };
    },
  },
});

export const { updateOption, resetOptions } = avatarSlice.actions;
export const avatarReducer = avatarSlice.reducer;
