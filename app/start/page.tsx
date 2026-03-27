'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Start() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [firstMemory, setFirstMemory] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async () => {
    if (!email || !name) return
    try {
      await fetch('/api/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, firstMemory }),
      })
    } catch (_) {}
    setSubmitted(true)
  }

  return (
    <>
      <nav className="nav">
        <div className="nav-logo"><Link href="/">✦ Augmented Memories</Link></div>
        <div className="nav-links"><Link href="/pricing">Pricing</Link></div>
      </nav>

      <main style={{ maxWidth: 560, margin: '0 auto', padding: '5rem 2rem', textAlign: 'center' }}>
        {submitted ? (
          <div>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✦</div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '1rem' }}>Your archive has begun</h1>
            <p style={{ color: 'var(--mid)', lineHeight: 1.8, marginBottom: '2rem' }}>
              We've saved your first memory, <strong>{name}</strong>.<br />
              Your archive link will arrive at <strong>{email}</strong> shortly.
            </p>
            <Link href="/" className="btn-secondary">Back to Home</Link>
          </div>
        ) : (
          <div>
            <p className="section-label">Begin your archive</p>
            <div className="divider" />
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', marginBottom: '1rem' }}>
              Every archive starts<br />with one memory
            </h1>
            <p style={{ color: 'var(--mid)', marginBottom: '3rem', lineHeight: 1.8 }}>
              Tell us your name, your email, and one memory. We'll handle the rest.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'left' }}>
              {[
                { label: 'Your name', val: name, set: setName, placeholder: 'e.g. Margaret Wilson' },
                { label: 'Your email', val: email, set: setEmail, placeholder: 'margaret@example.com' },
              ].map(f => (
                <div key={f.label}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--sepia-dark)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>{f.label}</label>
                  <input type="text" value={f.val} onChange={e => f.set(e.target.value)} placeholder={f.placeholder}
                    style={{ width: '100%', padding: '0.85rem 1rem', border: '1.5px solid var(--border)', borderRadius: 4, fontSize: '0.95rem', fontFamily: 'Lato, sans-serif', color: 'var(--ink)', outline: 'none', background: 'var(--card)' }} />
                </div>
              ))}
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--sepia-dark)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Your first memory (optional)</label>
                <textarea value={firstMemory} onChange={e => setFirstMemory(e.target.value)}
                  placeholder="Describe a moment you'd like to preserve — a childhood afternoon, a family dinner, a place you loved..."
                  rows={4}
                  style={{ width: '100%', padding: '0.85rem 1rem', border: '1.5px solid var(--border)', borderRadius: 4, fontSize: '0.92rem', fontFamily: 'Lato, sans-serif', color: 'var(--ink)', outline: 'none', background: 'var(--card)', resize: 'vertical', lineHeight: 1.7 }} />
              </div>
              <button onClick={handleSubmit} className="btn-primary" style={{ fontSize: '0.95rem', padding: '0.9rem', marginTop: '0.25rem' }}>
                Begin My Archive →
              </button>
            </div>

            <p style={{ color: 'var(--mid)', fontSize: '0.75rem', marginTop: '1.5rem' }}>
              Your memories are private. We never share or sell your data.
            </p>
          </div>
        )}
      </main>
      <footer><p>© 2025 Tech 4 Humanity Pty Ltd</p></footer>
    </>
  )
}
