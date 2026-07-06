import { useState } from 'react'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Divider from './Divider.jsx'
import ZoomableImage from './ZoomableImage.jsx'
import NavBar from './NavBar.jsx'
import './QuestionScreen.css'

function QuestionScreen({ title, summary, question, onBack, onConfirm }) {
  const isChoice = question.type === 'choice'
  const [answer, setAnswer] = useState(isChoice ? null : '')

  const nextDisabled = isChoice ? answer === null : answer.trim() === ''

  return (
    <div className="container">
      <h1>{title}</h1>
      <Divider />
      <p>{summary}</p>

      <Card>
        <h3>Frage</h3>
        <p>{question.text}</p>
        <ZoomableImage src={question.image} alt="Frage" />

        {isChoice ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
              marginTop: 'var(--space-4)',
            }}
          >
            {question.answers.map((option, index) => (
              <Button
                key={index}
                variant={answer === index ? 'primary' : 'secondary'}
                onClick={() => setAnswer(index)}
              >
                {option}
              </Button>
            ))}
          </div>
        ) : (
          <input
            type="text"
            inputMode={question.type === 'number' ? 'numeric' : 'text'}
            className="text-answer-input"
            placeholder="Eure Antwort"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        )}
      </Card>

      <NavBar onBack={onBack} onNext={() => onConfirm(answer)} nextDisabled={nextDisabled} />
    </div>
  )
}

export default QuestionScreen
