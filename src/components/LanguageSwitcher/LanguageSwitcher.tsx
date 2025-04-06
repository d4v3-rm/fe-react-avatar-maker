import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaFlag } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin: 0 1rem;
`;

const FlagIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-right: 0.25rem;
`;

const LanguageSelect = styled.select`
  padding: 0.35rem 0.5rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.components.card};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover, &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    outline: none;
  }
`;

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    
    // Salva la lingua scelta in localStorage e aggiorna l'URL
    localStorage.setItem('i18nextLng', newLanguage);
    
    // Aggiorna il parametro di query senza ricaricare la pagina
    const url = new URL(window.location.href);
    url.searchParams.set('lng', newLanguage);
    window.history.replaceState({}, '', url.toString());
  };
  
  return (
    <Container>
      <FlagIcon>
        <FaGlobe aria-label="Language selector" title="Change language" />
      </FlagIcon>
      <LanguageSelect value={i18n.language} onChange={changeLanguage} aria-label="Select language">
        <option value="en">{t('languageName.en')}</option>
        <option value="it">{t('languageName.it')}</option>
        <option value="fr">{t('languageName.fr')}</option>
        <option value="es">{t('languageName.es')}</option>
        <option value="zh">{t('languageName.zh')}</option>
        <option value="ja">{t('languageName.ja')}</option>
      </LanguageSelect>
    </Container>
  );
};

export default LanguageSwitcher;
