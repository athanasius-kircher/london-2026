import Divider from './Divider.jsx'
import ZoomableImage from './ZoomableImage.jsx'
import NavBar from './NavBar.jsx'
import './TextImageScreen.css'

function TextImageScreen({ title, text, image, onBack, onNext, mapsUrl }) {
  return (
    <div className="container">
      <div className="text-image-header">
        <h1>{title}</h1>
        {mapsUrl && (
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="info-icon"
            aria-label="Ort in Maps öffnen"
          >
            i
          </a>
        )}
      </div>
      <Divider />
      <p>{text}</p>
      <ZoomableImage src={image} alt={title} />
      <NavBar onBack={onBack} onNext={onNext} />
    </div>
  )
}

export default TextImageScreen
