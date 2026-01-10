import { useTranslation } from 'react-i18next';
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  isSupportedLanguage,
} from '../../../shared/config/i18n';

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const currentLanguage = isSupportedLanguage(i18n.resolvedLanguage ?? '')
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
      <label className="language-switcher__label" htmlFor="language-switcher">
        {t('language.label')}
      </label>
      <select
        id="language-switcher"
        className="language-switcher__select"
        value={currentLanguage}
        onChange={(event) => handleLanguageChange(event.target.value)}
      >
        {SUPPORTED_LANGUAGES.map((language) => (
          <option key={language} value={language}>
            {t(`language.options.${language}`)}
          </option>
        ))}
      </select>
    </div>
  );
}
