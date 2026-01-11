import { useTranslation } from 'react-i18next';
import type { ControlActionsProps } from './ControlActions.types';

export function ControlActions({ onDownload, onReset }: ControlActionsProps) {
  const { t } = useTranslation();

  return (
    <div className="avatar-controls__actions">
      <button
        className="avatar-controls__button avatar-controls__button--primary js-animated-target"
        type="button"
        onClick={onDownload}
      >
        {t('actions.downloadSvg')}
      </button>
      <button
        className="avatar-controls__button avatar-controls__button--ghost js-animated-target"
        type="button"
        onClick={onReset}
      >
        {t('actions.reset')}
      </button>
    </div>
  );
}
