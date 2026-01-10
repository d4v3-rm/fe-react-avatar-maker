import type { AvatarOptions, OptionItem } from '../../../entities/avatar';
import { useTranslation } from 'react-i18next';

type ColorControlGroupProps = {
  labelKey: string;
  optionKey: keyof AvatarOptions;
  options: OptionItem[];
  selectedValue: string;
  onChange: (key: keyof AvatarOptions, value: string) => void;
};

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
    <div className="control-group">
      <p className="control-label">{groupLabel}</p>
      <div className="color-palette">
        {options.map((item) => {
          const selected = selectedValue === item.value;
          const optionLabel = t(item.labelKey);

          return (
            <button
              key={item.value}
              className={`color-chip js-animated-target ${selected ? 'is-selected' : ''}`}
              type="button"
              onClick={() => onChange(optionKey, item.value)}
              title={optionLabel}
              aria-label={`${groupLabel}: ${optionLabel}`}
              style={{ backgroundColor: `#${item.value}` }}
            />
          );
        })}
      </div>
    </div>
  );
}
