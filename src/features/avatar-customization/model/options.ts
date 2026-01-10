import type { AvatarOptions, OptionItem } from '../../../entities/avatar';

type SelectControl = {
  key: keyof AvatarOptions;
  label: string;
  options: OptionItem[];
};

type ColorControl = {
  key: keyof AvatarOptions;
  label: string;
  options: OptionItem[];
};

const SKIN_COLORS: OptionItem[] = [
  { value: 'f2d3b1', label: 'Light' },
  { value: 'edb98a', label: 'Light Medium' },
  { value: 'd08b5b', label: 'Medium' },
  { value: 'ae5d29', label: 'Dark Medium' },
  { value: '614335', label: 'Dark' },
];

const HAIR_COLORS: OptionItem[] = [
  { value: '2c1b18', label: 'Black' },
  { value: '4a312c', label: 'Dark Brown' },
  { value: '724133', label: 'Brown' },
  { value: 'b58143', label: 'Blonde' },
  { value: 'd6b370', label: 'Platinum' },
  { value: 'ecdcbf', label: 'White/Gray' },
];

const CLOTHE_COLORS: OptionItem[] = [
  { value: '3c4f5c', label: 'Navy Blue' },
  { value: '65c9ff', label: 'Sky Blue' },
  { value: '5199e4', label: 'Blue' },
  { value: 'ff5c5c', label: 'Red' },
  { value: 'b8e986', label: 'Light Green' },
  { value: 'f8d25c', label: 'Yellow' },
  { value: 'ffffff', label: 'White' },
  { value: '262e33', label: 'Black' },
];

const TOP_TYPES: OptionItem[] = [
  { value: 'shortWaved', label: 'Short Waved' },
  { value: 'longButNotTooLong', label: 'Long' },
  { value: 'curly', label: 'Curly' },
  { value: 'bob', label: 'Bob' },
  { value: 'bun', label: 'Bun' },
  { value: 'theCaesar', label: 'Caesar' },
  { value: 'hat', label: 'Hat' },
  { value: 'hijab', label: 'Hijab' },
  { value: 'turban', label: 'Turban' },
  { value: 'Blank', label: 'None' },
];

const FACIAL_HAIR_TYPES: OptionItem[] = [
  { value: 'Blank', label: 'None' },
  { value: 'beardLight', label: 'Beard Light' },
  { value: 'beardMedium', label: 'Beard Medium' },
  { value: 'moustacheFancy', label: 'Moustache' },
];

const CLOTHE_TYPES: OptionItem[] = [
  { value: 'shirtCrewNeck', label: 'Shirt Crew Neck' },
  { value: 'shirtVNeck', label: 'Shirt V Neck' },
  { value: 'hoodie', label: 'Hoodie' },
  { value: 'overall', label: 'Overall' },
  { value: 'blazerAndShirt', label: 'Blazer and Shirt' },
  { value: 'Blank', label: 'None' },
];

const EYE_TYPES: OptionItem[] = [
  { value: 'default', label: 'Default' },
  { value: 'happy', label: 'Happy' },
  { value: 'wink', label: 'Wink' },
  { value: 'surprised', label: 'Surprised' },
  { value: 'eyeRoll', label: 'Eye Roll' },
  { value: 'xDizzy', label: 'Dizzy' },
];

const EYEBROW_TYPES: OptionItem[] = [
  { value: 'default', label: 'Default' },
  { value: 'raisedExcited', label: 'Raised' },
  { value: 'sadConcerned', label: 'Sad' },
  { value: 'angry', label: 'Angry' },
  { value: 'upDown', label: 'Up Down' },
  { value: 'Blank', label: 'None' },
];

const MOUTH_TYPES: OptionItem[] = [
  { value: 'smile', label: 'Smile' },
  { value: 'default', label: 'Default' },
  { value: 'serious', label: 'Serious' },
  { value: 'twinkle', label: 'Twinkle' },
  { value: 'tongue', label: 'Tongue' },
  { value: 'sad', label: 'Sad' },
];

const ACCESSORIES_TYPES: OptionItem[] = [
  { value: 'Blank', label: 'None' },
  { value: 'round', label: 'Round Glasses' },
  { value: 'sunglasses', label: 'Sunglasses' },
  { value: 'wayfarers', label: 'Wayfarers' },
  { value: 'eyepatch', label: 'Eyepatch' },
];

export const COLOR_CONTROLS: ColorControl[] = [
  { key: 'skinColor', label: 'Skin Color', options: SKIN_COLORS },
  { key: 'hairColor', label: 'Hair Color', options: HAIR_COLORS },
  { key: 'facialHairColor', label: 'Facial Hair Color', options: HAIR_COLORS },
  { key: 'clotheColor', label: 'Clothes Color', options: CLOTHE_COLORS },
];

export const SELECT_CONTROLS: SelectControl[] = [
  { key: 'topType', label: 'Hair Style', options: TOP_TYPES },
  { key: 'facialHairType', label: 'Facial Hair', options: FACIAL_HAIR_TYPES },
  { key: 'eyeType', label: 'Eyes', options: EYE_TYPES },
  { key: 'eyebrowType', label: 'Eyebrows', options: EYEBROW_TYPES },
  { key: 'mouthType', label: 'Mouth', options: MOUTH_TYPES },
  { key: 'clotheType', label: 'Clothes', options: CLOTHE_TYPES },
  { key: 'accessoriesType', label: 'Accessories', options: ACCESSORIES_TYPES },
];
