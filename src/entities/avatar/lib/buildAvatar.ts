import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';
import type { Options as AvataaarsOptions } from '@dicebear/avataaars';
import type { AvatarOptions } from '../model/types';

export function buildAvatarSvg(options: AvatarOptions): string {
  const top =
    options.topType === 'Blank'
      ? undefined
      : ([options.topType] as NonNullable<AvataaarsOptions['top']>);

  const facialHair =
    options.facialHairType === 'Blank'
      ? undefined
      : ([options.facialHairType] as NonNullable<AvataaarsOptions['facialHair']>);

  const clothing =
    options.clotheType === 'Blank'
      ? undefined
      : ([options.clotheType] as NonNullable<AvataaarsOptions['clothing']>);

  const accessories =
    options.accessoriesType === 'Blank'
      ? undefined
      : ([options.accessoriesType] as NonNullable<AvataaarsOptions['accessories']>);

  const avatar = createAvatar(avataaars, {
    seed: 'avatar-maker',
    skinColor: [options.skinColor],
    hairColor: [options.hairColor],
    facialHair,
    facialHairColor: [options.facialHairColor],
    facialHairProbability: options.facialHairType === 'Blank' ? 0 : 100,
    top,
    topProbability: options.topType === 'Blank' ? 0 : 100,
    clothing,
    clothesColor: [options.clotheColor],
    eyes: [options.eyeType] as NonNullable<AvataaarsOptions['eyes']>,
    eyebrows: [options.eyebrowType] as NonNullable<AvataaarsOptions['eyebrows']>,
    mouth: [options.mouthType] as NonNullable<AvataaarsOptions['mouth']>,
    accessories,
    accessoriesProbability: options.accessoriesType === 'Blank' ? 0 : 100,
  });

  return avatar.toString();
}
