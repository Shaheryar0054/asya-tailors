import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', brand: '', email: '', phone: '', service: '', message: '' })
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
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: '1px solid rgba(160,112,48,0.25)',
    padding: '14px 0', fontFamily: 'var(--font-body)',
    fontSize: '14px', color: '#1A1A1A', fontWeight: 300,
    letterSpacing: '0.02em', outline: 'none',
    transition: 'border-color 0.3s ease',
  }
  const labelStyle = {
    fontFamily: 'var(--font-body)', fontSize: '9px',
    letterSpacing: '0.3em', textTransform: 'uppercase',
    color: 'var(--clay)', display: 'block', marginBottom: '4px',
  }

  return (
    <section id="contact" style={{ background: 'var(--cream)', padding: '120px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'start' }} className="contact-grid">

          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
              <div style={{ width: '32px', height: '1px', background: 'var(--clay)' }}/>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.35em', color: 'var(--clay)', textTransform: 'uppercase' }}>Get In Touch</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 4.5vw, 58px)', fontWeight: 400, color: '#1A1A1A', lineHeight: 1.1, marginBottom: '28px' }}>
              Let's Build<br/>
              <span style={{ fontStyle: 'italic', color: 'var(--clay)' }}>Your Brand</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '1.9', color: 'var(--text-muted)', marginBottom: '48px' }}>
              Whether you have a full tech pack or just a rough idea — we'd love to hear from you. Our team responds within 24 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { label: 'Address', value: 'Islamabad, Pakistan' },
                { label: 'Email', value: 'asyatailors@gmail.com' },
                { label: 'Phone', value: '+92 315 0505488' },
                { label: 'Working Hours', value: 'Mon – Sat: 11am – 9pm PKT' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <span style={labelStyle}>{label}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#1A1A1A', fontWeight: 300 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ background: '#FAF7F2', border: '1px solid rgba(160,112,48,0.15)', padding: '56px 48px', boxShadow: '0 8px 48px rgba(160,112,48,0.06)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '64px', color: 'var(--gold)', marginBottom: '20px' }}>✓</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 400, color: '#1A1A1A', marginBottom: '16px' }}>Message Sent</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                  Thank you for reaching out.<br/>We will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 32px' }}>
                  {[
                    { name: 'name', label: 'Your Name', placeholder: 'Aisha Khan', required: true },
                    { name: 'brand', label: 'Brand Name', placeholder: 'Your Brand' },
                    { name: 'email', label: 'Email', placeholder: 'you@brand.com', type: 'email', required: true },
                    { name: 'phone', label: 'Phone', placeholder: '+92 300 0000000' },
                  ].map(({ name, label, placeholder, type, required }) => (
                    <div key={name} style={{ marginBottom: '28px' }}>
                      <label style={labelStyle}>{label}</label>
                      <input name={name} value={form[name]} onChange={handleChange}
                        type={type || 'text'} required={required} placeholder={placeholder}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderBottomColor = 'var(--gold)'}
                        onBlur={e => e.target.style.borderBottomColor = 'rgba(160,112,48,0.25)'}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label style={labelStyle}>Service Needed</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderBottomColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderBottomColor = 'rgba(160,112,48,0.25)'}
                  >
                    <option value="" disabled>Select a service</option>
                    {['Custom Stitching', 'Bulk Manufacturing', 'Sample Development', 'Private Label', 'Fabric Sourcing', 'Brand Consultation'].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: '40px' }}>
                  <label style={labelStyle}>Tell Us About Your Project</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    rows={4} placeholder="Describe your garment type, quantities, timeline..."
                    style={{ ...inputStyle, resize: 'none', lineHeight: 1.7 }}
                    onFocus={e => e.target.style.borderBottomColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderBottomColor = 'rgba(160,112,48,0.25)'}
                  />
                </div>

                <button type="submit" style={{
                  width: '100%', fontFamily: 'var(--font-body)',
                  fontSize: '11px', fontWeight: 400,
                  letterSpacing: '0.3em', textTransform: 'uppercase',
                  color: '#FAF7F2', background: 'var(--gold)',
                  border: 'none', cursor: 'pointer', padding: '18px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--clay)'; e.currentTarget.style.letterSpacing = '0.35em'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.letterSpacing = '0.3em'; }}
                >Send via WhatsApp</button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; } #contact { padding: 80px 28px !important; } }
        input::placeholder, textarea::placeholder { color: rgba(107,94,80,0.4); }
      `}</style>
    </section>
  )
}
