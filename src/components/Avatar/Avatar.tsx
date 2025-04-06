import React from 'react';
import styled from 'styled-components';
import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';
import { useSelector } from 'react-redux';
import { selectAvatarOptions } from '@/store/slices/avatarSlice';

interface AvatarProps {
  size?: number;
  className?: string;
}

const StyledAvatar = styled.div<{ size: number }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin: 0 auto;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Avatar: React.FC<AvatarProps> = ({ size = 200, className }) => {
  const options = useSelector(selectAvatarOptions);

  // Generate avatar SVG
  const avatar = createAvatar(avataaars, {
    seed: 'avatar',
    // Map options to avataaars options (with proper types for the library)
    skinColor: [options.skinColor],
    hairColor: [options.hairColor],
    facialHair: [options.facialHairType] as any,
    facialHairProbability: 100,
    facialHairColor: [options.facialHairColor],
    top: [options.topType] as any,
    topProbability: 100,
    clothing: [options.clotheType] as any,
    clothesColor: [options.clotheColor],
    eyes: [options.eyeType] as any,
    eyebrows: [options.eyebrowType] as any,
    mouth: [options.mouthType] as any,
    accessories: [options.accessoriesType] as any,
    accessoriesProbability: 100,
  });

  const svgString = avatar.toString();

  return (
    <StyledAvatar
      size={size}
      className={className}
      dangerouslySetInnerHTML={{ __html: svgString }}
    />
  );
};

export default Avatar;
