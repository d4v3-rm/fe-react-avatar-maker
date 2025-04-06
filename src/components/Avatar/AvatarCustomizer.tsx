import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectAvatarOptions, updateAvatarOption, resetAvatar } from '@/store/slices/avatarSlice';
import {
  SKIN_COLORS,
  HAIR_COLORS,
  TOP_TYPES,
  FACIAL_HAIR_TYPES,
  CLOTHE_TYPES,
  CLOTHE_COLORS,
  EYE_TYPES,
  EYEBROW_TYPES,
  MOUTH_TYPES,
  ACCESSORIES_TYPES
} from './constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SelectWrapper = styled.div`
  width: 100%;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.components.card};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover, &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    outline: none;
  }
`;

const ColorOptionGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const ColorOption = styled.button<{ color: string; isSelected: boolean }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #${props => props.color};
  cursor: pointer;
  border: 3px solid ${props => props.isSelected ? props.theme.colors.accent : 'transparent'};
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: scale(1.1);
  }
`;

const ResetButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  margin-top: 1rem;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const AvatarCustomizer: React.FC = () => {
  const dispatch = useDispatch();
  const options = useSelector(selectAvatarOptions);
  const { t } = useTranslation();

  const handleOptionChange = (option: string, value: string) => {
    dispatch(updateAvatarOption({ option: option as any, value }));
  };

  const handleReset = () => {
    dispatch(resetAvatar());
  };

  const renderColorOptions = (
    optionType: string,
    options: Array<{ value: string; label: string }>,
    currentValue: string
  ) => (
    <ColorOptionGroup>
      {options.map(option => (
        <ColorOption
          key={option.value}
          color={option.value}
          isSelected={currentValue === option.value}
          onClick={() => handleOptionChange(optionType, option.value)}
          title={option.label}
        />
      ))}
    </ColorOptionGroup>
  );

  const renderSelectOptions = (
    optionType: string,
    options: Array<{ value: string; label: string }>,
    currentValue: string
  ) => (
    <SelectWrapper>
      <StyledSelect
        value={currentValue}
        onChange={(e) => handleOptionChange(optionType, e.target.value)}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );

  return (
    <Container>
      <OptionGroup>
        <CategoryTitle>{t('avatarOptions.skinColor')}</CategoryTitle>
        {renderColorOptions('skinColor', SKIN_COLORS, options.skinColor)}
      </OptionGroup>

      <OptionGroup>
        <CategoryTitle>{t('avatarOptions.hairStyle')}</CategoryTitle>
        {renderSelectOptions('topType', TOP_TYPES, options.topType)}
      </OptionGroup>

      <OptionGroup>
        <CategoryTitle>{t('avatarOptions.hairColor')}</CategoryTitle>
        {renderColorOptions('hairColor', HAIR_COLORS, options.hairColor)}
      </OptionGroup>

      <OptionGroup>
        <CategoryTitle>{t('avatarOptions.facialHair')}</CategoryTitle>
        {renderSelectOptions('facialHairType', FACIAL_HAIR_TYPES, options.facialHairType)}
      </OptionGroup>

      <OptionGroup>
        <CategoryTitle>{t('avatarOptions.facialHairColor')}</CategoryTitle>
        {renderColorOptions('facialHairColor', HAIR_COLORS, options.facialHairColor)}
      </OptionGroup>

      <OptionGroup>
        <CategoryTitle>{t('avatarOptions.eyes')}</CategoryTitle>
        {renderSelectOptions('eyeType', EYE_TYPES, options.eyeType)}
      </OptionGroup>

      <OptionGroup>
        <CategoryTitle>{t('avatarOptions.eyebrows')}</CategoryTitle>
        {renderSelectOptions('eyebrowType', EYEBROW_TYPES, options.eyebrowType)}
      </OptionGroup>

      <OptionGroup>
        <CategoryTitle>{t('avatarOptions.mouth')}</CategoryTitle>
        {renderSelectOptions('mouthType', MOUTH_TYPES, options.mouthType)}
      </OptionGroup>

      <OptionGroup>
        <CategoryTitle>{t('avatarOptions.clothes')}</CategoryTitle>
        {renderSelectOptions('clotheType', CLOTHE_TYPES, options.clotheType)}
      </OptionGroup>

      <OptionGroup>
        <CategoryTitle>{t('avatarOptions.clothesColor')}</CategoryTitle>
        {renderColorOptions('clotheColor', CLOTHE_COLORS, options.clotheColor)}
      </OptionGroup>

      <OptionGroup>
        <CategoryTitle>{t('avatarOptions.accessories')}</CategoryTitle>
        {renderSelectOptions('accessoriesType', ACCESSORIES_TYPES, options.accessoriesType)}
      </OptionGroup>

      <ResetButton onClick={handleReset}>
        {t('actions.resetAvatar')}
      </ResetButton>
    </Container>
  );
};

export default AvatarCustomizer;
