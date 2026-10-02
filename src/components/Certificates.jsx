import { useRef, useState } from 'react';
import Section from './Section.jsx';
import Icon from './Icons.jsx';
import { certificateImageFor } from '../lib/assets.js';
import { certificates, sectionTitles } from '../data/content.js';

export default function Certificates() {
  const dialog = useRef(null);
  const [current, setCurrent] = useState(null);

  const open = (cert, src) => {
    setCurrent({ ...cert, src });
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  // Clicking the dark backdrop (the dialog element itself) closes the lightbox.
  const onBackdrop = (e) => { if (e.target === dialog.current) close(); };

  return (
    <Section id="certificates" title={sectionTitles.certificates}>
      <ul className="certs">
        {certificates.map((c) => {
          const src = certificateImageFor(c.id);
          return (
            <li key={c.id} className="cert">
              {src ? (
                <button type="button" className="cert__thumb" onClick={() => open(c, src)} aria-haspopup="dialog" aria-label={`View ${c.title} full size`}>
                  <img src={src} alt="" loading="lazy" />
                  <span className="cert__zoom" aria-hidden="true"><Icon name="zoom" size={13} /></span>
                </button>
              ) : (
                <span className="cert__thumb cert__thumb--empty" aria-hidden="true" />
              )}

              <div className="cert__main">
                <h3 className="cert__title">{c.title}</h3>
                <p className="cert__issuer">{c.issuer}</p>
                {c.note && <p className="cert__note">{c.note}</p>}
              </div>

              <div className="cert__meta">
                <p className="cert__date">{c.date}</p>
                {!c.url && c.urlFallback && <p className="cert__verify-note">{c.urlFallback}</p>}
                {c.url && (
                  <a className="text-link" href={c.url} target="_blank" rel="noreferrer noopener">
                    Verify <Icon name="external" size={13} />
                    <span className="visually-hidden"> credential for {c.title} (opens in a new tab)</span>
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      <dialog ref={dialog} className="lightbox" onClick={onBackdrop} aria-label={current ? current.title : 'Certificate'} onClose={() => setCurrent(null)}>
        {current && (
          <div className="lightbox__inner">
            <img src={current.src} alt={`${current.title}, issued by ${current.issuer}`} />
            <div className="lightbox__bar">
              <p>{current.title}, {current.issuer}</p>
              <button type="button" className="btn btn--outline btn--sm" onClick={close}>Close</button>
            </div>
          </div>
        )}
      </dialog>
    </Section>
  );
}
