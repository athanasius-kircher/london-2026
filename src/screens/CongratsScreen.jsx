import Divider from '../components/Divider.jsx'
import Button from '../components/Button.jsx'
import './CongratsScreen.css'

function CongratsScreen({ onNext }) {
  return (
    <div className="container" style={{ textAlign: 'center', paddingTop: 'var(--space-6)' }}>
      <span className="eyebrow">Der Fall ist gelöst</span>
      <h1>Herzlichen Glückwunsch!</h1>
      <Divider />

      <svg className="stamp-seal" viewBox="0 0 120 120" role="presentation">
        <circle cx="60" cy="60" r="52" fill="#7a2426" stroke="#a9812f" strokeWidth="6" />
        <circle cx="60" cy="60" r="40" fill="none" stroke="#ece1c4" strokeWidth="2" opacity="0.6" />
        <path
          d="M38 62 L52 76 L84 42"
          fill="none"
          stroke="#ece1c4"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p>Ihr habt alle Hinweise gefunden und jedes Rätsel gelöst. Die Stadt hält keine Geheimnisse mehr vor euch.</p>
      <p>Zum Abschluss wartet noch eine letzte Aufgabe: euer Siegerfoto.</p>

      <div style={{ marginTop: 'var(--space-5)' }}>
        <Button variant="primary" onClick={onNext}>
          Weiter zum Siegerfoto
        </Button>
      </div>
    </div>
  )
}

export default CongratsScreen
