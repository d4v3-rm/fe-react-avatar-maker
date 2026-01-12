import { useTranslation } from 'react-i18next';
import type { SelectControlGroupProps } from './SelectControlGroup.types';

export function SelectControlGroup({
  labelKey,
  optionKey,
  options,
  selectedValue,
  onChange,
}: SelectControlGroupProps) {
  const { t } = useTranslation();
  const selectedOption = options.find((option) => option.value === selectedValue);
  const selectedLabel = selectedOption ? t(selectedOption.labelKey) : t('options.common.none');

  return (
    <div className="avatar-controls__group">
      <div className="avatar-controls__group-head">
        <label className="avatar-controls__label" htmlFor={optionKey}>
          {t(labelKey)}
        </label>
        <span className="avatar-controls__value">{selectedLabel}</span>
      </div>
      <select
        id={optionKey}
        className="avatar-controls__select js-animated-target"
        value={selectedValue}
        onChange={(event) => onChange(optionKey, event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {t(option.labelKey)}
          </option>
        ))}
      </select>
    </div>
  );
}
