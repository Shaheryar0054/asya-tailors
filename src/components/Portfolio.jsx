const categories = [
  'Formal Wear', 'Casual Wear', 'Denim', 'Activewear',
  'Outerwear', 'Ethnic Fusion', 'Bridal', 'Streetwear',
]

const testimonials = [
  {
    quote: 'Asya Tailors helped us launch our debut collection on time and under budget. The quality exceeded what we expected at this price point.',
    name: 'Zara K.',
    brand: 'Founder, Manzil Studio',
    location: 'Lahore',
  },
  {
    quote: 'We moved our entire production to Asya after struggling with inconsistent quality elsewhere. Night and day difference. They truly care.',
    name: 'Ahmed R.',
    brand: 'Creative Director, Rawaf Label',
    location: 'Karachi',
  },
  {
    quote: 'As a UK-based brand sourcing from Pakistan, I needed reliability above all. Asya delivers exactly that — every single time.',
    name: 'Sara M.',
    brand: 'CEO, Celeste Collective',
    location: 'London',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" style={{
      background: 'var(--deep)',
      padding: '120px 80px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Categories */}
        <div style={{ marginBottom: '100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }}/>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '10px',
              letterSpacing: '0.35em', color: 'var(--gold)',
              textTransform: 'uppercase',
            }}>We Stitch</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 400, color: 'var(--ivory)',
            marginBottom: '48px', lineHeight: 1.05,
          }}>Every Category,<br/><span style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Every Style</span></h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {categories.map((cat, i) => (
              <div key={cat} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px', letterSpacing: '0.15em',
                color: i % 3 === 0 ? 'var(--deep)' : 'var(--sand)',
                background: i % 3 === 0 ? 'var(--gold)' : 'transparent',
                border: '1px solid rgba(184,150,90,0.3)',
                padding: '12px 24px',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--gold)'
                e.currentTarget.style.color = 'var(--deep)'
                e.currentTarget.style.borderColor = 'var(--gold)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = i % 3 === 0 ? 'var(--gold)' : 'transparent'
                e.currentTarget.style.color = i % 3 === 0 ? 'var(--deep)' : 'var(--sand)'
                e.currentTarget.style.borderColor = 'rgba(184,150,90,0.3)'
              }}
              >{cat}</div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }}/>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '10px',
              letterSpacing: '0.35em', color: 'var(--gold)',
              textTransform: 'uppercase',
            }}>Client Voices</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }} className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{
                border: '1px solid rgba(184,150,90,0.15)',
                padding: '40px 32px',
                position: 'relative',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(184,150,90,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(184,150,90,0.15)'}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '64px', lineHeight: 0.7,
                  color: 'var(--gold)', opacity: 0.3,
                  marginBottom: '20px',
                }}>"</div>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '17px', lineHeight: '1.7',
                  color: 'var(--ivory)', fontStyle: 'italic',
                  marginBottom: '32px',
                }}>{t.quote}</p>
                <div style={{
                  paddingTop: '24px',
                  borderTop: '1px solid rgba(184,150,90,0.15)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px', fontWeight: 400,
                    color: 'var(--gold-light)',
                  }}>{t.name}</div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px', color: 'var(--text-muted)',
                    marginTop: '4px',
                  }}>{t.brand} · {t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonial-grid { grid-template-columns: 1fr !important; }
          #portfolio { padding: 80px 28px !important; }
        }
      `}</style>
    </section>
  )
}
