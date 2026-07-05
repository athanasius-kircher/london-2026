import Button from './Button.jsx'

function NavBar({ onBack, onNext, nextLabel = 'Weiter', backLabel = 'Zurück' }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-5)' }}>
      {onBack && (
        <div style={{ flex: 1 }}>
          <Button variant="secondary" onClick={onBack}>
            {backLabel}
          </Button>
        </div>
      )}
      <div style={{ flex: 1 }}>
        <Button variant="primary" onClick={onNext}>
          {nextLabel}
        </Button>
      </div>
    </div>
  )
}

export default NavBar
