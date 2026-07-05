import Button from './Button.jsx'

function ErrorScreen({ title, onRetry }) {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>{title}</h1>
      <svg
        viewBox="0 0 100 100"
        width="120"
        height="120"
        style={{ margin: 'var(--space-5) auto', display: 'block', color: 'var(--color-error)' }}
      >
        <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
        <line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
      </svg>
      <p>Das war leider nicht die richtige Antwort.</p>
      <Button variant="primary" onClick={onRetry}>
        Zurück zur Frage
      </Button>
    </div>
  )
}

export default ErrorScreen
