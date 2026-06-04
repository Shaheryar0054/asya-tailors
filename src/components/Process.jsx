const steps = [
  { step: '01', title: 'Consultation', desc: 'Share your vision, references, and requirements. We understand your brand DNA before we touch a single thread.' },
  { step: '02', title: 'Design & Tech Pack', desc: 'Our team creates or reviews your tech packs, selecting materials and construction methods suited to your garments.' },
  { step: '03', title: 'Sampling', desc: 'We produce a prototype for your review. Adjustments are made until the fit, finish, and feel are exactly right.' },
  { step: '04', title: 'Production', desc: 'Once approved, we move into full production. Every unit is quality-checked against your approved sample.' },
  { step: '05', title: 'Quality Control', desc: 'A rigorous multi-point QC process ensures every garment meets international standards before packing.' },
  { step: '06', title: 'Delivery', desc: 'Your order is packed, labeled, and dispatched. We offer local delivery across Pakistan and international shipping.' },
]

export default function Process() {
  return (
    <section id="process" style={{
      background: 'var(--cream)',
      padding: '120px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', left: '-20px', bottom: '-60px',
        fontFamily: 'var(--font-display)',
        fontSize: '220px', fontWeight: 600,
        color: 'transparent',
        WebkitTextStroke: '1px rgba(160,112,48,0.06)',
        lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
        whiteSpace: 'nowrap',
      }}>Process</div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--clay)' }}/>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.35em', color: 'var(--clay)', textTransform: 'uppercase' }}>How It Works</span>
            <div style={{ width: '40px', height: '1px', background: 'var(--clay)' }}/>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5vw, 60px)',
            fontWeight: 400, color: '#1A1A1A', lineHeight: 1.05,
          }}>
            From Concept to<br/>
            <span style={{ fontStyle: 'italic', color: 'var(--clay)' }}>Finished Garment</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px 40px' }} className="process-grid">
          {steps.map((s, i) => (
            <div key={i} style={{ position: 'relative', paddingTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '48px', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, opacity: 0.5 }}>{s.step}</span>
                <div style={{ width: '20px', height: '1px', background: 'var(--clay)', marginBottom: '8px' }}/>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 400, color: '#1A1A1A', marginBottom: '12px' }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: '1.8', color: 'var(--text-muted)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .process-grid { grid-template-columns: repeat(2, 1fr) !important; } #process { padding: 80px 28px !important; } }
        @media (max-width: 560px) { .process-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
