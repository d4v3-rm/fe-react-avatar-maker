import type { AvatarState } from './slice';

type AvatarStoreSchema = {
  avatar: AvatarState;
};

export const selectAvatarOptions = (state: AvatarStoreSchema) => state.avatar.options;
