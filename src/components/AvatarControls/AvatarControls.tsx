import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { COLOR_CONTROLS, SELECT_CONTROLS } from '../../domain/avatar/options';
import { useInteractiveMotion } from '../../hooks/useInteractiveMotion';
import { useRevealAnimation } from '../../hooks/useRevealAnimation';
import { ColorControlGroup } from './ColorControlGroup';
import { ControlActions } from './ControlActions';
import { SelectControlGroup } from './SelectControlGroup';
import type { AvatarControlsProps } from './AvatarControls.types';
import './AvatarControls.scss';

export function AvatarControls({ options, onChange, onReset, onDownload }: AvatarControlsProps) {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useRevealAnimation(sectionRef, '.avatar-controls__group, .avatar-controls__actions', {
    y: 12,
    stagger: 0.04,
    duration: 0.45,
  });
  useInteractiveMotion(sectionRef, '.js-animated-target', { hoverScale: 1.03, pressScale: 0.985 });

  return (
    <section className="avatar-controls surface-card js-reveal" ref={sectionRef}>
      <h2 className="avatar-controls__title">{t('controls.title')}</h2>

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
