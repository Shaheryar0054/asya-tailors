import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['About', 'Services', 'Process', 'Portfolio', 'Contact']

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '16px 48px' : '28px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(44,31,20,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(184,150,90,0.15)' : 'none',
        transition: 'all 0.5s ease',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '22px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            color: 'var(--ivory)',
          }}>ASYA</span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '9px',
            fontWeight: 300,
            letterSpacing: '0.35em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
          }}>TAILORS · PAKISTAN</span>
        </div>

        {/* Desktop Nav */}
        <ul style={{
          display: 'flex', gap: '40px', listStyle: 'none',
          '@media (max-width: 768px)': { display: 'none' }
        }} className="desktop-nav">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.2em',
                color: 'var(--white)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold-light)'}
              onMouseLeave={e => e.target.style.color = 'var(--sand)'}
              >{link}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '10px',
          fontWeight: 400,
          letterSpacing: '0.25em',
          color: 'var(--deep)',
          background: 'var(--gold)',
          textDecoration: 'none',
          textTransform: 'uppercase',
          padding: '11px 28px',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => { e.target.style.background = 'var(--gold-light)'; e.target.style.letterSpacing = '0.3em'; }}
        onMouseLeave={e => { e.target.style.background = 'var(--gold)'; e.target.style.letterSpacing = '0.25em'; }}
        >Get Quote</a>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          flexDirection: 'column', gap: '5px', padding: '4px',
        }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: '24px', height: '1px',
              background: 'var(--gold)',
              transition: 'all 0.3s ease',
            }}/>
          ))}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(44,31,20,0.98)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '40px',
        }}>
          <button onClick={() => setMenuOpen(false)} style={{
            position: 'absolute', top: '28px', right: '28px',
            background: 'none', border: 'none', color: 'var(--gold)',
            fontSize: '28px', cursor: 'pointer',
          }}>×</button>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '36px', fontWeight: 400,
                color: 'var(--ivory)', textDecoration: 'none',
                letterSpacing: '0.05em',
              }}>
              {link}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
