import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInteractiveMotion } from '../../hooks/useInteractiveMotion';
import { useRevealAnimation } from '../../hooks/useRevealAnimation';
import { AvatarControls } from '../AvatarControls/AvatarControls';
import { AvatarPreview } from '../AvatarPreview/AvatarPreview';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import type { AvatarPageProps } from './AvatarPage.types';
import './AvatarPage.scss';

export function AvatarPage({
  avatarOptions,
  avatarSvg,
  onOptionChange,
  onReset,
  onDownload,
}: AvatarPageProps) {
  const { t } = useTranslation();
  const pageRef = useRef<HTMLElement>(null);

  useRevealAnimation(pageRef, '.js-reveal', { y: 18, duration: 0.55, stagger: 0.08 });
  useInteractiveMotion(pageRef, '.surface-card', {
    hoverScale: 1.01,
    pressScale: 1,
    duration: 0.22,
  });

  return (
    <main className="avatar-page" ref={pageRef}>
      <header className="avatar-page__header js-reveal">
        <div className="avatar-page__top">
          <h1 className="avatar-page__title">{t('app.title')}</h1>
          <LanguageSwitcher />
        </div>
        <p className="avatar-page__subtitle">{t('app.subtitle')}</p>
      </header>

      <section className="avatar-page__grid js-reveal">
        <AvatarPreview svg={avatarSvg} />
        <AvatarControls
          options={avatarOptions}
          onChange={onOptionChange}
          onReset={onReset}
          onDownload={onDownload}
        />
      </section>
    </main>
  );
}
