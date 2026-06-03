import { useState, useEffect, useRef } from 'react'
import product1 from '../assets/product-1.png'
import product2 from '../assets/product-2.jpg'
import product3 from '../assets/product-3.jpg'
import product4 from '../assets/product-4.jpg'

const COLLECTIONS = [
  {
    service: 'Custom Stitching',
    desc: 'Precision-cut garments crafted for leading fashion brands. Every seam is measured, every cut deliberate.',
    detail: 'MOQ 50 pieces · Delivery 3-4 weeks',
    bg: '#0F0A08',
    accent: '#B8965A',
    num: '01',
    img: product1,
  },
  {
    service: 'Premium Embroidery',
    desc: 'Luxurious hand-finished embroidery using Pakistan finest threads and premium quality fabrics.',
    detail: 'MOQ 10 pieces · Delivery 5-6 weeks',
    bg: '#0A080F',
    accent: '#C9A0B0',
    num: '02',
    img: product2,
  },
  {
    service: 'Bulk Manufacturing',
    desc: 'High volume production with consistent quality and fast turnaround for emerging fashion brands.',
    detail: 'MOQ 100 pieces · Delivery 2-3 weeks',
    bg: '#060810',
    accent: '#7A9FCC',
    num: '03',
    img: product3,
  },
  {
    service: 'Private Label',
    desc: 'Full white-label service — your brand, your labels, your packaging. Launch your complete product line.',
    detail: 'MOQ 30 pieces · Delivery 3-5 weeks',
    bg: '#060F06',
    accent: '#8FBF78',
    num: '04',
    img: product4,
  },
]

export default function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = sectionRef.current.offsetHeight
      const viewportH = window.innerHeight
      const scrolled = -rect.top / (sectionHeight - viewportH)
      const clamped = Math.max(0, Math.min(0.999, scrolled))
      const index = Math.min(COLLECTIONS.length - 1, Math.floor(clamped * COLLECTIONS.length))
      setActiveIndex(index)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const active = COLLECTIONS[activeIndex]

  const getCardStyle = (index) => {
    const diff = index - activeIndex
    const total = COLLECTIONS.length
    let d = diff
    if (d > total / 2) d -= total
    if (d < -total / 2) d += total

    if (d === 0) return {
      transform: `translateX(-50%) scale(${isMobile ? 1.05 : 1.45})`,
      filter: 'blur(0px)',
      opacity: 1,
      zIndex: 20,
      left: '50%',
      height: isMobile ? '58%' : '88%',
      bottom: isMobile ? '15%' : '2%',
    }
    if (d === -1) return {
      transform: 'translateX(-50%) scale(0.85)',
      filter: 'blur(3px)',
      opacity: 0.55,
      zIndex: 10,
      left: isMobile ? '14%' : '24%',
      height: isMobile ? '22%' : '36%',
      bottom: isMobile ? '26%' : '14%',
    }
    if (d === 1) return {
      transform: 'translateX(-50%) scale(0.85)',
      filter: 'blur(3px)',
      opacity: 0.55,
      zIndex: 10,
      left: isMobile ? '86%' : '76%',
      height: isMobile ? '22%' : '36%',
      bottom: isMobile ? '26%' : '14%',
    }
    return {
      transform: 'translateX(-50%) scale(0.7)',
      filter: 'blur(6px)',
      opacity: 0.2,
      zIndex: 5,
      left: '50%',
      height: isMobile ? '14%' : '22%',
      bottom: isMobile ? '26%' : '14%',
    }
  }

  return (
    <section
      ref={sectionRef}
      id="showcase"
      style={{ height: '400vh', position: 'relative' }}
    >
      <div style={{
        position: 'sticky', top: 0,
        height: '100vh', overflow: 'hidden',
        backgroundColor: active.bg,
        transition: 'background-color 700ms cubic-bezier(0.4,0,0.2,1)',
      }}>

        {/* Grain overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          pointerEvents: 'none', zIndex: 50, opacity: 0.25,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }} />

        {/* Top left — Brand */}
        <div style={{
          position: 'absolute', top: '28px',
          left: isMobile ? '20px' : '48px',
          zIndex: 60,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            marginBottom: '6px',
          }}>
            <div style={{ width: '24px', height: '1px', background: active.accent, transition: 'background 700ms ease' }} />
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '9px',
              letterSpacing: '0.35em', textTransform: 'uppercase',
              color: active.accent, transition: 'color 700ms ease',
            }}>Our Work</span>
          </div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: isMobile ? '18px' : '24px',
            color: 'var(--ivory)', letterSpacing: '0.08em',
          }}>ASYA TAILORS</div>
        </div>

        {/* Top right — service tag */}
        <div style={{
          position: 'absolute', top: '28px',
          right: isMobile ? '20px' : '48px',
          zIndex: 60,
          border: `1px solid ${active.accent}35`,
          padding: '8px 18px',
          transition: 'border-color 700ms ease',
        }}>
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '9px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: active.accent, transition: 'color 700ms ease',
          }}>{active.service}</span>
        </div>

        {/* Carousel Cards */}
        {COLLECTIONS.map((col, index) => {
          const style = getCardStyle(index)
          const isActive = index === activeIndex
          return (
            <div
              key={index}
              style={{
                position: 'absolute',
                aspectRatio: '0.65 / 1',
                ...style,
                transition: 'all 700ms cubic-bezier(0.4,0,0.2,1)',
                willChange: 'transform, opacity, filter',
              }}
            >
              <div style={{
                width: '100%', height: '100%',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Product image — no background */}
                <img
                  src={col.img}
                  alt="Product"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                    display: 'block',
                    draggable: false,
                    userSelect: 'none',
                    filter: isActive
                      ? `drop-shadow(0 20px 60px ${col.accent}40)`
                      : `drop-shadow(0 8px 20px rgba(0,0,0,0.4))`,
                    transition: 'filter 700ms ease',
                  }}
                />
              </div>
            </div>
          )
        })}

        {/* Bottom left — Content */}
        <div style={{
          position: 'absolute',
          bottom: isMobile ? '20px' : '72px',
          left: isMobile ? '20px' : '72px',
          zIndex: 60, maxWidth: isMobile ? '200px' : '320px',
        }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: isMobile ? '20px' : '30px',
            fontWeight: 400, color: 'var(--ivory)',
            letterSpacing: '0.03em', lineHeight: 1.1,
            marginBottom: isMobile ? '8px' : '12px',
            transition: 'all 500ms ease',
          }}>{active.service}</div>

          {!isMobile && (
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px', lineHeight: '1.75',
              color: 'rgba(245,240,232,0.60)',
              marginBottom: '14px',
              transition: 'all 500ms ease',
            }}>{active.desc}</p>
          )}

          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            marginBottom: isMobile ? '14px' : '22px',
          }}>
            <div style={{ width: '16px', height: '1px', background: active.accent, transition: 'background 700ms ease' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: isMobile ? '9px' : '10px',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: `${active.accent}cc`, transition: 'color 700ms ease',
            }}>{active.detail}</span>
          </div>

          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              fontFamily: 'var(--font-body)',
              fontSize: isMobile ? '10px' : '11px',
              fontWeight: 400, letterSpacing: '0.25em',
              textTransform: 'uppercase', textDecoration: 'none',
              color: 'var(--deep)',
              background: active.accent,
              padding: isMobile ? '11px 22px' : '14px 32px',
              transition: 'all 400ms ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.letterSpacing = '0.3em'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.letterSpacing = '0.25em'; }}
          >
            Get a Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Bottom right — progress */}
        <div style={{
          position: 'absolute',
          bottom: isMobile ? '20px' : '72px',
          right: isMobile ? '20px' : '48px',
          zIndex: 60,
          display: 'flex', flexDirection: 'column',
          alignItems: 'flex-end', gap: '16px',
        }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: isMobile ? '28px' : '52px',
            color: 'rgba(255,255,255,0.06)',
            lineHeight: 1, fontStyle: 'italic',
            transition: 'all 500ms ease',
          }}>{active.num}</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            {COLLECTIONS.map((_, i) => (
              <div key={i} style={{
                width: '4px',
                height: i === activeIndex ? '28px' : '4px',
                borderRadius: '2px',
                background: i === activeIndex ? active.accent : 'rgba(255,255,255,0.2)',
                transition: 'all 500ms cubic-bezier(0.4,0,0.2,1)',
              }} />
            ))}
          </div>

          <div style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '6px',
            opacity: activeIndex === COLLECTIONS.length - 1 ? 0 : 0.35,
            transition: 'opacity 500ms ease',
          }}>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '8px',
              letterSpacing: '0.3em', color: 'var(--ivory)',
              textTransform: 'uppercase', writingMode: 'vertical-rl',
            }}>Scroll</span>
            <div style={{
              width: '1px', height: '32px',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
              animation: 'float 2s ease-in-out infinite',
            }} />
          </div>
        </div>

        {/* Bottom progress bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '2px', background: 'rgba(255,255,255,0.06)', zIndex: 60,
        }}>
          <div style={{
            height: '100%',
            width: `${((activeIndex + 1) / COLLECTIONS.length) * 100}%`,
            background: active.accent,
            transition: 'width 700ms cubic-bezier(0.4,0,0.2,1), background 700ms ease',
          }} />
        </div>
      </div>
    </section>
  )
}