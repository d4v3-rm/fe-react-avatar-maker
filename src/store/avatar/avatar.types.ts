import type { AvatarOptions } from '../../domain/avatar/avatar.types';

export type AvatarState = {
  options: AvatarOptions;
};

export type UpdateAvatarOptionPayload = {
  key: keyof AvatarOptions;
  value: string;
};
