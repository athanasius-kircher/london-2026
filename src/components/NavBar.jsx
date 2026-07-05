import Button from './Button.jsx'

function NavBar({ onBack, onNext, nextLabel = 'Weiter', backLabel = 'Zurück', nextDisabled = false }) {
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
        <Button variant="primary" onClick={onNext} disabled={nextDisabled}>
          {nextLabel}
        </Button>
      </div>
    </div>
  )
}

export default NavBar
