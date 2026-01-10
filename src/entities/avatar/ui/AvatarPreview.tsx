import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { usePulseOnChange } from '../../../shared/lib';

type AvatarPreviewProps = {
  svg: string;
};

export function AvatarPreview({ svg }: AvatarPreviewProps) {
  const { t } = useTranslation();
  const previewRef = useRef<HTMLDivElement>(null);
  usePulseOnChange(previewRef, svg);

  return (
    <div className="avatar-preview-panel panel js-reveal">
      <h2 className="panel-title">{t('preview.title')}</h2>
      <div className="avatar-preview" ref={previewRef} dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  );
}

export default AvatarPreview;
