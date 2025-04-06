import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectAvatarOptions } from '@/store/slices/avatarSlice';
import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin: 2rem auto 0;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ExportButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const AvatarExporter: React.FC = () => {
  const options = useSelector(selectAvatarOptions);
  const { t } = useTranslation();

  // Create avatar with current options
  const getAvatarSvg = () => {
    try {
      const avatar = createAvatar(avataaars, {
        seed: 'avatar',
        skinColor: [options.skinColor],
        hairColor: [options.hairColor],
        facialHair: [options.facialHairType] as any,
        facialHairColor: [options.facialHairColor],
        top: [options.topType] as any,
        clothing: [options.clotheType] as any,
        clothesColor: [options.clotheColor],
        eyes: [options.eyeType] as any,
        eyebrows: [options.eyebrowType] as any,
        mouth: [options.mouthType] as any,
        accessories: [options.accessoriesType] as any,
      });

      return avatar.toString();
    } catch (error) {
      console.error('Error generating avatar:', error);
      // Return a default avatar or placeholder SVG in case of error
      return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#f0f0f0"/><text x="50%" y="50%" font-size="16" text-anchor="middle" fill="#666">${t('errors.avatarError')}</text></svg>`;
    }
  };

  // Export as SVG
  const exportSvg = () => {
    try {
      const svgData = getAvatarSvg();
      const blob = new Blob([svgData], { type: 'image/svg+xml' });
      downloadBlob(blob, 'my-avatar.svg');
    } catch (error) {
      console.error('Error in SVG export:', error);
      alert(t('errors.svgExportError'));
    }
  };

  // Export as PNG
  const exportPng = async () => {
    try {
      const svgData = getAvatarSvg();
      const img = new Image();
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(svgBlob);
      
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = 512;  // Higher resolution for better quality
          canvas.height = 512;
          
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.fillStyle = 'transparent';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            
            canvas.toBlob((blob) => {
              if (blob) {
                downloadBlob(blob, 'my-avatar.png');
              }
              URL.revokeObjectURL(url);
            }, 'image/png');
          }
        } catch (error) {
          console.error('Error processing PNG export:', error);
          alert(t('errors.pngExportError'));
          URL.revokeObjectURL(url);
        }
      };
      
      img.onerror = () => {
        console.error('Error loading image for PNG export');
        alert('Si è verificato un errore durante il caricamento dell\'immagine per l\'esportazione PNG.');
        URL.revokeObjectURL(url);
      };
      
      img.src = url;
    } catch (error) {
      console.error('Error in PNG export:', error);
      alert(t('errors.pngExportGeneralError'));
    }
  };

  // Export as JPG
  const exportJpg = async () => {
    try {
      const svgData = getAvatarSvg();
      const img = new Image();
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(svgBlob);
      
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = 512;  // Higher resolution for better quality
          canvas.height = 512;
          
          const ctx = canvas.getContext('2d');
          if (ctx) {
            // White background for JPG
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            
            canvas.toBlob((blob) => {
              if (blob) {
                downloadBlob(blob, 'my-avatar.jpg');
              }
              URL.revokeObjectURL(url);
            }, 'image/jpeg', 0.9);
          }
        } catch (error) {
          console.error('Error processing JPG export:', error);
          alert(t('errors.jpgExportError'));
          URL.revokeObjectURL(url);
        }
      };
      
      img.onerror = () => {
        console.error('Error loading image for JPG export');
        alert(t('errors.jpgLoadError'));
        URL.revokeObjectURL(url);
      };
      
      img.src = url;
    } catch (error) {
      console.error('Error in JPG export:', error);
      alert(t('errors.jpgExportGeneralError'));
    }
  };

  // Helper to download blob with success feedback
  const downloadBlob = (blob: Blob, fileName: string) => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(link.href), 100);
    
    // Show success message with file extension
    const fileExtension = fileName.split('.').pop()?.toUpperCase();
    alert(t('success.exportSuccess', { format: fileExtension }));
  };

  return (
    <Container>
      <Title>{t('export.title')}</Title>
      <ButtonsContainer>
        <ExportButton onClick={exportSvg}>
          {t('export.downloadAsSvg')}
        </ExportButton>
        <ExportButton onClick={exportPng}>
          {t('export.downloadAsPng')}
        </ExportButton>
        <ExportButton onClick={exportJpg}>
          {t('export.downloadAsJpg')}
        </ExportButton>
      </ButtonsContainer>
    </Container>
  );
};

export default AvatarExporter;
