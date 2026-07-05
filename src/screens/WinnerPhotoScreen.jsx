import { useEffect, useRef, useState } from 'react'
import Divider from '../components/Divider.jsx'
import Button from '../components/Button.jsx'
import './WinnerPhotoScreen.css'

const FRAME_SIZE = 900
const OUTER_INSET = 28
const INNER_INSET = 44

function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

function drawFrame(ctx) {
  ctx.save()
  ctx.strokeStyle = '#a9812f'
  ctx.lineWidth = 6
  roundRectPath(ctx, OUTER_INSET, OUTER_INSET, FRAME_SIZE - OUTER_INSET * 2, FRAME_SIZE - OUTER_INSET * 2, 28)
  ctx.stroke()

  ctx.lineWidth = 2
  ctx.globalAlpha = 0.7
  roundRectPath(ctx, INNER_INSET, INNER_INSET, FRAME_SIZE - INNER_INSET * 2, FRAME_SIZE - INNER_INSET * 2, 20)
  ctx.stroke()
  ctx.globalAlpha = 1

  const corners = [
    [OUTER_INSET, OUTER_INSET],
    [FRAME_SIZE - OUTER_INSET, OUTER_INSET],
    [OUTER_INSET, FRAME_SIZE - OUTER_INSET],
    [FRAME_SIZE - OUTER_INSET, FRAME_SIZE - OUTER_INSET],
  ]
  ctx.fillStyle = '#a9812f'
  corners.forEach(([x, y]) => {
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(Math.PI / 4)
    ctx.fillRect(-9, -9, 18, 18)
    ctx.restore()
  })
  ctx.restore()
}

function WinnerPhotoScreen() {
  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const mountedRef = useRef(true)
  const requestIdRef = useRef(0)
  const [status, setStatus] = useState('loading') // loading | live | error | captured
  const [errorMessage, setErrorMessage] = useState('')
  const [captured, setCaptured] = useState(null)

  const stopStream = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop())
    streamRef.current = null
  }

  const startCamera = async () => {
    // Supersede any request that is still in flight (StrictMode double-invoke,
    // rapid retries) so its result gets discarded instead of racing this one.
    stopStream()
    const requestId = ++requestIdRef.current

    setStatus('loading')
    setErrorMessage('')

    if (!navigator.mediaDevices?.getUserMedia) {
      setErrorMessage('Dieser Browser unterstützt keinen Kamerazugriff.')
      setStatus('error')
      return
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
        audio: false,
      })

      // If we've been unmounted or superseded while waiting on the
      // permission prompt, don't leave this stream's camera handle open.
      if (!mountedRef.current || requestId !== requestIdRef.current) {
        stream.getTracks().forEach((track) => track.stop())
        return
      }

      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
      setStatus('live')
    } catch (err) {
      if (!mountedRef.current || requestId !== requestIdRef.current) return
      setErrorMessage(err.message || 'Kamera nicht verfügbar.')
      setStatus('error')
    }
  }

  useEffect(() => {
    mountedRef.current = true
    startCamera()
    return () => {
      mountedRef.current = false
      requestIdRef.current += 1
      stopStream()
    }
  }, [])

  const handleCapture = () => {
    const video = videoRef.current
    if (!video) return

    const canvas = document.createElement('canvas')
    canvas.width = FRAME_SIZE
    canvas.height = FRAME_SIZE
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = '#ece1c4'
    ctx.fillRect(0, 0, FRAME_SIZE, FRAME_SIZE)

    const vw = video.videoWidth
    const vh = video.videoHeight
    const side = Math.min(vw, vh)
    const sx = (vw - side) / 2
    const sy = (vh - side) / 2

    const photoInset = INNER_INSET + 10
    const photoSize = FRAME_SIZE - photoInset * 2

    ctx.save()
    ctx.translate(photoInset + photoSize, photoInset)
    ctx.scale(-1, 1)
    ctx.drawImage(video, sx, sy, side, side, 0, 0, photoSize, photoSize)
    ctx.restore()

    drawFrame(ctx)

    setCaptured(canvas.toDataURL('image/png'))
    requestIdRef.current += 1
    stopStream()
    setStatus('captured')
  }

  const handleRetake = () => {
    setCaptured(null)
    startCamera()
  }

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <span className="eyebrow">Letzte Aufgabe</span>
      <h1>Euer Siegerfoto</h1>
      <Divider />

      <div className="photo-frame">
        {status === 'captured' && captured ? (
          <img src={captured} alt="Euer Siegerfoto" />
        ) : (
          <video ref={videoRef} autoPlay playsInline muted />
        )}
      </div>

      {status === 'error' && (
        <p style={{ color: 'var(--color-error)' }}>Kamera konnte nicht gestartet werden: {errorMessage}</p>
      )}

      <div style={{ marginTop: 'var(--space-5)' }}>
        {status === 'captured' ? (
          <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
            <div style={{ flex: 1 }}>
              <Button variant="secondary" onClick={handleRetake}>
                Neues Foto
              </Button>
            </div>
            <div style={{ flex: 1 }}>
              <a className="btn btn-primary" href={captured} download="london-city-race-siegerfoto.png">
                Bild speichern
              </a>
            </div>
          </div>
        ) : (
          <Button variant="primary" onClick={handleCapture} disabled={status !== 'live'}>
            Foto aufnehmen
          </Button>
        )}
        {status === 'error' && (
          <div style={{ marginTop: 'var(--space-3)' }}>
            <Button variant="secondary" onClick={startCamera}>
              Erneut versuchen
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default WinnerPhotoScreen
