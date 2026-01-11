import type { AvatarOptionChangeHandler } from '../../App.types';
import type { AvatarOptions } from '../../domain/avatar/avatar.types';

export type AvatarControlsProps = {
  options: AvatarOptions;
  onChange: AvatarOptionChangeHandler;
  onReset: () => void;
  onDownload: () => void;
};
