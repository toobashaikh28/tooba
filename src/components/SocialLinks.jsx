import Icon from './Icons.jsx';
import { socials } from '../data/content.js';

/** One row of icon + label links. Used in the hero and the footer. */
export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`social ${className}`.trim()}>
      {socials.map((s) => {
        const external = /^https?:/.test(s.url);
        return (
          <li key={s.id}>
            <a
              className="social__link"
              href={s.url}
              {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
            >
              <Icon name={s.icon} />
              {s.label}
              {external && <span className="visually-hidden"> (opens in a new tab)</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
