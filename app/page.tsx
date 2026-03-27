'use client'
import Link from 'next/link'

const features = [
  { icon: '📖', title: 'Your Stories, Structured', desc: 'Write, speak, or upload. We turn raw memories into a beautiful, searchable archive.' },
  { icon: '🔍', title: 'AI-Powered Search', desc: 'Your family can ask questions and receive answers drawn from your own words and memories.' },
  { icon: '📸', title: 'Photo & Media Integration', desc: 'Connect photos, videos, and documents. Every memory becomes richer and fuller.' },
  { icon: '👨‍👩‍👧', title: 'Family Sharing', desc: 'Invite family members to contribute, explore, and add their own perspective.' },
  { icon: '🔒', title: 'Private by Default', desc: 'You control exactly who sees what. Nothing is shared without your explicit permission.' },
  { icon: '♾️', title: 'Preserved Forever', desc: 'Your archive lives beyond you. Future generations can explore your life in your own words.' },
]

const quotes = [
  { text: 'The stories we leave behind are the greatest gift we give our children.', attr: '— Unknown' },
  { text: 'Memory is the treasury and guardian of all things.', attr: '— Cicero' },
]

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="nav-logo">✦ Augmented Memories</div>
        <div className="nav-links">
          <Link href="/demo">Demo</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/start">Start</Link>
          <Link href="/start" className="btn-primary">Begin Your Archive</Link>
        </div>
      </nav>

      <main>
        {/* Hero — editorial, full bleed */}
        <section style={{
          background: 'linear-gradient(160deg, var(--parchment) 0%, var(--cream) 100%)',
          borderBottom: '1px solid var(--border)',
          padding: '7rem 2rem 6rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', border: '1px solid var(--border)', opacity: 0.5 }} />
          <div style={{ position: 'absolute', bottom: -120, left: -60, width: 300, height: 300, borderRadius: '50%', border: '1px solid var(--border)', opacity: 0.4 }} />

          <p className="section-label">A living archive of your life</p>
          <div className="divider" />
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 700, color: 'var(--ink)', marginBottom: '1.5rem', maxWidth: 800, margin: '0 auto 1.5rem' }}>
            Your life,<br />
            <em style={{ color: 'var(--sepia)', fontStyle: 'italic' }}>searchable forever.</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--mid)', maxWidth: 540, margin: '0 auto 3rem', lineHeight: 1.8 }}>
            Turn your stories, experiences, and memories into a beautiful AI-powered archive your family can explore — now and for generations to come.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/start" className="btn-primary" style={{ fontSize: '0.95rem', padding: '0.85rem 2.2rem' }}>Begin Your Archive →</Link>
            <Link href="/demo" className="btn-secondary" style={{ fontSize: '0.95rem', padding: '0.85rem 2.2rem' }}>See a Demo</Link>
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap' }}>
            {['From $29', 'Private by default', 'Preserved forever'].map(t => (
              <span key={t} style={{ fontSize: '0.82rem', color: 'var(--mid)', letterSpacing: '0.05em' }}>✦ {t}</span>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section style={{ background: 'var(--sepia-dark)', padding: '4rem 2rem', textAlign: 'center' }}>
          <blockquote style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontStyle: 'italic', color: 'var(--gold-light)', maxWidth: 640, margin: '0 auto', lineHeight: 1.6 }}>
            "{quotes[0].text}"
          </blockquote>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', marginTop: '1.25rem', letterSpacing: '0.08em' }}>{quotes[0].attr}</p>
        </section>

        {/* Features */}
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '6rem 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-label">What's inside</p>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)' }}>Everything a memory needs to last</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '2rem' }}>
            {features.map(f => (
              <div key={f.title} style={{ borderTop: '2px solid var(--border)', paddingTop: '1.75rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--sepia-dark)' }}>{f.title}</h3>
                <p style={{ color: 'var(--mid)', fontSize: '0.92rem', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Offer tiers */}
        <section style={{ background: 'var(--parchment)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '5rem 2rem' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-label">Start your archive</p>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', marginBottom: '3rem' }}>One memory at a time</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.5rem' }}>
              {[
                { name: 'Memory Profile', price: '$29', period: '', desc: 'Create your first memory collection. Perfect for a single life chapter.', cta: 'Begin', href: '/start?plan=profile' },
                { name: 'Full Archive', price: '$199', period: '', desc: 'Your complete life story — structured, searchable, and beautifully preserved.', cta: 'Create Archive', href: '/start?plan=archive', featured: true },
                { name: 'Ongoing AI', price: '$9', period: '/mo', desc: 'Continuous AI interaction. Your family can ask questions and receive answers from your archive.', cta: 'Subscribe', href: '/start?plan=ongoing' },
              ].map(p => (
                <div key={p.name} style={{
                  background: 'var(--card)', border: `1.5px solid ${p.featured ? 'var(--gold)' : 'var(--border)'}`,
                  borderRadius: 8, padding: '2.5rem 2rem', position: 'relative',
                }}>
                  {p.featured && <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: 'var(--gold)', color: 'white', fontSize: '0.68rem', fontWeight: 700, padding: '0.2rem 0.9rem', borderRadius: 50, whiteSpace: 'nowrap', letterSpacing: '0.06em' }}>MOST COMPLETE</div>}
                  <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--mid)', marginBottom: '0.5rem', fontFamily: 'Lato, sans-serif' }}>{p.name}</div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.6rem', fontWeight: 700, color: 'var(--sepia-dark)', marginBottom: '0.25rem' }}>
                    {p.price}<span style={{ fontSize: '1rem', fontFamily: 'Lato, sans-serif', color: 'var(--mid)' }}>{p.period}</span>
                  </div>
                  <p style={{ color: 'var(--mid)', fontSize: '0.88rem', marginBottom: '1.75rem', lineHeight: 1.65 }}>{p.desc}</p>
                  <Link href={p.href} className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>{p.cta}</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ padding: '6rem 2rem', textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <p className="section-label">Begin today</p>
          <div className="divider" />
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Don't wait until the memories fade</h2>
          <p style={{ color: 'var(--mid)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
            Every day is a story worth keeping. Start your archive today and give your family a gift that lasts forever.
          </p>
          <Link href="/start" className="btn-primary" style={{ fontSize: '0.95rem', padding: '0.9rem 2.5rem' }}>Begin Your Archive →</Link>
        </section>

        <div className="cross-sell">
          <h3>Also from Tech 4 Humanity</h3>
          <div className="cross-sell-links">
            <a href="https://ai4tradies.org">AI for Tradies</a>
            <a href="https://readingbuddy.ai">Reading Buddy</a>
            <a href="https://outcome-ready.vercel.app">Outcome Ready</a>
          </div>
        </div>
      </main>
      <footer><p>© 2025 Tech 4 Humanity Pty Ltd (ABN 61 605 746 618) · <a href="mailto:hello@augmentedmemories.org" style={{ color: 'var(--sepia)' }}>hello@augmentedmemories.org</a></p></footer>
    </>
  )
}
