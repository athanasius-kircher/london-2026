import Button from '../components/Button.jsx'
import Divider from '../components/Divider.jsx'

function StartScreen({ loading, error, onStart }) {
  return (
    <div className="container" style={{ textAlign: 'center', paddingTop: 'var(--space-6)' }}>
      <span className="eyebrow">London City Race</span>
      <h1>Auf zur Stadtrallye</h1>
      <Divider />
      <p>Folgt den Hinweisen durch die Stadt und löst jedes Rätsel unterwegs.</p>

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
