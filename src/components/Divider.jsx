function Divider() {
  return (
    <svg
      viewBox="0 0 200 16"
      width="100%"
      height="16"
      role="presentation"
      style={{ display: 'block', margin: '16px 0', color: 'var(--color-brass)' }}
    >
      <line x1="0" y1="8" x2="85" y2="8" stroke="currentColor" strokeWidth="1" />
      <line x1="115" y1="8" x2="200" y2="8" stroke="currentColor" strokeWidth="1" />
      <path d="M92 8 L100 2 L108 8 L100 14 Z" fill="currentColor" />
    </svg>
  )
}

export default Divider
