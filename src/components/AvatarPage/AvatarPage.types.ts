import type { AvatarOptionChangeHandler } from '../../App.types';
import type { AvatarOptions } from '../../domain/avatar/avatar.types';

export type AvatarPageProps = {
  avatarOptions: AvatarOptions;
  avatarSvg: string;
  onOptionChange: AvatarOptionChangeHandler;
  onReset: () => void;
  onDownload: () => void;
};
