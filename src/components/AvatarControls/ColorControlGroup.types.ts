import type { AvatarOptionChangeHandler } from '../../App.types';
import type { AvatarOptions } from '../../domain/avatar/avatar.types';
import type { OptionItem } from '../../domain/avatar/options/options.types';

export type ColorControlGroupProps = {
  labelKey: string;
  optionKey: keyof AvatarOptions;
  options: OptionItem[];
  selectedValue: string;
  onChange: AvatarOptionChangeHandler;
};
