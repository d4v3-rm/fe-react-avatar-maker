import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import type { AppLanguage } from './i18n.types';
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import it from './locales/it.json';

export const SUPPORTED_LANGUAGES: AppLanguage[] = ['it', 'en', 'es', 'fr'];
export const DEFAULT_LANGUAGE: AppLanguage = 'en';
const STORAGE_KEY = 'app-language';

export function isSupportedLanguage(language: string): language is AppLanguage {
  return SUPPORTED_LANGUAGES.includes(language as AppLanguage);
}

function detectInitialLanguage(): AppLanguage {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  const savedLanguage = localStorage.getItem(STORAGE_KEY);
  if (savedLanguage && isSupportedLanguage(savedLanguage)) {
    return savedLanguage;
  }

  const browserLanguage = window.navigator.language.split('-')[0];
  if (isSupportedLanguage(browserLanguage)) {
    return browserLanguage;
  }

  return DEFAULT_LANGUAGE;
}

void i18n.use(initReactI18next).init({
  resources: {
    it: { translation: it },
    en: { translation: en },
    es: { translation: es },
    fr: { translation: fr },
  },
  lng: detectInitialLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: SUPPORTED_LANGUAGES,
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
});

i18n.on('languageChanged', (language) => {
  if (typeof window === 'undefined') {
    return;
  }

  if (isSupportedLanguage(language)) {
    localStorage.setItem(STORAGE_KEY, language);
  }
});

export default i18n;
