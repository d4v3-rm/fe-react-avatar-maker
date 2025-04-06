import React from 'react';
import { useTheme } from '@/providers/ThemeProvider';
import { 
  StyledColorPaletteSelector, 
  ColorOption, 
  ColorSwatch, 
  SelectorTitle 
} from './styles';
import type { AccentColor } from '@/providers/ThemeProvider/types';

interface ColorPaletteSelectorProps {
  title?: string;
}

const ColorPaletteSelector: React.FC<ColorPaletteSelectorProps> = ({ 
  title = 'Accent Color' 
}) => {
  const { accentColor, setAccentColor } = useTheme();
  
  const colorOptions: { value: AccentColor; label: string; color: string }[] = [
    { value: 'blue', label: 'Blue', color: '#1677ff' },
    { value: 'purple', label: 'Purple', color: '#722ED1' },
    { value: 'pink', label: 'Pink', color: '#EB2F96' },
    { value: 'red', label: 'Red', color: '#F5222D' },
    { value: 'orange', label: 'Orange', color: '#FA8C16' },
    { value: 'green', label: 'Green', color: '#52C41A' },
    { value: 'teal', label: 'Teal', color: '#13C2C2' },
  ];

  return (
    <StyledColorPaletteSelector>
      {title && <SelectorTitle>{title}</SelectorTitle>}
      <div>
        {colorOptions.map((option) => (
          <ColorOption
            key={option.value}
            selected={accentColor === option.value}
            onClick={() => setAccentColor(option.value)}
            title={option.label}
          >
            <ColorSwatch color={option.color} />
          </ColorOption>
        ))}
      </div>
    </StyledColorPaletteSelector>
  );
};

export default ColorPaletteSelector;
