import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa le traduzioni
import translationEN from './locales/en/translation.json';
import translationIT from './locales/it/translation.json';
import translationFR from './locales/fr/translation.json';
import translationES from './locales/es/translation.json';
import translationZH from './locales/zh/translation.json';
import translationJA from './locales/ja/translation.json';

// Le risorse di traduzione
const resources = {
  en: {
    translation: translationEN
  },
  it: {
    translation: translationIT
  },
  fr: {
    translation: translationFR
  },
  es: {
    translation: translationES
  },
  zh: {
    translation: translationZH
  },
  ja: {
    translation: translationJA
  }
};

i18n
  // Carica le traduzioni dal backend
  .use(Backend)
  // Rileva automaticamente la lingua del browser
  .use(LanguageDetector)
  // Passa l'istanza i18n a react-i18next
  .use(initReactI18next)
  // Inizializza i18next
  .init({
    resources,
    fallbackLng: 'en', // Lingua di fallback se la lingua rilevata non è supportata
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // Non necessario per React
    },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lng', // Parametro URL per la lingua (es. ?lng=it)
      caches: ['localStorage'], // Salva la lingua selezionata in localStorage
    }
  });

export default i18n;
