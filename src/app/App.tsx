import { useMemo } from 'react';
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
    downloadSvgFile(avatarSvg, `avatar-${Date.now()}.svg`);
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
