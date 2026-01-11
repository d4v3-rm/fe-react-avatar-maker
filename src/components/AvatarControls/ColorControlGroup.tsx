import { useTranslation } from 'react-i18next';
import type { ColorControlGroupProps } from './ColorControlGroup.types';

export function ColorControlGroup({
  labelKey,
  optionKey,
  options,
  selectedValue,
  onChange,
}: ColorControlGroupProps) {
  const { t } = useTranslation();
  const groupLabel = t(labelKey);

  return (
    <div className="avatar-controls__group">
      <p className="avatar-controls__label">{groupLabel}</p>
      <div className="avatar-controls__colors">
        {options.map((option) => {
          const isSelected = selectedValue === option.value;
          const optionLabel = t(option.labelKey);

          return (
            <button
              key={option.value}
              className={`avatar-controls__chip js-animated-target ${isSelected ? 'is-selected' : ''}`}
              type="button"
              onClick={() => onChange(optionKey, option.value)}
              title={optionLabel}
              aria-label={`${groupLabel}: ${optionLabel}`}
              style={{ backgroundColor: `#${option.value}` }}
            />
          );
        })}
      </div>
    </div>
  );
}
