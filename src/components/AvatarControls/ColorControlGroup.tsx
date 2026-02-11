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
  const selectedOption = options.find((option) => option.value === selectedValue);
  const selectedLabel = selectedOption ? t(selectedOption.labelKey) : t('options.common.none');

  return (
    <div className="avatar-controls__group">
      <div className="avatar-controls__group-head">
        <p className="avatar-controls__label">{groupLabel}</p>
        <span className="avatar-controls__value">{selectedLabel}</span>
      </div>
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
