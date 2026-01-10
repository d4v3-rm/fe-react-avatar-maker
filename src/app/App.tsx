import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  buildAvatarSvg,
  resetOptions,
  selectAvatarOptions,
  updateOption,
  type AvatarOptions,
} from '../entities/avatar';
import { AvatarMakerPage } from '../pages/avatar-maker';
import { downloadSvgFile } from '../shared/lib';
import { useAppDispatch, useAppSelector } from './providers';

function App() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const options = useAppSelector(selectAvatarOptions);
  const avatarSvg = useMemo(() => buildAvatarSvg(options), [options]);

  const handleOptionChange = (key: keyof AvatarOptions, value: string) => {
    dispatch(updateOption({ key, value }));
  };

  const handleReset = () => {
    dispatch(resetOptions());
  };

  const handleDownload = () => {
    const prefix = t('download.filePrefix');
    downloadSvgFile(avatarSvg, `${prefix}-${Date.now()}.svg`);
  };

  return (
    <AvatarMakerPage
      options={options}
      avatarSvg={avatarSvg}
      onOptionChange={handleOptionChange}
      onReset={handleReset}
      onDownload={handleDownload}
    />
  );
}

export default App;
