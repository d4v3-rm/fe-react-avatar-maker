import { useTranslation } from 'react-i18next';

type ControlActionsProps = {
  onDownload: () => void;
  onReset: () => void;
};

export function ControlActions({ onDownload, onReset }: ControlActionsProps) {
  const { t } = useTranslation();

  return (
    <div className="actions">
      <button className="btn btn--primary js-animated-target" type="button" onClick={onDownload}>
        {t('actions.downloadSvg')}
      </button>
      <button className="btn btn--ghost js-animated-target" type="button" onClick={onReset}>
        {t('actions.reset')}
      </button>
    </div>
  );
}
