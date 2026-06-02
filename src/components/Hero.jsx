import { useEffect, useRef, useState } from 'react'
import heroVideo from '../assets/asya-tailors.mp4'
import heroVideoMobile from '../assets/asya-tailors.mp4'

export default function Hero() {
  const grainRef = useRef(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const canvas = grainRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animId
    const drawGrain = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      for (let i = 0; i < imageData.data.length; i += 4) {
        const val = Math.random() * 30
        imageData.data[i] = val
        imageData.data[i + 1] = val
        imageData.data[i + 2] = val
        imageData.data[i + 3] = 18
      }
      ctx.putImageData(imageData, 0, 0)
      animId = setTimeout(drawGrain, 80)
    }
    drawGrain()
    return () => clearTimeout(animId)
  }, [])

  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden',
      background: '#0A0502',
    }}>

      {/* Background Video */}
      <video
        key={isMobile ? 'mobile' : 'desktop'}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: isMobile ? 'center center' : 'center top',
          zIndex: 0,
        }}
      >
        <source src={isMobile ? heroVideoMobile : heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: isMobile
          ? 'linear-gradient(180deg, rgba(10,5,2,0.50) 0%, rgba(10,5,2,0.30) 50%, rgba(10,5,2,0.55) 100%)'
          : 'linear-gradient(135deg, rgba(10,5,2,0.45) 0%, rgba(28,18,8,0.30) 55%, rgba(10,5,2,0.45) 100%)',
      }} />

      {/* Grain overlay */}
      <canvas ref={grainRef} style={{
        position: 'absolute', inset: 0, opacity: 0.25,
        pointerEvents: 'none', zIndex: 2,
      }} />

      {/* Decorative circles — desktop only */}
      {!isMobile && <>
        <div style={{
          position: 'absolute', right: '-10%', top: '50%',
          transform: 'translateY(-50%)',
          width: '600px', height: '600px', borderRadius: '50%',
          border: '1px solid rgba(184,150,90,0.12)',
          animation: 'float 8s ease-in-out infinite',
          zIndex: 2,
        }} />
        <div style={{
          position: 'absolute', right: '-5%', top: '50%',
          transform: 'translateY(-50%)',
          width: '440px', height: '440px', borderRadius: '50%',
          border: '1px solid rgba(184,150,90,0.08)',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '1s',
          zIndex: 2,
        }} />
      </>}

      {/* Gold vertical line */}
      <div style={{
        position: 'absolute', left: isMobile ? '24px' : '48px',
        top: '140px', bottom: '80px',
        width: '1px',
        background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)',
        opacity: 0.35, zIndex: 2,
      }} />

      {/* Main content */}
      <div style={{
        position: 'relative', zIndex: 3,
        padding: isMobile ? '120px 28px 80px 28px' : '140px 80px 100px 80px',
        maxWidth: '1200px',
        width: '100%',
      }}>
        {/* Eyebrow */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '16px',
          marginBottom: '32px',
          animation: 'fadeUp 0.7s ease 0.2s both',
        }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '10px',
            letterSpacing: '0.4em', color: 'var(--gold)',
            textTransform: 'uppercase', fontWeight: 400,
          }}>Est. Islamabad, Pakistan</span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          fontSize: isMobile ? 'clamp(48px, 14vw, 72px)' : 'clamp(56px, 8vw, 110px)',
          lineHeight: '0.95',
          color: 'var(--ivory)',
          marginBottom: '0',
          animation: 'fadeUp 0.9s ease 0.4s both',
        }}>
          <span style={{ display: 'block' }}>Where</span>
          <span style={{
            display: 'block',
            color: 'transparent',
            WebkitTextStroke: '1px var(--gold)',
            fontStyle: 'italic',
          }}>Vision</span>
          <span style={{ display: 'block' }}>Meets Stitch</span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
          fontSize: isMobile ? '14px' : '15px',
          lineHeight: '1.8',
          color: 'var(--sand)',
          maxWidth: isMobile ? '100%' : '460px',
          marginTop: '32px',
          marginBottom: '40px',
          letterSpacing: '0.02em',
          animation: 'fadeUp 0.9s ease 0.6s both',
        }}>
          Premium garment manufacturing for fashion brands and emerging labels.
          We bring your designs to life with precision tailoring rooted in
          Pakistan's finest craft traditions.
        </p>

        {/* CTA Group */}
        <div style={{
          display: 'flex', gap: '16px',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap',
          animation: 'fadeUp 0.9s ease 0.8s both',
        }}>
          <a href="#contact" style={{
            fontFamily: 'var(--font-body)', fontSize: '11px',
            fontWeight: 400, letterSpacing: '0.25em',
            textTransform: 'uppercase', textDecoration: 'none',
            color: 'var(--deep)', background: 'var(--gold)',
            padding: '16px 40px', display: 'inline-block',
            textAlign: 'center',
            transition: 'all 0.35s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--ivory)'; e.currentTarget.style.color = 'var(--deep)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--deep)'; }}
          >Start Your Brand</a>

          <a href="#services" style={{
            fontFamily: 'var(--font-body)', fontSize: '11px',
            fontWeight: 400, letterSpacing: '0.25em',
            textTransform: 'uppercase', textDecoration: 'none',
            color: 'var(--ivory)',
            padding: '16px 40px', display: 'inline-block',
            textAlign: 'center',
            border: '1px solid rgba(245,240,232,0.3)',
            transition: 'all 0.35s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,240,232,0.3)'; e.currentTarget.style.color = 'var(--ivory)'; }}
          >View Services</a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: isMobile ? '32px' : '60px',
          marginTop: isMobile ? '48px' : '80px',
          paddingTop: '40px',
          borderTop: '1px solid rgba(184,150,90,0.15)',
          animation: 'fadeUp 0.9s ease 1s both',
          flexWrap: 'wrap',
        }}>
          {[
            { num: '500+', label: 'Brands Served' },
            { num: '12+', label: 'Years of Craft' },
            { num: '50K+', label: 'Pieces / Month' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: isMobile ? '32px' : '42px',
                fontWeight: 500,
                color: 'var(--gold-light)', lineHeight: 1,
              }}>{num}</div>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: '10px',
                letterSpacing: '0.25em', color: 'var(--text-muted)',
                textTransform: 'uppercase', marginTop: '8px',
              }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%',
        transform: 'translateX(-50%)', zIndex: 3,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        animation: 'fadeIn 1s ease 1.5s both',
      }}>
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: '9px',
          letterSpacing: '0.3em', color: 'var(--text-muted)',
          textTransform: 'uppercase',
        }}>Scroll</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--gold), transparent)',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  )
}