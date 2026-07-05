import { useEffect, useState } from 'react'
import Button from '../components/Button.jsx'
import Divider from '../components/Divider.jsx'

function StartScreen() {
  const [steps, setSteps] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/steps.json`)
      .then((res) => res.json())
      .then(setSteps)
      .catch((err) => setError(err.message))
  }, [])

  const isLoading = !steps && !error

  return (
    <div className="container" style={{ textAlign: 'center', paddingTop: 'var(--space-6)' }}>
      <span className="eyebrow">London City Race</span>
      <h1>Auf zur Stadtrallye</h1>
      <Divider />
      <p>Folgt den Hinweisen durch die Stadt und löst jedes Rätsel unterwegs.</p>

      {error && <p style={{ color: 'var(--color-error)' }}>Fehler beim Laden: {error}</p>}

      <div style={{ marginTop: 'var(--space-5)' }}>
        <Button variant="primary" disabled={isLoading} onClick={() => {}}>
          {isLoading ? 'Wird geladen…' : 'Jetzt loslegen'}
        </Button>
      </div>
    </div>
  )
}

export default StartScreen
