import type { AvatarOptions } from '../../../entities/avatar';
import { COLOR_CONTROLS, SELECT_CONTROLS } from '../model/options';

type AvatarControlsProps = {
  options: AvatarOptions;
  onChange: (key: keyof AvatarOptions, value: string) => void;
  onReset: () => void;
  onDownload: () => void;
};

export function AvatarControls({ options, onChange, onReset, onDownload }: AvatarControlsProps) {
  return (
    <section className="panel controls-panel">
      <h2 className="panel-title">Customize</h2>

      {COLOR_CONTROLS.map((control) => (
        <div className="control-group" key={control.key}>
          <label className="control-label">{control.label}</label>
          <div className="color-palette">
            {control.options.map((item) => {
              const selected = options[control.key] === item.value;

              return (
                <button
                  key={item.value}
                  className={`color-chip ${selected ? 'is-selected' : ''}`}
                  type="button"
                  onClick={() => onChange(control.key, item.value)}
                  title={item.label}
                  style={{ backgroundColor: `#${item.value}` }}
                />
              );
            })}
          </div>
        </div>
      ))}

      {SELECT_CONTROLS.map((control) => (
        <div className="control-group" key={control.key}>
          <label className="control-label" htmlFor={control.key}>
            {control.label}
          </label>
          <select
            id={control.key}
            className="control-select"
            value={options[control.key]}
            onChange={(event) => onChange(control.key, event.target.value)}
          >
            {control.options.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      ))}

      <div className="actions">
        <button className="btn btn--primary" type="button" onClick={onDownload}>
          Download SVG
        </button>
        <button className="btn btn--ghost" type="button" onClick={onReset}>
          Reset
        </button>
      </div>
    </section>
  );
}

export default AvatarControls;
