import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

// Define types for all the avataaars options
export type AvatarOptions = {
  // Basic options
  skinColor: string;
  hairColor: string;
  facialHairType: string;
  facialHairColor: string;
  topType: string;
  clotheType: string;
  clotheColor: string;
  eyeType: string;
  eyebrowType: string;
  mouthType: string;
  accessoriesType: string;
};

export interface AvatarState {
  options: AvatarOptions;
}

// Default avatar options
const initialState: AvatarState = {
  options: {
    skinColor: 'f2d3b1',
    hairColor: '2c1b18',
    facialHairType: 'Blank',
    facialHairColor: '2c1b18',
    topType: 'ShortHairShortWaved',
    clotheType: 'ShirtCrewNeck',
    clotheColor: '3c4f5c',
    eyeType: 'Default',
    eyebrowType: 'Default',
    mouthType: 'Default',
    accessoriesType: 'Blank',
  },
};

export const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    updateAvatarOption: (
      state,
      action: PayloadAction<{ option: keyof AvatarOptions; value: string }>
    ) => {
      const { option, value } = action.payload;
      state.options[option] = value;
    },
    resetAvatar: (state) => {
      // Deep copy dell'oggetto initialState per evitare riferimenti condivisi
      state.options = JSON.parse(JSON.stringify(initialState.options));
    },
  },
});

export const { updateAvatarOption, resetAvatar } = avatarSlice.actions;

// Selectors
export const selectAvatarOptions = (state: RootState) => state.avatar.options;

export default avatarSlice.reducer;
