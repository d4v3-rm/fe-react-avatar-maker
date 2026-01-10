import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import type { AvatarOptions } from '../../../entities/avatar';
import { useInteractiveMotion, useRevealAnimation } from '../../../shared/lib';
import { COLOR_CONTROLS, SELECT_CONTROLS } from '../model/options';
import { ColorControlGroup } from './ColorControlGroup';
import { ControlActions } from './ControlActions';
import { SelectControlGroup } from './SelectControlGroup';

type AvatarControlsProps = {
  options: AvatarOptions;
  onChange: (key: keyof AvatarOptions, value: string) => void;
  onReset: () => void;
  onDownload: () => void;
};

export function AvatarControls({ options, onChange, onReset, onDownload }: AvatarControlsProps) {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  useRevealAnimation(sectionRef, '.control-group, .actions', {
    y: 12,
    stagger: 0.04,
    duration: 0.45,
  });
  useInteractiveMotion(sectionRef, '.js-animated-target', { hoverScale: 1.03, pressScale: 0.985 });

  return (
    <section className="panel controls-panel js-reveal" ref={sectionRef}>
      <h2 className="panel-title">{t('controls.title')}</h2>

      {COLOR_CONTROLS.map((control) => (
        <ColorControlGroup
          key={control.key}
          labelKey={control.labelKey}
          optionKey={control.key}
          options={control.options}
          selectedValue={options[control.key]}
          onChange={onChange}
        />
      ))}

      {SELECT_CONTROLS.map((control) => (
        <SelectControlGroup
          key={control.key}
          labelKey={control.labelKey}
          optionKey={control.key}
          options={control.options}
          selectedValue={options[control.key]}
          onChange={onChange}
        />
      ))}

      <ControlActions onDownload={onDownload} onReset={onReset} />
    </section>
  );
}

export default AvatarControls;
