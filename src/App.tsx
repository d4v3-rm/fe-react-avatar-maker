import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLoader } from './components/AppLoader/AppLoader';
import { AvatarPage } from './components/AvatarPage/AvatarPage';
import { BackgroundScene } from './components/BackgroundScene/BackgroundScene';
import type { AvatarOptionChangeHandler } from './App.types';
import { buildAvatarSvg } from './domain/avatar/buildAvatar';
import { downloadSvgFile } from './lib/downloadSvgFile';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { resetAvatarOptions, updateAvatarOption } from './store/avatar/avatar.slice';
import { selectAvatarOptions } from './store/avatar/avatar.selectors';

function App() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const avatarOptions = useAppSelector(selectAvatarOptions);
  const avatarSvg = useMemo(() => buildAvatarSvg(avatarOptions), [avatarOptions]);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      window.clearTimeout(timerId);
    };
  }, []);

  const handleOptionChange: AvatarOptionChangeHandler = (key, value) => {
    dispatch(updateAvatarOption({ key, value }));
  };

  const handleReset = () => {
    dispatch(resetAvatarOptions());
  };

  const handleDownload = () => {
    downloadSvgFile(avatarSvg, `${t('download.filePrefix')}-${Date.now()}.svg`);
  };

  return (
    <>
      <BackgroundScene />
      <div className="app-layer">
        {isLoading ? (
          <AppLoader />
        ) : (
          <AvatarPage
            avatarOptions={avatarOptions}
            avatarSvg={avatarSvg}
            onOptionChange={handleOptionChange}
            onReset={handleReset}
            onDownload={handleDownload}
          />
        )}
      </div>
    </>
  );
}

export default App;
