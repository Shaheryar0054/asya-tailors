import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', brand: '', email: '', phone: '', service: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
  e.preventDefault()
  const msg =
    `*New Inquiry - Asya Tailors*%0A%0A` +
    `*Name:* ${form.name}%0A` +
    `*Brand:* ${form.brand}%0A` +
    `*Email:* ${form.email}%0A` +
    `*Phone:* ${form.phone}%0A` +
    `*Service:* ${form.service}%0A` +
    `*Message:* ${form.message}`

  window.open(`https://wa.me/923150505488?text=${msg}`, '_blank')
  setSubmitted(true)
}

  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(184,150,90,0.25)',
    padding: '14px 0',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    color: 'var(--ivory)',
    fontWeight: 300,
    letterSpacing: '0.02em',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  }

  const labelStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '9px',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: 'var(--gold)',
    display: 'block',
    marginBottom: '4px',
  }

  return (
    <section id="contact" style={{
      background: 'var(--charcoal)',
      padding: '120px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '40%', height: '100%',
        background: 'linear-gradient(135deg, transparent 60%, rgba(184,150,90,0.04))',
        pointerEvents: 'none',
      }}/>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '80px',
          alignItems: 'start',
        }} className="contact-grid">

          {/* Left: Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }}/>
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '10px',
                letterSpacing: '0.35em', color: 'var(--gold)',
                textTransform: 'uppercase',
              }}>Get In Touch</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 4.5vw, 60px)',
              fontWeight: 400, color: 'var(--ivory)',
              lineHeight: 1.1, marginBottom: '32px',
            }}>
              Let's Build<br/>
              <span style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Your Brand</span>
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px', lineHeight: '1.9',
              color: 'var(--text-muted)',
              marginBottom: '56px',
            }}>
              Whether you have a full tech pack or just a rough idea — we'd love 
              to hear from you. Our team responds within 24 hours.
            </p>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {[
                { label: 'Address', value: 'Islamabad, Pakistan' },
                { label: 'Email', value: 'asyatailors@gmail.com' },
                { label: 'Phone', value: '+92 315 0505488' },
                { label: 'Working Hours', value: 'Mon – Sat: 11am – 9pm PKT' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <span style={labelStyle}>{label}</span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px', color: 'var(--ivory)',
                    fontWeight: 300,
                  }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            background: 'rgba(44,31,20,0.6)',
            border: '1px solid rgba(184,150,90,0.12)',
            padding: '56px 48px',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '64px', color: 'var(--gold)',
                  marginBottom: '20px',
                }}>✓</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '32px', fontWeight: 400,
                  color: 'var(--ivory)', marginBottom: '16px',
                }}>Message Sent</h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px', color: 'var(--text-muted)',
                  lineHeight: 1.8,
                }}>
                  Thank you for reaching out. Our team will<br/>
                  be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 32px' }}>
                  {/* Name */}
                  <div style={{ marginBottom: '32px' }}>
                    <label style={labelStyle}>Your Name</label>
                    <input name="name" value={form.name} onChange={handleChange}
                      required placeholder="Aisha Khan"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderBottomColor = 'var(--gold)'}
                      onBlur={e => e.target.style.borderBottomColor = 'rgba(184,150,90,0.25)'}
                    />
                  </div>

                  {/* Brand */}
                  <div style={{ marginBottom: '32px' }}>
                    <label style={labelStyle}>Brand Name</label>
                    <input name="brand" value={form.brand} onChange={handleChange}
                      placeholder="Your Brand"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderBottomColor = 'var(--gold)'}
                      onBlur={e => e.target.style.borderBottomColor = 'rgba(184,150,90,0.25)'}
                    />
                  </div>

                  {/* Email */}
                  <div style={{ marginBottom: '32px' }}>
                    <label style={labelStyle}>Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange}
                      required placeholder="you@brand.com"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderBottomColor = 'var(--gold)'}
                      onBlur={e => e.target.style.borderBottomColor = 'rgba(184,150,90,0.25)'}
                    />
                  </div>

                  {/* Phone */}
                  <div style={{ marginBottom: '32px' }}>
                    <label style={labelStyle}>Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+92 300 0000000"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderBottomColor = 'var(--gold)'}
                      onBlur={e => e.target.style.borderBottomColor = 'rgba(184,150,90,0.25)'}
                    />
                  </div>
                </div>

                {/* Service */}
                <div style={{ marginBottom: '32px' }}>
                  <label style={labelStyle}>Service Needed</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderBottomColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderBottomColor = 'rgba(184,150,90,0.25)'}
                  >
                    <option value="" disabled style={{ background: 'var(--deep)' }}>Select a service</option>
                    {['Custom Stitching', 'Bulk Manufacturing', 'Sample Development', 'Private Label', 'Fabric Sourcing', 'Brand Consultation'].map(s => (
                      <option key={s} value={s} style={{ background: 'var(--deep)' }}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '48px' }}>
                  <label style={labelStyle}>Tell Us About Your Project</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    rows={4} placeholder="Describe your garment type, quantities, timeline..."
                    style={{ ...inputStyle, resize: 'none', lineHeight: 1.7 }}
                    onFocus={e => e.target.style.borderBottomColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderBottomColor = 'rgba(184,150,90,0.25)'}
                  />
                </div>

                <button type="submit" style={{
                  width: '100%',
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px', fontWeight: 400,
                  letterSpacing: '0.3em', textTransform: 'uppercase',
                  color: 'var(--deep)',
                  background: 'var(--gold)',
                  border: 'none', cursor: 'pointer',
                  padding: '18px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.letterSpacing = '0.35em'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.letterSpacing = '0.3em'; }}
                >Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          #contact { padding: 80px 28px !important; }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(122,106,88,0.5);
        }
      `}</style>
    </section>
  )
}
