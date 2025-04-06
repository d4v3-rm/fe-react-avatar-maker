import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectAvatarOptions } from '@/store/slices/avatarSlice';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 500px;
  margin: 1rem auto;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`;

const ShareContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ShareInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.components.input.background};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  font-size: 0.9rem;
  outline: none;
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const ShareButton = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.text.disabled};
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div<{ show: boolean }>`
  padding: 0.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.success};
  font-weight: 600;
  height: ${props => props.show ? '1.5rem' : '0'};
  opacity: ${props => props.show ? 1 : 0};
  transition: all 0.3s ease;
  overflow: hidden;
`;

const AvatarShare: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const options = useSelector(selectAvatarOptions);

  // Genera l'URL di condivisione con tutti i parametri dell'avatar
  const generateShareUrl = () => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    
    // Aggiungi tutte le opzioni come parametri
    Object.entries(options).forEach(([key, value]) => {
      params.set(key, value);
    });
    
    url.search = params.toString();
    return url.toString();
  };

  // Copia l'URL negli appunti
  const copyToClipboard = () => {
    const shareUrl = generateShareUrl();
    
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch(err => {
        console.error('Errore durante la copia negli appunti:', err);
        alert('Non è stato possibile copiare l\'URL. Prova a copiarlo manualmente.');
      });
  };

  return (
    <Container>
      <Title>Condividi il tuo Avatar</Title>
      <ShareContainer>
        <ShareInput 
          type="text" 
          value={generateShareUrl()} 
          readOnly 
          onClick={(e) => (e.target as HTMLInputElement).select()}
        />
        <ShareButton onClick={copyToClipboard}>
          {copied ? 'Copiato!' : 'Copia URL'}
        </ShareButton>
      </ShareContainer>
      <SuccessMessage show={copied}>
        URL copiato negli appunti!
      </SuccessMessage>
    </Container>
  );
};

export default AvatarShare;
