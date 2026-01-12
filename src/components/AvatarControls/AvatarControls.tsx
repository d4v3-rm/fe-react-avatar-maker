import { useRef, useState, type KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { COLOR_CONTROLS, SELECT_CONTROLS } from '../../domain/avatar/options';
import { useInteractiveMotion } from '../../hooks/useInteractiveMotion';
import { useRevealAnimation } from '../../hooks/useRevealAnimation';
import { ColorControlGroup } from './ColorControlGroup';
import { SelectControlGroup } from './SelectControlGroup';
import type { AvatarControlsProps, AvatarControlsTab } from './AvatarControls.types';
import './AvatarControls.scss';

const CONTROL_TABS: AvatarControlsTab[] = ['colors', 'features', 'export'];

export function AvatarControls({ options, onChange, onDownload, onReset }: AvatarControlsProps) {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<AvatarControlsTab>('colors');

  useRevealAnimation(sectionRef, '.avatar-controls__group, .avatar-controls__section', {
    y: 12,
    stagger: 0.04,
    duration: 0.45,
  });
  useInteractiveMotion(sectionRef, '.js-animated-target', { hoverScale: 1.03, pressScale: 0.985 });

  const handleTabKeyboardNavigation = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentTab: AvatarControlsTab,
  ) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
      return;
    }

    event.preventDefault();
    const currentIndex = CONTROL_TABS.indexOf(currentTab);
    const nextIndex =
      event.key === 'ArrowRight'
        ? (currentIndex + 1) % CONTROL_TABS.length
        : (currentIndex - 1 + CONTROL_TABS.length) % CONTROL_TABS.length;
    const nextTab = CONTROL_TABS[nextIndex];
    setActiveTab(nextTab);

    const nextButton = sectionRef.current?.querySelector<HTMLButtonElement>(
      `[data-avatar-tab='${nextTab}']`,
    );
    nextButton?.focus();
  };

  return (
    <section
      className="avatar-controls surface-card js-reveal js-page-interactive"
      ref={sectionRef}
    >
      <header className="avatar-controls__header">
        <h2 className="avatar-controls__title">{t('controls.title')}</h2>
        <p className="avatar-controls__subtitle">{t('controls.helper')}</p>
      </header>

      <div className="avatar-controls__tabs" role="tablist" aria-label={t('controls.title')}>
        {CONTROL_TABS.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              id={`avatar-controls-tab-${tab}`}
              data-avatar-tab={tab}
              role="tab"
              type="button"
              className={`avatar-controls__tab js-animated-target ${isActive ? 'is-active' : ''}`}
              aria-selected={isActive}
              aria-controls={`avatar-controls-panel-${tab}`}
              onClick={() => setActiveTab(tab)}
              onKeyDown={(event) => handleTabKeyboardNavigation(event, tab)}
            >
              {t(`controls.sections.${tab}`)}
            </button>
          );
        })}
      </div>

      <section
        id={`avatar-controls-panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`avatar-controls-tab-${activeTab}`}
        className="avatar-controls__section"
      >
        <h3 className="avatar-controls__section-title">{t(`controls.sections.${activeTab}`)}</h3>

        {activeTab === 'colors'
          ? COLOR_CONTROLS.map((control) => (
              <ColorControlGroup
                key={control.key}
                labelKey={control.labelKey}
                optionKey={control.key}
                options={control.options}
                selectedValue={options[control.key]}
                onChange={onChange}
              />
            ))
          : null}

        {activeTab === 'features' ? (
          <div className="avatar-controls__features-grid">
            {SELECT_CONTROLS.map((control) => (
              <SelectControlGroup
                key={control.key}
                labelKey={control.labelKey}
                optionKey={control.key}
                options={control.options}
                selectedValue={options[control.key]}
                onChange={onChange}
              />
            ))}
          </div>
        ) : null}

        {activeTab === 'export' ? (
          <div className="avatar-controls__export">
            <h4 className="avatar-controls__export-title">{t('actions.exportTitle')}</h4>
            <p className="avatar-controls__export-subtitle">{t('actions.exportSubtitle')}</p>

            <div className="avatar-controls__export-actions">
              <button
                className="avatar-controls__button avatar-controls__button--primary js-animated-target"
                type="button"
                onClick={onDownload}
              >
                {t('actions.downloadSvg')}
              </button>
              <button
                className="avatar-controls__button avatar-controls__button--ghost js-animated-target"
                type="button"
                onClick={onReset}
              >
                {t('actions.reset')}
              </button>
            </div>
          </div>
        ) : null}
      </section>
    </section>
  );
}
