import { useEffect, useRef, useState } from 'react';
import { about, certificates, education, experience, profile, projects, skills, socials } from '../data/content.js';

const Ext = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer noopener">{children}</a>
);

const findProject = (q) =>
  projects.find((p) => p.id === q || p.name.toLowerCase().replace(/\s+/g, '') === q.replace(/\s+/g, ''));

/** Each command returns what to print. `open` and `resume` also open a new tab. */
function run(input) {
  const [cmd, ...rest] = input.trim().split(/\s+/);
  const arg = rest.join(' ').toLowerCase();

  switch (cmd.toLowerCase()) {
    case 'help':
      return (
        <ul className="term__list">
          <li><b>whoami</b> who I am</li>
          <li><b>projects</b> what I have built</li>
          <li><b>open &lt;name&gt;</b> open a live project, e.g. open splitly</li>
          <li><b>skills</b> my stack</li>
          <li><b>experience</b> work and leadership</li>
          <li><b>education</b> degree</li>
          <li><b>certificates</b> courses I have completed</li>
          <li><b>links</b> email, LinkedIn, GitHub</li>
          <li><b>resume</b> open my resume</li>
          <li><b>clear</b> clear the screen</li>
        </ul>
      );
    case 'whoami':
      return <p>{profile.name}. {profile.role} in {profile.location}. {about.intro}</p>;
    case 'projects':
      return (
        <ul className="term__list">
          {projects.map((p) => <li key={p.id}><b>{p.name}</b> {p.tagline}</li>)}
          <li className="term__dim">Try: open splitly</li>
        </ul>
      );
    case 'open': {
      if (!arg) return <p>Usage: open &lt;project&gt;. Try: open splitly</p>;
      const p = findProject(arg);
      if (!p) return <p className="term__err">No project called "{arg}". Type projects to see the list.</p>;
      if (!p.live) return <p>{p.name} has no live link. It is a backend project.</p>;
      window.open(p.live, '_blank', 'noopener,noreferrer');
      return <p>Opening {p.name} in a new tab.</p>;
    }
    case 'skills':
      return (
        <ul className="term__list">
          {skills.map((s) => <li key={s.group}><b>{s.group}</b> {s.items.join(', ')}</li>)}
        </ul>
      );
    case 'experience':
      return (
        <ul className="term__list">
          {experience.map((e) => <li key={e.role}><b>{e.role}</b> {e.org}, {e.dates}</li>)}
        </ul>
      );
    case 'education':
      return (
        <ul className="term__list">
          <li><b>{education.degree}</b> {education.school}</li>
          <li>{education.details}</li>
        </ul>
      );
    case 'certificates':
    case 'certs':
      return (
        <ul className="term__list">
          {certificates.map((c) => <li key={c.id}><b>{c.date}</b> {c.title}, {c.issuer}</li>)}
        </ul>
      );
    case 'links':
    case 'contact':
      return (
        <ul className="term__list">
          {socials.map((l) => (
            <li key={l.id}>
              <b>{l.label.toLowerCase()}</b>{' '}
              <Ext href={l.url}>{l.url.replace(/^(https:\/\/|mailto:)/, '')}</Ext>
            </li>
          ))}
        </ul>
      );
    case 'resume':
      window.open(profile.resume, '_blank', 'noopener,noreferrer');
      return <p>Opening my resume in a new tab.</p>;
    default:
      return <p className="term__err">command not found: {cmd}. Type help to see what works.</p>;
  }
}

const quick = ['whoami', 'projects', 'skills', 'certificates', 'links'];

export default function Terminal() {
  const [lines, setLines] = useState(() => [{ id: 0, cmd: 'whoami', out: run('whoami') }]);
  const [value, setValue] = useState('');
  const [history, setHistory] = useState([]);
  const [cursor, setCursor] = useState(-1);
  const screen = useRef(null);
  const nextId = useRef(1);

  // Keep the newest output in view inside the terminal only (never scrolls the page).
  useEffect(() => {
    if (screen.current) screen.current.scrollTop = screen.current.scrollHeight;
  }, [lines]);

  const exec = (raw) => {
    const text = raw.trim();
    if (!text) return;
    setHistory((h) => [text, ...h]);
    setCursor(-1);
    if (text.toLowerCase() === 'clear') {
      setLines([]);
      return;
    }
    // Run the command once, here. Doing it inside the setLines updater would repeat side
    // effects (like opening a tab) when React calls the updater twice in development.
    const out = run(text);
    const id = nextId.current++;
    setLines((l) => [...l, { id, cmd: text, out }]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    exec(value);
    setValue('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowUp' && history.length) {
      e.preventDefault();
      const i = Math.min(cursor + 1, history.length - 1);
      setCursor(i);
      setValue(history[i]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const i = cursor - 1;
      setCursor(i);
      setValue(i >= 0 ? history[i] : '');
    }
  };

  return (
    <section className="term" aria-label="Interactive terminal">
      <div className="term__bar" aria-hidden="true">
        <span className="term__dots"><i /><i /><i /></span>
        <span className="term__title">tooba@portfolio</span>
      </div>

      <div className="term__screen" ref={screen} role="log" aria-live="polite">
        <p className="term__dim">Type a command, or tap one below. Try help.</p>
        {lines.length === 0 && <p className="term__dim">Screen cleared. Type help to see what you can ask.</p>}
        {lines.map((l) => (
          <div key={l.id} className="term__entry">
            <p className="term__cmd"><span aria-hidden="true">$</span> {l.cmd}</p>
            <div className="term__out">{l.out}</div>
          </div>
        ))}
      </div>

      <form className="term__form" onSubmit={onSubmit}>
        <label htmlFor="term-input" className="term__prompt">$</label>
        <input
          id="term-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck="false"
          placeholder="type a command"
          aria-label="Terminal command"
        />
      </form>

      <div className="term__chips">
        {quick.map((c) => (
          <button key={c} type="button" onClick={() => exec(c)}>{c}</button>
        ))}
      </div>
    </section>
  );
}
