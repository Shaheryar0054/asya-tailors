export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: '#0E0905',
      padding: '72px 80px 40px',
      borderTop: '1px solid rgba(184,150,90,0.1)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '64px',
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28px', fontWeight: 500,
                color: 'var(--ivory)', letterSpacing: '0.05em',
              }}>ASYA</div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '9px', letterSpacing: '0.35em',
                color: 'var(--gold)', textTransform: 'uppercase',
                marginTop: '2px',
              }}>TAILORS · PAKISTAN</div>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px', lineHeight: '1.8',
              color: 'var(--text-muted)', maxWidth: '240px',
            }}>
              Premium garment manufacturing for fashion brands across Pakistan and beyond.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '28px' }}>
              {['IG', 'FB', 'LI'].map(s => (
                <a key={s} href="#" style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '10px', letterSpacing: '0.1em',
                  color: 'var(--text-muted)', textDecoration: 'none',
                  padding: '7px 12px',
                  border: '1px solid rgba(184,150,90,0.2)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(184,150,90,0.2)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '9px', letterSpacing: '0.3em',
              color: 'var(--gold)', textTransform: 'uppercase',
              marginBottom: '20px',
            }}>Services</h4>
            {['Custom Stitching', 'Bulk Manufacturing', 'Sample Development', 'Private Label', 'Fabric Sourcing'].map(s => (
              <a key={s} href="#services" style={{
                display: 'block', fontFamily: 'var(--font-body)',
                fontSize: '13px', color: 'var(--text-muted)',
                textDecoration: 'none', marginBottom: '10px',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--ivory)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >{s}</a>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '9px', letterSpacing: '0.3em',
              color: 'var(--gold)', textTransform: 'uppercase',
              marginBottom: '20px',
            }}>Company</h4>
            {['About Us', 'Our Process', 'Portfolio', 'Careers', 'Contact'].map(s => (
              <a key={s} href={`#${s.toLowerCase().split(' ')[0]}`} style={{
                display: 'block', fontFamily: 'var(--font-body)',
                fontSize: '13px', color: 'var(--text-muted)',
                textDecoration: 'none', marginBottom: '10px',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--ivory)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >{s}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '9px', letterSpacing: '0.3em',
              color: 'var(--gold)', textTransform: 'uppercase',
              marginBottom: '20px',
            }}>Contact</h4>
            {[
              'Lahore, Punjab',
              'Pakistan',
              '',
              'hello@asyatailors.pk',
              '+92 300 1234567',
            ].map((s, i) => s ? (
              <div key={i} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px', color: 'var(--text-muted)',
                marginBottom: '10px',
              }}>{s}</div>
            ) : <div key={i} style={{ marginBottom: '10px' }}/>)}
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: '32px',
          borderTop: '1px solid rgba(184,150,90,0.08)',
          flexWrap: 'wrap', gap: '16px',
        }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px', color: 'rgba(122,106,88,0.5)',
            letterSpacing: '0.1em',
          }}>© {year} Asya Tailors. All rights reserved.</span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px', color: 'rgba(122,106,88,0.5)',
            letterSpacing: '0.1em',
          }}>Crafted with care in Pakistan 🇵🇰</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          footer { padding: 60px 28px 32px !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
