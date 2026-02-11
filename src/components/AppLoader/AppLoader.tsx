import { useTranslation } from 'react-i18next';
import type { AppLoaderProps } from './AppLoader.types';
import './AppLoader.scss';

export function AppLoader(props: AppLoaderProps) {
  void props;
  const { t } = useTranslation();

  return (
    <div className="app-loader" role="status" aria-live="polite">
      <div className="app-loader__panel">
        <p className="app-loader__kicker">{t('loader.kicker')}</p>
        <div className="app-loader__bars" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <p className="app-loader__text">{t('loader.text')}</p>
      </div>
    </div>
  );
}
