import type { AvatarOptions } from './domain/avatar/avatar.types';

export type AvatarOptionChangeHandler = (key: keyof AvatarOptions, value: string) => void;
