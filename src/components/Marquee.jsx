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
    }}>
      <div style={{
        display: 'flex',
        animation: 'marquee 28s linear infinite',
        width: 'max-content',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '10px', fontWeight: 400,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#FAF7F2',
            padding: '0 20px',
            whiteSpace: 'nowrap',
          }}>{item}</span>
        ))}
      </div>
    </div>
  )
}
