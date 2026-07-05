import Divider from './Divider.jsx'
import ZoomableImage from './ZoomableImage.jsx'
import NavBar from './NavBar.jsx'

function TextImageScreen({ title, text, image, onBack, onNext }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <Divider />
      <p>{text}</p>
      <ZoomableImage src={image} alt={title} />
      <NavBar onBack={onBack} onNext={onNext} />
    </div>
  )
}

export default TextImageScreen
