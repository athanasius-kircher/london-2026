import Divider from './Divider.jsx'
import ZoomableImage from './ZoomableImage.jsx'
import Button from './Button.jsx'

function ResultScreen({ title, result, onNext }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <Divider />
      <p>{result.text}</p>
      <ZoomableImage src={result.image} alt={title} />
      <div style={{ marginTop: 'var(--space-5)' }}>
        <Button variant="primary" onClick={onNext}>
          Weiter
        </Button>
      </div>
    </div>
  )
}

export default ResultScreen
