import { useState, useEffect, useRef } from 'react'
import aboutImg from '../assets/about-final.png'
import bannerImg from '../assets/banner.png' // 1. Image import ki

export default function About() {
  const [counts, setCounts] = useState({ brands: 0, years: 0, pieces: 0 })
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const targets = { brands: 500, years: 12, pieces: 50 }
          const duration = 2000
          const steps = 60
          const interval = duration / steps

          let step = 0
          const timer = setInterval(() => {
            step++
            const progress = step / steps
            const ease = 1 - Math.pow(1 - progress, 3)
            setCounts({
              brands: Math.floor(ease * targets.brands),
              years: Math.floor(ease * targets.years),
              pieces: Math.floor(ease * targets.pieces),
            })
            if (step >= steps) {
              setCounts({ brands: 500, years: 12, pieces: 50 })
              clearInterval(timer)
            }
          }, interval)

          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    // Section style mein ye change karein:
    <section id="about" style={{
      // 0.95 ki jagah 0.85 ya 0.70 karein taake overlay halka ho jaye
      backgroundImage: `linear-gradient(rgba(250, 248, 245, 0.7), rgba(250, 248, 245, 0.7)), url(${bannerImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', // Ye zaroori hai
      padding: '120px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative large letter */}
      <div style={{
        position: 'absolute', right: '-20px', top: '-40px',
        fontFamily: 'var(--font-display)',
        fontSize: '280px', fontWeight: 600,
        color: 'transparent',
        WebkitTextStroke: '1px rgba(184,150,90,0.1)',
        lineHeight: 1, pointerEvents: 'none',
        userSelect: 'none',
      }}>A</div>

      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }} className="about-grid">

        {/* Left: Image */}
        <div style={{ position: 'relative' }}>
          <div style={{
            width: '100%', aspectRatio: '3/4',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <img
              src={aboutImg}
              alt="Asya Tailors Workshop"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
            {/* Corner accents */}
            {[
              { top: '24px', left: '24px' },
              { top: '24px', right: '24px' },
              { bottom: '24px', left: '24px' },
              { bottom: '24px', right: '24px' },
            ].map((pos, i) => (
              <div key={i} style={{
                position: 'absolute', ...pos,
                width: '20px', height: '20px',
                borderTop: i < 2 ? '1px solid var(--gold)' : 'none',
                borderBottom: i >= 2 ? '1px solid var(--gold)' : 'none',
                borderLeft: i % 2 === 0 ? '1px solid var(--gold)' : 'none',
                borderRight: i % 2 === 1 ? '1px solid var(--gold)' : 'none',
                opacity: 0.7,
              }} />
            ))}
          </div>

          {/* Offset badge — Count Up */}
          <div ref={statsRef} style={{
            position: 'absolute', bottom: '-24px', right: '-24px',
            background: 'var(--gold)', padding: '28px',
            textAlign: 'center',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '32px', fontWeight: 500,
              color: 'var(--deep)', lineHeight: 1,
            }}>{counts.brands}+</div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '8px', letterSpacing: '0.25em',
              color: 'var(--deep)', textTransform: 'uppercase',
              marginTop: '4px',
            }}>Happy Brands</div>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '16px',
            marginBottom: '32px',
          }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--clay)' }} />
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '10px',
              letterSpacing: '0.35em', color: 'var(--clay)',
              textTransform: 'uppercase',
            }}>Our Story</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: 400, lineHeight: 1.1,
            color: 'var(--deep)',
            marginBottom: '32px',
          }}>
            Pakistan's Craft<br />
            <span style={{ fontStyle: 'italic', color: 'var(--clay)' }}>in Every Thread</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px', lineHeight: '1.9',
            color: 'var(--charcoal)', fontWeight: 300,
            marginBottom: '24px',
          }}>
            Asya Tailors was founded with a single purpose: to empower fashion brands —
            established or just beginning — with world-class garment manufacturing
            rooted in Pakistan's legendary textile heritage.
          </p>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px', lineHeight: '1.9',
            color: 'var(--text-muted)', fontWeight: 300,
            marginBottom: '40px',
          }}>
            Whether you're launching your first collection or scaling an existing line,
            we handle everything from sampling to full bulk production — with
            uncompromising attention to quality and fit.
          </p>

          {/* Extra Stats Row */}
          <div style={{
            display: 'flex', gap: '40px',
            paddingTop: '32px', paddingBottom: '32px',
            borderTop: '1px solid rgba(160,120,80,0.15)',
            borderBottom: '1px solid rgba(160,120,80,0.15)',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}>
            {[
              { count: counts.brands, suffix: '+', label: 'Brands Served' },
              { count: counts.years, suffix: '+', label: 'Years of Craft' },
              { count: counts.pieces, suffix: 'K+', label: 'Pieces / Month' },
            ].map(({ count, suffix, label }) => (
              <div key={label}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '36px', fontWeight: 500,
                  color: 'var(--clay)', lineHeight: 1,
                }}>{count}{suffix}</div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '9px', letterSpacing: '0.25em',
                  color: 'var(--text-muted)', textTransform: 'uppercase',
                  marginTop: '6px',
                }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Feature list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              'In-house design consultation',
              'Low MOQ for new brands',
              'Sustainable fabric sourcing',
              'On-time delivery guarantee',
            ].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '6px', height: '6px',
                  background: 'var(--gold)', borderRadius: '50%', flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px', color: 'var(--charcoal)',
                  letterSpacing: '0.02em',
                }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          #about {
            padding: 80px 28px !important;
            background-attachment: scroll !important; /* Mobile par parallax disable karna behtar hai */
          }
        }
      `}</style>
    </section>
  )
}