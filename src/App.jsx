import Card from './components/Card.jsx'
import Button from './components/Button.jsx'
import Divider from './components/Divider.jsx'

const swatches = [
  { name: 'Paper', var: '--color-paper' },
  { name: 'Paper Dark', var: '--color-paper-dark' },
  { name: 'Ink', var: '--color-ink' },
  { name: 'Ink Soft', var: '--color-ink-soft' },
  { name: 'Accent', var: '--color-accent' },
  { name: 'Brass', var: '--color-brass' },
  { name: 'Navy', var: '--color-navy' },
]

function App() {
  return (
    <div className="container">
      <span className="eyebrow">Station 3 von 12</span>
      <h1>Das verborgene Zeichen</h1>
      <Divider />

      <Card>
        <h2>Einführung</h2>
        <p>
          An dieser Stelle verbirgt sich ein Hinweis im Straßenbild. Schaut euch die Fassaden
          genau an — nicht alles ist, wie es scheint.
        </p>
      </Card>

      <Card>
        <h3>Frage</h3>
        <p>Wie viele Löwen bewachen den Platz vor euch?</p>
        <Button variant="primary">Antwort bestätigen</Button>
        <div style={{ height: 'var(--space-2)' }} />
        <Button variant="secondary">Foto aufnehmen</Button>
      </Card>

      <Divider />

      <h3>Farbpalette</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
          gap: '8px',
          marginBottom: 'var(--space-4)',
        }}
      >
        {swatches.map((s) => (
          <div key={s.var} style={{ textAlign: 'center' }}>
            <div
              style={{
                background: `var(${s.var})`,
                height: 56,
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(0,0,0,0.15)',
              }}
            />
            <span style={{ fontSize: '0.75rem', color: 'var(--color-ink-soft)' }}>{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
