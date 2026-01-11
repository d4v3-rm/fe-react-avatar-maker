import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { usePulseOnChange } from '../../hooks/usePulseOnChange';
import type { AvatarPreviewProps } from './AvatarPreview.types';
import './AvatarPreview.scss';

export function AvatarPreview({ svg }: AvatarPreviewProps) {
  const { t } = useTranslation();
  const frameRef = useRef<HTMLDivElement>(null);

  usePulseOnChange(frameRef, svg);

  return (
    <section className="avatar-preview-card surface-card js-reveal">
      <h2 className="avatar-preview-card__title">{t('preview.title')}</h2>
      <div
        className="avatar-preview-card__frame"
        ref={frameRef}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </section>
  );
}
