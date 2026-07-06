import { useState } from 'react'
import TextImageScreen from '../components/TextImageScreen.jsx'
import QuestionScreen from '../components/QuestionScreen.jsx'
import ErrorScreen from '../components/ErrorScreen.jsx'
import ResultScreen from '../components/ResultScreen.jsx'

function isAnswerCorrect(question, answer) {
  if (question.type === 'choice') {
    return answer === question.rightAnswer
  }
  return String(answer).trim().toLowerCase() === String(question.correctAnswer).trim().toLowerCase()
}

function StepScreen({ step, onComplete }) {
  const [phase, setPhase] = useState('intro')
  const hasQuestion = Boolean(step.question)

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
        mapsUrl={step.navigation.mapsUrl}
        onBack={() => setPhase('intro')}
        onNext={() => setPhase(hasQuestion ? 'question' : 'result')}
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
        onConfirm={(answer) => setPhase(isAnswerCorrect(step.question, answer) ? 'result' : 'error')}
      />
    )
  }

  if (phase === 'error') {
    return <ErrorScreen title={step.title} onRetry={() => setPhase('question')} />
  }

  return <ResultScreen title={step.title} result={step.result} onNext={onComplete} />
}

export default StepScreen
