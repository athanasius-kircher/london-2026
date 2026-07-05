import { useState } from 'react'
import TextImageScreen from '../components/TextImageScreen.jsx'
import QuestionScreen from '../components/QuestionScreen.jsx'
import ErrorScreen from '../components/ErrorScreen.jsx'
import ResultScreen from '../components/ResultScreen.jsx'

function StepScreen({ step, onComplete }) {
  const [phase, setPhase] = useState('intro')

  if (phase === 'intro') {
    return (
      <TextImageScreen
        title={step.title}
        text={step.intro.text}
        image={step.intro.image}
        onNext={() => setPhase('navigation')}
      />
    )
  }

  if (phase === 'navigation') {
    return (
      <TextImageScreen
        title={step.title}
        text={step.navigation.text}
        image={step.navigation.image}
        onBack={() => setPhase('intro')}
        onNext={() => setPhase('question')}
      />
    )
  }

  if (phase === 'question') {
    return (
      <QuestionScreen
        title={step.title}
        summary={step.summary}
        question={step.question}
        onBack={() => setPhase('navigation')}
        onConfirm={(index) => setPhase(index === step.question.rightAnswer ? 'result' : 'error')}
      />
    )
  }

  if (phase === 'error') {
    return <ErrorScreen title={step.title} onRetry={() => setPhase('question')} />
  }

  return <ResultScreen title={step.title} result={step.result} onNext={onComplete} />
}

export default StepScreen
