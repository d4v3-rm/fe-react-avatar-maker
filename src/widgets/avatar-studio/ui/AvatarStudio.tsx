import type { AvatarOptions } from '../../../entities/avatar';
import { AvatarPreview } from '../../../entities/avatar';
import { AvatarControls } from '../../../features/avatar-customization';

type AvatarStudioProps = {
  options: AvatarOptions;
  avatarSvg: string;
  onOptionChange: (key: keyof AvatarOptions, value: string) => void;
  onReset: () => void;
  onDownload: () => void;
};

export function AvatarStudio({
  options,
  avatarSvg,
  onOptionChange,
  onReset,
  onDownload,
}: AvatarStudioProps) {
  return (
    <section className="app__grid">
      <AvatarPreview svg={avatarSvg} />
      <AvatarControls
        options={options}
        onChange={onOptionChange}
        onReset={onReset}
        onDownload={onDownload}
      />
    </section>
  );
}
