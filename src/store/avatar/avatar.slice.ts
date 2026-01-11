import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_AVATAR_OPTIONS } from '../../domain/avatar/avatarDefaults';
import type { AvatarState, UpdateAvatarOptionPayload } from './avatar.types';

const initialState: AvatarState = {
  options: { ...DEFAULT_AVATAR_OPTIONS },
};

const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    updateAvatarOption(state, action: PayloadAction<UpdateAvatarOptionPayload>) {
      const { key, value } = action.payload;
      state.options[key] = value;
    },
    resetAvatarOptions(state) {
      state.options = { ...DEFAULT_AVATAR_OPTIONS };
    },
  },
});

export const { updateAvatarOption, resetAvatarOptions } = avatarSlice.actions;
export const avatarReducer = avatarSlice.reducer;
