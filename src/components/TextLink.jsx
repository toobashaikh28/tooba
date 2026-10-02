import Icon from './Icons.jsx';

export default function TextLink({ href, children, ...rest }) {
  const external = /^https?:/.test(href);
  return (
    <a
      className="text-link"
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      {...rest}
    >
      {children}
      {external && (
        <>
          <Icon name="external" size={13} />
          <span className="visually-hidden"> (opens in a new tab)</span>
        </>
      )}
    </a>
  );
}
