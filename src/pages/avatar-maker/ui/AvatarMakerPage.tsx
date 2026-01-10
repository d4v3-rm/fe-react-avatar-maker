import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import type { AvatarOptions } from '../../../entities/avatar';
import { LanguageSwitcher } from '../../../features/language-switcher';
import { useInteractiveMotion, useRevealAnimation } from '../../../shared/lib';
import { AvatarStudio } from '../../../widgets/avatar-studio';

type AvatarMakerPageProps = {
  options: AvatarOptions;
  avatarSvg: string;
  onOptionChange: (key: keyof AvatarOptions, value: string) => void;
  onReset: () => void;
  onDownload: () => void;
};

export function AvatarMakerPage({
  options,
  avatarSvg,
  onOptionChange,
  onReset,
  onDownload,
}: AvatarMakerPageProps) {
  const { t } = useTranslation();
  const pageRef = useRef<HTMLElement>(null);
  useRevealAnimation(pageRef, '.js-reveal', { y: 18, duration: 0.55, stagger: 0.09 });
  useInteractiveMotion(pageRef, '.panel', { hoverScale: 1.01, pressScale: 1, duration: 0.22 });

  return (
    <main className="app" ref={pageRef}>
      <header className="app__header js-reveal">
        <div className="app__header-top">
          <h1>{t('app.title')}</h1>
          <LanguageSwitcher />
        </div>
        <p>{t('app.subtitle')}</p>
      </header>

      <AvatarStudio
        options={options}
        avatarSvg={avatarSvg}
        onOptionChange={onOptionChange}
        onReset={onReset}
        onDownload={onDownload}
      />
    </main>
  );
}
