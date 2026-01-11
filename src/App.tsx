import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AvatarPage } from './components/AvatarPage/AvatarPage';
import type { AvatarOptionChangeHandler } from './App.types';
import { buildAvatarSvg } from './domain/avatar/buildAvatar';
import { downloadSvgFile } from './lib/downloadSvgFile';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { resetAvatarOptions, updateAvatarOption } from './store/avatar/avatar.slice';
import { selectAvatarOptions } from './store/avatar/avatar.selectors';

function App() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const avatarOptions = useAppSelector(selectAvatarOptions);
  const avatarSvg = useMemo(() => buildAvatarSvg(avatarOptions), [avatarOptions]);

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
    <AvatarPage
      avatarOptions={avatarOptions}
      avatarSvg={avatarSvg}
      onOptionChange={handleOptionChange}
      onReset={handleReset}
      onDownload={handleDownload}
    />
  );
}

export default App;
