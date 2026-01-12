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
  useInteractiveMotion(pageRef, '.js-page-interactive', {
    hoverScale: 1.015,
    pressScale: 0.995,
    duration: 0.22,
  });

  return (
    <main className="avatar-page" ref={pageRef}>
      <section className="avatar-page__shell js-reveal">
        <header className="avatar-page__header">
          <div className="avatar-page__heading">
            <p className="avatar-page__kicker">{t('app.kicker')}</p>
            <h1 className="avatar-page__title">{t('app.title')}</h1>
            <p className="avatar-page__subtitle">{t('app.subtitle')}</p>
          </div>
          <LanguageSwitcher />
        </header>

        <section className="avatar-page__workspace js-reveal">
          <AvatarPreview svg={avatarSvg} options={avatarOptions} />
          <AvatarControls
            options={avatarOptions}
            onChange={onOptionChange}
            onDownload={onDownload}
            onReset={onReset}
          />
        </section>
      </section>
    </main>
  );
}
