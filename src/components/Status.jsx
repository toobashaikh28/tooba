/** One component for every feedback message: pending, success, warning and error. */
export default function Status({ type = 'pending', children }) {
  const role = type === 'error' ? 'alert' : 'status';
  return (
    <div className={`status status--${type}`} role={role}>
      {type === 'pending' && <span className="status__spinner" aria-hidden="true" />}
      {children}
    </div>
  );
}
