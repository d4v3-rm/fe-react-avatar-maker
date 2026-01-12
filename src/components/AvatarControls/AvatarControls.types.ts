import type { AvatarOptionChangeHandler } from '../../App.types';
import type { AvatarOptions } from '../../domain/avatar/avatar.types';

export type AvatarControlsTab = 'colors' | 'features' | 'export';

export type AvatarControlsProps = {
  options: AvatarOptions;
  onChange: AvatarOptionChangeHandler;
  onDownload: () => void;
  onReset: () => void;
};
