import Button from '../components/Button.jsx'
import Divider from '../components/Divider.jsx'

function StartScreen({ loading, error, onStart }) {
  return (
    <div className="container" style={{ textAlign: 'center', paddingTop: 'var(--space-6)' }}>
      <span className="eyebrow">London City Race</span>
      <h1>Bereit für euer großes Abenteuer?</h1>
      <Divider />
      <p>
        Werdet zu Detektiven und entdeckt die Geheimnisse Londons! An jeder Station wartet ein
        neues Rätsel — findet alle Hinweise und kommt eurem Ziel Schritt für Schritt näher.
      </p>

      {error && <p style={{ color: 'var(--color-error)' }}>Fehler beim Laden: {error}</p>}

      <div style={{ marginTop: 'var(--space-5)' }}>
        <Button variant="primary" disabled={loading} onClick={onStart}>
          {loading ? 'Wird geladen…' : 'Jetzt loslegen'}
        </Button>
      </div>
    </div>
  )
}

export default StartScreen
