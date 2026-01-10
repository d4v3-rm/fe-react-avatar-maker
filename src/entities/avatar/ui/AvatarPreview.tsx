type AvatarPreviewProps = {
  svg: string;
};

export function AvatarPreview({ svg }: AvatarPreviewProps) {
  return (
    <div className="avatar-preview-panel">
      <h2 className="panel-title">Preview</h2>
      <div className="avatar-preview" dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  );
}

export default AvatarPreview;
