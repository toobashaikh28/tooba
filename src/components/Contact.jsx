import { useEffect, useRef, useState } from 'react';
import Section from './Section.jsx';
import TextLink from './TextLink.jsx';
import Button from './Button.jsx';
import Status from './Status.jsx';
import { contact as copy, profile, sectionTitles } from '../data/content.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v) {
  const errors = {};
  if (!v.name.trim()) errors.name = 'Enter your name.';
  if (!v.email.trim()) errors.email = 'Enter your email address.';
  else if (!EMAIL_RE.test(v.email.trim())) errors.email = 'Enter a valid email address, like name@example.com.';
  if (v.message.trim().length < 10) errors.message = 'Write at least a sentence so I know what this is about.';
  return errors;
}

export default function Contact() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { type, text, canCopy }
  const timer = useRef(0);
  const formRef = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  // There is no backend: the form opens the visitor's email app with the message filled in.
  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const found = validate(data);
    setErrors(found);
    setStatus(null);

    const firstInvalid = ['name', 'email', 'message'].find((k) => found[k]);
    if (firstInvalid) {
      formRef.current.elements[firstInvalid].focus();
      return;
    }

    const subject = `Message from ${data.name.trim()}`;
    const body = `${data.message.trim()}\n\n${data.name.trim()}\n${data.email.trim()}`;
    setStatus({ type: 'pending', text: 'Opening your email app…' });
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // If the page is still in front after a moment, no email app opened. Offer another way.
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (document.hidden) return;
      setStatus({
        type: 'warning',
        canCopy: true,
        text: 'No email app opened. Copy my address and send your message from your own email instead.',
      });
    }, 2500);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus({ type: 'success', text: `Copied ${profile.email} to your clipboard.` });
    } catch {
      setStatus({ type: 'error', text: `Could not copy automatically. My address is ${profile.email}.` });
    }
  };

  const field = (key) => ({
    'aria-invalid': errors[key] ? 'true' : undefined,
    'aria-describedby': errors[key] ? `c-${key}-error` : undefined,
  });

  return (
    <Section id="contact" title={sectionTitles.contact} tint>
      <div className="contact">
        <div className="contact__intro">
          <h3 className="h3">{copy.heading}</h3>
          <p className="contact__sub">{copy.intro}</p>
          <p className="contact__availability"><span aria-hidden="true" />{copy.availability}</p>
          <p className="contact__email">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <ul className="contact__links">
            <li><TextLink href={profile.linkedin}>LinkedIn</TextLink></li>
            <li><TextLink href={profile.github}>GitHub</TextLink></li>
          </ul>
          <div className="contact__actions">
            <Button href={profile.resume} variant="outline" download={profile.resumeFilename}>{copy.resumeCta}</Button>
          </div>
        </div>

        <form className="form" ref={formRef} onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="c-name">Your name</label>
            <input id="c-name" name="name" type="text" autoComplete="name" {...field('name')} />
            {errors.name && <p id="c-name-error" className="field__error">{errors.name}</p>}
          </div>
          <div className="field">
            <label htmlFor="c-email">Your email</label>
            <input id="c-email" name="email" type="email" autoComplete="email" {...field('email')} />
            {errors.email && <p id="c-email-error" className="field__error">{errors.email}</p>}
          </div>
          <div className="field">
            <label htmlFor="c-message">Message</label>
            <textarea id="c-message" name="message" rows="5" {...field('message')} />
            {errors.message && <p id="c-message-error" className="field__error">{errors.message}</p>}
          </div>
          <button type="submit" className="btn btn--primary">Send message</button>

          {status && (
            <Status type={status.type}>
              <span>{status.text}</span>
              {status.canCopy && (
                <button type="button" className="btn btn--secondary" onClick={copyEmail}>Copy email address</button>
              )}
            </Status>
          )}
        </form>
      </div>
    </Section>
  );
}
