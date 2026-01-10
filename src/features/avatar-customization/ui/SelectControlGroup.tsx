import type { AvatarOptions, OptionItem } from '../../../entities/avatar';
import { useTranslation } from 'react-i18next';

type SelectControlGroupProps = {
  labelKey: string;
  optionKey: keyof AvatarOptions;
  options: OptionItem[];
  selectedValue: string;
  onChange: (key: keyof AvatarOptions, value: string) => void;
};

export function SelectControlGroup({
  labelKey,
  optionKey,
  options,
  selectedValue,
  onChange,
}: SelectControlGroupProps) {
  const { t } = useTranslation();

  return (
    <div className="control-group">
      <label className="control-label" htmlFor={optionKey}>
        {t(labelKey)}
      </label>
      <select
        id={optionKey}
        className="control-select js-animated-target"
        value={selectedValue}
        onChange={(event) => onChange(optionKey, event.target.value)}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {t(item.labelKey)}
          </option>
        ))}
      </select>
    </div>
  );
}
