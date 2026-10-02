import Icon from './Icons.jsx';
import { previewFor } from '../lib/assets.js';

/**
 * Preview area at the top of a project card.
 * Web projects: a browser-style frame showing src/assets/previews/<id>.png, or a placeholder of the same size.
 * Projects without a website: a panel with the project's own highlight (for example an award).
 */
export default function ProjectPreview({ project }) {
  const { id, name, tagline, host, live, panel } = project;

  if (!host) {
    return (
      <div className="frame">
        <div className="frame__bar"><span className="frame__label">{panel?.label}</span></div>
        <div className="frame__panel">
          {panel && (
            <>
              <p className="frame__panel-title">{panel.title}</p>
              <p className="frame__panel-caption">{panel.caption}</p>
            </>
          )}
        </div>
      </div>
    );
  }

  const src = previewFor(id);
  const frame = (
    <div className="frame">
      <div className="frame__bar" aria-hidden="true">
        <span className="frame__dots"><i /><i /><i /></span>
        <span className="frame__url">{host}</span>
      </div>
      {src ? (
        <img className="frame__img" src={src} alt={`Screenshot of ${name}`} width="1280" height="800" loading="lazy" />
      ) : (
        <div className="frame__empty" aria-hidden="true">
          <p className="frame__empty-name">{name}</p>
          <p className="frame__empty-tag">{tagline}</p>
        </div>
      )}
    </div>
  );

  if (!live) return frame;
  return (
    <a className="preview-link" href={live} target="_blank" rel="noreferrer noopener" aria-label={`Open ${name} live demo (opens in a new tab)`}>
      {frame}
      <span className="preview-cue" aria-hidden="true">
        View live <Icon name="external" size={14} />
      </span>
    </a>
  );
}
