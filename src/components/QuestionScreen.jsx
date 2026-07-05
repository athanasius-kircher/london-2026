import Card from './Card.jsx'
import Button from './Button.jsx'
import Divider from './Divider.jsx'
import ZoomableImage from './ZoomableImage.jsx'

function QuestionScreen({ title, summary, question, onSelect }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <Divider />
      <p>{summary}</p>

      <Card>
        <h3>Frage</h3>
        <p>{question.text}</p>
        <ZoomableImage src={question.image} alt="Frage" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
            marginTop: 'var(--space-4)',
          }}
        >
          {question.answers.map((answer, index) => (
            <Button key={index} variant="secondary" onClick={() => onSelect(index)}>
              {answer}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default QuestionScreen
