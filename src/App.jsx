import { useEffect, useState } from 'react'
import StartScreen from './screens/StartScreen.jsx'
import StepScreen from './screens/StepScreen.jsx'

function App() {
  const [steps, setSteps] = useState(null)
  const [error, setError] = useState(null)
  const [started, setStarted] = useState(false)
  const [stepIndex, setStepIndex] = useState(0)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/steps.json`)
      .then((res) => res.json())
      .then(setSteps)
      .catch((err) => setError(err.message))
  }, [])

  if (!started) {
    return <StartScreen loading={!steps && !error} error={error} onStart={() => setStarted(true)} />
  }

  if (stepIndex >= steps.length) {
    return (
      <div className="container" style={{ textAlign: 'center', paddingTop: 'var(--space-6)' }}>
        <h1>Geschafft (Platzhalter)</h1>
      </div>
    )
  }

  return (
    <StepScreen key={stepIndex} step={steps[stepIndex]} onComplete={() => setStepIndex((i) => i + 1)} />
  )
}

export default App
