const items = [
  'Fashion Forward', '✦', 'Pakistan Craft', '✦',
  'Premium Stitching', '✦', 'Brand Ready', '✦',
  'Bulk Manufacturing', '✦', 'Custom Labels', '✦',
  'Quality Assured', '✦', 'Fast Turnaround', '✦',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div style={{
      background: 'var(--gold)',
      padding: '14px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        display: 'flex', gap: '0',
        animation: 'marquee 28s linear infinite',
        width: 'max-content',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '10px',
            fontWeight: 400,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--deep)',
            padding: '0 20px',
            whiteSpace: 'nowrap',
          }}>{item}</span>
        ))}
      </div>
    </div>
  )
}
