import Icon from './Icons.jsx';

/** Links styled as buttons. External links open in a new tab and show a small arrow. */
export default function Button({ href, variant = 'primary', size, children, ...rest }) {
  const external = href && /^https?:/.test(href);
  const cls = ['btn', `btn--${variant}`, size && `btn--${size}`].filter(Boolean).join(' ');
  return (
    <a
      className={cls}
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      {...rest}
    >
      {children}
      {external && (
        <>
          <Icon name="external" size={14} />
          <span className="visually-hidden"> (opens in a new tab)</span>
        </>
      )}
    </a>
  );
}
