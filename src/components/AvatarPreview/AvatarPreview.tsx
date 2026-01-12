import { useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import type { AvatarOptions } from '../../domain/avatar/avatar.types';
import { getOptionLabelKey } from '../../domain/avatar/options';
import { usePulseOnChange } from '../../hooks/usePulseOnChange';
import { AvatarPreviewMetrics } from './AvatarPreviewMetrics';
import type { AvatarPreviewProps } from './AvatarPreview.types';
import './AvatarPreview.scss';

const TRAIT_CONFIG: Array<{ key: keyof AvatarOptions; labelKey: string }> = [
  { key: 'topType', labelKey: 'controls.labels.hairStyle' },
  { key: 'eyeType', labelKey: 'controls.labels.eyes' },
  { key: 'mouthType', labelKey: 'controls.labels.mouth' },
  { key: 'accessoriesType', labelKey: 'controls.labels.accessories' },
];

export function AvatarPreview({ svg, options }: AvatarPreviewProps) {
  const { t } = useTranslation();
  const frameRef = useRef<HTMLDivElement>(null);

  usePulseOnChange(frameRef, svg);

  const traits = useMemo(
    () =>
      TRAIT_CONFIG.map((trait) => {
        const optionValue = options[trait.key];
        const optionLabelKey = getOptionLabelKey(trait.key, optionValue) ?? 'options.common.none';

        return {
          label: t(trait.labelKey),
          value: t(optionLabelKey),
        };
      }),
    [options, t],
  );

  return (
    <section className="avatar-preview-card surface-card js-reveal js-page-interactive">
      <div className="avatar-preview-card__head">
        <div>
          <h2 className="avatar-preview-card__title">{t('preview.title')}</h2>
          <p className="avatar-preview-card__subtitle">{t('preview.subtitle')}</p>
        </div>
        <span className="avatar-preview-card__badge">{t('preview.liveBadge')}</span>
      </div>

      <div
        className="avatar-preview-card__frame"
        ref={frameRef}
        dangerouslySetInnerHTML={{ __html: svg }}
      />

      <AvatarPreviewMetrics options={options} />

      <dl className="avatar-preview-card__traits" aria-label={t('preview.traitsTitle')}>
        {traits.map((trait) => (
          <div className="avatar-preview-card__trait" key={trait.label}>
            <dt className="avatar-preview-card__trait-label">{trait.label}</dt>
            <dd className="avatar-preview-card__trait-value">{trait.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
