import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { AvatarPreviewMetricsProps } from './AvatarPreviewMetrics.types';

export function AvatarPreviewMetrics({ options }: AvatarPreviewMetricsProps) {
  const { t } = useTranslation();

  const metrics = useMemo(() => {
    const colors = new Set([
      options.skinColor,
      options.hairColor,
      options.facialHairColor,
      options.clotheColor,
    ]);

    const activeFeatures = [
      options.topType !== 'Blank',
      options.facialHairType !== 'Blank',
      options.accessoriesType !== 'Blank',
      options.clotheType !== 'Blank',
    ].filter(Boolean).length;

    return [
      { label: t('preview.metrics.uniqueColors'), value: String(colors.size) },
      { label: t('preview.metrics.activeFeatures'), value: String(activeFeatures) },
      { label: t('preview.metrics.format'), value: 'SVG' },
    ];
  }, [options, t]);

  return (
    <ul className="avatar-preview-card__metrics" aria-label={t('preview.metrics.title')}>
      {metrics.map((metric) => (
        <li className="avatar-preview-card__metric" key={metric.label}>
          <span className="avatar-preview-card__metric-value">{metric.value}</span>
          <span className="avatar-preview-card__metric-label">{metric.label}</span>
        </li>
      ))}
    </ul>
  );
}
