import { useState } from 'react'

function ZoomableImage({ src, alt = '' }) {
  const [zoomed, setZoomed] = useState(false)

  if (!src) return null

  const resolvedSrc = /^(https?:)?\/\//.test(src) ? src : `${import.meta.env.BASE_URL}${src}`

  return (
    <>
      <img
        src={resolvedSrc}
        alt={alt}
        onClick={() => setZoomed(true)}
        style={{
          display: 'block',
          width: '100%',
          marginTop: 'var(--space-4)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(169, 129, 47, 0.4)',
          cursor: 'zoom-in',
        }}
      />
      {zoomed && (
        <div
          onClick={() => setZoomed(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(20, 16, 12, 0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--space-4)',
            cursor: 'zoom-out',
          }}
        >
          <img
            src={resolvedSrc}
            alt={alt}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          />
        </div>
      )}
    </>
  )
}

export default ZoomableImage
