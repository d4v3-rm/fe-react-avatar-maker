import type { AvatarOptions } from '../../../entities/avatar';
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
  return (
    <main className="app">
      <header className="app__header">
        <h1>Avatar Maker</h1>
        <p>Scaffolding FSD + Vite + React + TypeScript + Sass.</p>
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
