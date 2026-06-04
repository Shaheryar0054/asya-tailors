export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      background: '#1A1208',
      padding: '72px 80px 40px',
      borderTop: '1px solid rgba(180,140,80,0.15)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '48px', marginBottom: '64px' }} className="footer-grid">
          <div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 500, color: '#FAF7F2', letterSpacing: '0.05em' }}>ASYA</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '9px', letterSpacing: '0.35em', color: 'var(--gold)', textTransform: 'uppercase', marginTop: '2px' }}>TAILORS · PAKISTAN</div>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: '1.8', color: 'rgba(250,247,242,0.5)', maxWidth: '240px' }}>
              Premium garment manufacturing for fashion brands across Pakistan and beyond.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              {['IG', 'FB', 'LI'].map(s => (
                <a key={s} href="#" style={{
                  fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.1em',
                  color: 'rgba(250,247,242,0.4)', textDecoration: 'none',
                  padding: '7px 12px', border: '1px solid rgba(180,140,80,0.2)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(180,140,80,0.2)'; e.currentTarget.style.color = 'rgba(250,247,242,0.4)'; }}
                >{s}</a>
              ))}
            </div>
          </div>

          {[
            { title: 'Services', items: ['Custom Stitching', 'Bulk Manufacturing', 'Sample Development', 'Private Label', 'Fabric Sourcing'] },
            { title: 'Company', items: ['About Us', 'Our Process', 'Portfolio', 'Careers', 'Contact'] },
          ].map(({ title, items }) => (
            <div key={title}>
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '9px', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '20px' }}>{title}</h4>
              {items.map(s => (
                <a key={s} href="#" style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(250,247,242,0.45)', textDecoration: 'none', marginBottom: '10px', transition: 'color 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = '#FAF7F2'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,247,242,0.45)'}
                >{s}</a>
              ))}
            </div>
          ))}

          <div>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '9px', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '20px' }}>Contact</h4>
            {['Islamabad, Punjab', 'Pakistan', '', 'asyatailors@gmail.com', '+92 315 0505488'].map((s, i) =>
              s ? <div key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(250,247,242,0.45)', marginBottom: '10px' }}>{s}</div>
                : <div key={i} style={{ marginBottom: '10px' }} />
            )}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '32px', borderTop: '1px solid rgba(180,140,80,0.08)', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'rgba(250,247,242,0.25)', letterSpacing: '0.1em' }}>© {year} Asya Tailors. All rights reserved.</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'rgba(250,247,242,0.25)', letterSpacing: '0.1em' }}>Crafted with care in Pakistan 🇵🇰</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } footer { padding: 60px 28px 32px !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
