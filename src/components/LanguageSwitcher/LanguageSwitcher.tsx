import { useTranslation } from 'react-i18next';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, isSupportedLanguage } from '../../i18n/i18n';
import type { LanguageSwitcherProps } from './LanguageSwitcher.types';
import './LanguageSwitcher.scss';

export function LanguageSwitcher(props: LanguageSwitcherProps) {
  void props;
  const { t, i18n } = useTranslation();
  const activeLanguage = isSupportedLanguage(i18n.resolvedLanguage ?? '')
    ? i18n.resolvedLanguage
    : DEFAULT_LANGUAGE;

  const handleLanguageChange = (language: string) => {
    if (!isSupportedLanguage(language)) {
      return;
    }

    void i18n.changeLanguage(language);
  };

  return (
    <div className="language-switcher">
      <span className="language-switcher__label">{t('language.label')}</span>
      <div className="language-switcher__list" role="group" aria-label={t('language.label')}>
        {SUPPORTED_LANGUAGES.map((language) => {
          const isActive = activeLanguage === language;

          return (
            <button
              key={language}
              type="button"
              data-lang={language}
              className={`language-switcher__button js-page-interactive ${isActive ? 'is-active' : ''}`}
              onClick={() => handleLanguageChange(language)}
              aria-pressed={isActive}
              title={t(`language.options.${language}`)}
            >
              {language.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
