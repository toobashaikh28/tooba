import { useEffect, useRef, useState } from 'react';
import Button from './Button.jsx';
import Icon from './Icons.jsx';
import { navItems, profile } from '../data/content.js';

export default function Nav({ active, onSelect, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  // Escape closes the menu and returns focus to the button that opened it.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#home" aria-label={`${profile.name}, back to top`} onClick={() => { onSelect('home'); close(); }}>
          <span className="nav__monogram" aria-hidden="true">{profile.initials}</span>
          {profile.name}
        </a>

        {open && <div className="nav__backdrop" onClick={close} aria-hidden="true" />}

        <nav id="primary-nav" className={`nav__links${open ? ' is-open' : ''}`} aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? 'is-active' : undefined}
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={() => { onSelect(item.id); close(); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="nav__resume">
              <Button href={profile.resume} variant="outline" size="sm" onClick={close}>Resume</Button>
            </li>
          </ul>
        </nav>

        <div className="nav__tools">
          <button type="button" className="icon-btn" onClick={onToggleTheme} aria-label={`Switch to ${next} theme`}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <button
            ref={toggleRef}
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="nav__bars" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
