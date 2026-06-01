const services = [
  {
    num: '01',
    title: 'Custom Stitching',
    desc: 'From casual wear to couture — we stitch any garment type to your exact specifications, patterns, and measurements.',
    tags: ['Formal', 'Casual', 'Couture'],
  },
  {
    num: '02',
    title: 'Bulk Manufacturing',
    desc: 'Scale your brand with confidence. We handle high-volume orders with consistent quality across every unit produced.',
    tags: ['50–50,000 pcs', 'Quality Control', 'Export Ready'],
  },
  {
    num: '03',
    title: 'Sample Development',
    desc: 'Bring your sketches and tech packs to life. We create production-ready samples before committing to full runs.',
    tags: ['Proto Samples', 'Size Sets', 'Fit Approval'],
  },
  {
    num: '04',
    title: 'Private Label',
    desc: 'Full white-label service: your brand, your labels, your packaging. Launch a complete product line under your name.',
    tags: ['Brand Labels', 'Hang Tags', 'Custom Packaging'],
  },
  {
    num: '05',
    title: 'Fabric Sourcing',
    desc: "Access Pakistan's finest mills for premium fabrics — cotton, linen, silk blends, denim, and technical textiles.",
    tags: ['Cotton', 'Linen', 'Silk Blends'],
  },
  {
    num: '06',
    title: 'Brand Consultation',
    desc: 'New to fashion? Our team guides you through every step — from concept to product — helping your brand launch right.',
    tags: ['New Brands', 'Strategy', 'Production Planning'],
  },
]

export default function Services() {
  return (
    <section id="services" style={{
      background: 'var(--deep)',
      padding: '120px 80px',
      position: 'relative',
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-end', marginBottom: '80px',
        flexWrap: 'wrap', gap: '32px',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }}/>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '10px',
              letterSpacing: '0.35em', color: 'var(--gold)',
              textTransform: 'uppercase',
            }}>What We Do</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 400, color: 'var(--ivory)',
            lineHeight: 1.05,
          }}>
            Full-Service<br/>
            <span style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Garment Studio</span>
          </h2>
        </div>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px', lineHeight: '1.8',
          color: 'var(--text-muted)', maxWidth: '320px',
        }}>
          Every service designed to bring your brand's vision to market — 
          from first sketch to final shipment.
        </p>
      </div>

      {/* Service Grid */}
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px',
        background: 'rgba(184,150,90,0.15)',
      }} className="services-grid">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
          #services { padding: 80px 28px !important; }
        }
      `}</style>
    </section>
  )
}

function ServiceCard({ num, title, desc, tags }) {
  return (
    <div style={{
      background: 'var(--deep)',
      padding: '48px 40px',
      position: 'relative',
      transition: 'background 0.4s ease',
      cursor: 'default',
      overflow: 'hidden',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = '#231710'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = 'var(--deep)'
    }}
    >
      {/* Number */}
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '64px', fontWeight: 300,
        color: 'rgba(184,150,90,0.1)',
        lineHeight: 1,
        position: 'absolute', top: '24px', right: '32px',
      }}>{num}</div>

      {/* Gold top line */}
      <div style={{
        width: '32px', height: '2px',
        background: 'var(--gold)',
        marginBottom: '32px',
      }}/>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '26px', fontWeight: 400,
        color: 'var(--ivory)', marginBottom: '16px',
      }}>{title}</h3>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '13px', lineHeight: '1.8',
        color: 'var(--text-muted)', marginBottom: '28px',
      }}>{desc}</p>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {tags.map(tag => (
          <span key={tag} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '9px', letterSpacing: '0.2em',
            color: 'var(--gold)', textTransform: 'uppercase',
            padding: '5px 12px',
            border: '1px solid rgba(184,150,90,0.25)',
          }}>{tag}</span>
        ))}
      </div>
    </div>
  )
}
