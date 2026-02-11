import type { AvatarOptions } from '../avatar.types';

export type OptionItem = {
  value: string;
  labelKey: string;
};

export type ColorControlConfig = {
  key: keyof AvatarOptions;
  labelKey: string;
  options: OptionItem[];
};

export type SelectControlConfig = {
  key: keyof AvatarOptions;
  labelKey: string;
  options: OptionItem[];
};
