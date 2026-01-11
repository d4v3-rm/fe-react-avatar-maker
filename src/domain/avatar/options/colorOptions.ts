import type { ColorControlConfig, OptionItem } from './options.types';

const SKIN_COLORS: OptionItem[] = [
  { value: 'f2d3b1', labelKey: 'options.colors.light' },
  { value: 'edb98a', labelKey: 'options.colors.lightMedium' },
  { value: 'd08b5b', labelKey: 'options.colors.medium' },
  { value: 'ae5d29', labelKey: 'options.colors.darkMedium' },
  { value: '614335', labelKey: 'options.colors.dark' },
];

const HAIR_COLORS: OptionItem[] = [
  { value: '2c1b18', labelKey: 'options.colors.black' },
  { value: '4a312c', labelKey: 'options.colors.darkBrown' },
  { value: '724133', labelKey: 'options.colors.brown' },
  { value: 'b58143', labelKey: 'options.colors.blonde' },
  { value: 'd6b370', labelKey: 'options.colors.platinum' },
  { value: 'ecdcbf', labelKey: 'options.colors.whiteGray' },
];

const CLOTHE_COLORS: OptionItem[] = [
  { value: '3c4f5c', labelKey: 'options.colors.navyBlue' },
  { value: '65c9ff', labelKey: 'options.colors.skyBlue' },
  { value: '5199e4', labelKey: 'options.colors.blue' },
  { value: 'ff5c5c', labelKey: 'options.colors.red' },
  { value: 'b8e986', labelKey: 'options.colors.lightGreen' },
  { value: 'f8d25c', labelKey: 'options.colors.yellow' },
  { value: 'ffffff', labelKey: 'options.colors.white' },
  { value: '262e33', labelKey: 'options.colors.black' },
];

export const COLOR_CONTROLS: ColorControlConfig[] = [
  { key: 'skinColor', labelKey: 'controls.labels.skinColor', options: SKIN_COLORS },
  { key: 'hairColor', labelKey: 'controls.labels.hairColor', options: HAIR_COLORS },
  { key: 'facialHairColor', labelKey: 'controls.labels.facialHairColor', options: HAIR_COLORS },
  { key: 'clotheColor', labelKey: 'controls.labels.clothesColor', options: CLOTHE_COLORS },
];
