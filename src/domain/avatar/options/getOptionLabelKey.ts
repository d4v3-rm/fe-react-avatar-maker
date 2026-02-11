import type { AvatarOptions } from '../avatar.types';
import { COLOR_CONTROLS } from './colorOptions';
import { SELECT_CONTROLS } from './selectOptions';

export function getOptionLabelKey(
  optionKey: keyof AvatarOptions,
  optionValue: string,
): string | null {
  const controls = [...COLOR_CONTROLS, ...SELECT_CONTROLS];
  const control = controls.find((item) => item.key === optionKey);

  if (!control) {
    return null;
  }

  const option = control.options.find((item) => item.value === optionValue);
  return option?.labelKey ?? null;
}
