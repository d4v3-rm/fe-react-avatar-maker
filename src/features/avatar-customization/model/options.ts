import type { AvatarOptions, OptionItem } from '../../../entities/avatar';

type SelectControl = {
  key: keyof AvatarOptions;
  labelKey: string;
  options: OptionItem[];
};

type ColorControl = {
  key: keyof AvatarOptions;
  labelKey: string;
  options: OptionItem[];
};

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

const TOP_TYPES: OptionItem[] = [
  { value: 'shortWaved', labelKey: 'options.top.shortWaved' },
  { value: 'longButNotTooLong', labelKey: 'options.top.longButNotTooLong' },
  { value: 'curly', labelKey: 'options.top.curly' },
  { value: 'bob', labelKey: 'options.top.bob' },
  { value: 'bun', labelKey: 'options.top.bun' },
  { value: 'theCaesar', labelKey: 'options.top.theCaesar' },
  { value: 'hat', labelKey: 'options.top.hat' },
  { value: 'hijab', labelKey: 'options.top.hijab' },
  { value: 'turban', labelKey: 'options.top.turban' },
  { value: 'Blank', labelKey: 'options.common.none' },
];

const FACIAL_HAIR_TYPES: OptionItem[] = [
  { value: 'Blank', labelKey: 'options.common.none' },
  { value: 'beardLight', labelKey: 'options.facialHair.beardLight' },
  { value: 'beardMedium', labelKey: 'options.facialHair.beardMedium' },
  { value: 'moustacheFancy', labelKey: 'options.facialHair.moustacheFancy' },
];

const CLOTHE_TYPES: OptionItem[] = [
  { value: 'shirtCrewNeck', labelKey: 'options.clothes.shirtCrewNeck' },
  { value: 'shirtVNeck', labelKey: 'options.clothes.shirtVNeck' },
  { value: 'hoodie', labelKey: 'options.clothes.hoodie' },
  { value: 'overall', labelKey: 'options.clothes.overall' },
  { value: 'blazerAndShirt', labelKey: 'options.clothes.blazerAndShirt' },
  { value: 'Blank', labelKey: 'options.common.none' },
];

const EYE_TYPES: OptionItem[] = [
  { value: 'default', labelKey: 'options.eyes.default' },
  { value: 'happy', labelKey: 'options.eyes.happy' },
  { value: 'wink', labelKey: 'options.eyes.wink' },
  { value: 'surprised', labelKey: 'options.eyes.surprised' },
  { value: 'eyeRoll', labelKey: 'options.eyes.eyeRoll' },
  { value: 'xDizzy', labelKey: 'options.eyes.xDizzy' },
];

const EYEBROW_TYPES: OptionItem[] = [
  { value: 'default', labelKey: 'options.eyebrows.default' },
  { value: 'raisedExcited', labelKey: 'options.eyebrows.raisedExcited' },
  { value: 'sadConcerned', labelKey: 'options.eyebrows.sadConcerned' },
  { value: 'angry', labelKey: 'options.eyebrows.angry' },
  { value: 'upDown', labelKey: 'options.eyebrows.upDown' },
  { value: 'Blank', labelKey: 'options.common.none' },
];

const MOUTH_TYPES: OptionItem[] = [
  { value: 'smile', labelKey: 'options.mouth.smile' },
  { value: 'default', labelKey: 'options.mouth.default' },
  { value: 'serious', labelKey: 'options.mouth.serious' },
  { value: 'twinkle', labelKey: 'options.mouth.twinkle' },
  { value: 'tongue', labelKey: 'options.mouth.tongue' },
  { value: 'sad', labelKey: 'options.mouth.sad' },
];

const ACCESSORIES_TYPES: OptionItem[] = [
  { value: 'Blank', labelKey: 'options.common.none' },
  { value: 'round', labelKey: 'options.accessories.round' },
  { value: 'sunglasses', labelKey: 'options.accessories.sunglasses' },
  { value: 'wayfarers', labelKey: 'options.accessories.wayfarers' },
  { value: 'eyepatch', labelKey: 'options.accessories.eyepatch' },
];

export const COLOR_CONTROLS: ColorControl[] = [
  { key: 'skinColor', labelKey: 'controls.labels.skinColor', options: SKIN_COLORS },
  { key: 'hairColor', labelKey: 'controls.labels.hairColor', options: HAIR_COLORS },
  {
    key: 'facialHairColor',
    labelKey: 'controls.labels.facialHairColor',
    options: HAIR_COLORS,
  },
  { key: 'clotheColor', labelKey: 'controls.labels.clothesColor', options: CLOTHE_COLORS },
];

export const SELECT_CONTROLS: SelectControl[] = [
  { key: 'topType', labelKey: 'controls.labels.hairStyle', options: TOP_TYPES },
  { key: 'facialHairType', labelKey: 'controls.labels.facialHair', options: FACIAL_HAIR_TYPES },
  { key: 'eyeType', labelKey: 'controls.labels.eyes', options: EYE_TYPES },
  { key: 'eyebrowType', labelKey: 'controls.labels.eyebrows', options: EYEBROW_TYPES },
  { key: 'mouthType', labelKey: 'controls.labels.mouth', options: MOUTH_TYPES },
  { key: 'clotheType', labelKey: 'controls.labels.clothes', options: CLOTHE_TYPES },
  { key: 'accessoriesType', labelKey: 'controls.labels.accessories', options: ACCESSORIES_TYPES },
];
