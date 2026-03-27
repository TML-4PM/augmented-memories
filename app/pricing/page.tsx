'use client'
import Link from 'next/link'

const plans = [
  {
    name: 'Memory Profile', price: '$29', period: '', desc: 'Your first chapter.',
    features: ['1 memory collection (up to 50 entries)', 'AI-structured narrative', 'Family sharing (up to 3 people)', 'PDF export', 'Searchable by your family'],
    cta: 'Begin', href: '/start?plan=profile',
  },
  {
    name: 'Full Archive', price: '$199', period: '', desc: 'Your complete life story.',
    features: ['Unlimited memory collections', 'AI-structured narrative across all chapters', 'Unlimited family sharing', 'Photo & media integration', 'Full search + AI Q&A', 'PDF + web archive export'],
    cta: 'Create Archive', href: '/start?plan=archive', featured: true,
  },
  {
    name: 'Ongoing Memory AI', price: '$9', period: '/mo', desc: 'Living, breathing archive.',
    features: ['Everything in Full Archive', 'Continuous AI conversation', 'New memory entries anytime', 'Family can ask questions directly', 'Annual printed book (optional +$49)'],
    cta: 'Subscribe', href: '/start?plan=ongoing',
  },
]

export default function Pricing() {
  return (
    <>
      <nav className="nav">
        <div className="nav-logo"><Link href="/">✦ Augmented Memories</Link></div>
        <div className="nav-links">
          <Link href="/demo">Demo</Link>
          <Link href="/start" className="btn-primary">Begin Archive</Link>
        </div>
      </nav>

      <main style={{ maxWidth: 1000, margin: '0 auto', padding: '5rem 2rem', textAlign: 'center' }}>
        <p className="section-label">Pricing</p>
        <div className="divider" />
        <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '1rem' }}>Simple, honest pricing</h1>
        <p style={{ color: 'var(--mid)', marginBottom: '4rem' }}>AUD · One-time or monthly · No hidden fees</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem' }}>
          {plans.map(p => (
            <div key={p.name} style={{
              border: `1.5px solid ${(p as any).featured ? 'var(--gold)' : 'var(--border)'}`,
              borderRadius: 8, padding: '2.5rem 2rem', background: 'var(--card)', position: 'relative', textAlign: 'left',
            }}>
              {(p as any).featured && <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: 'var(--gold)', color: 'white', fontSize: '0.68rem', fontWeight: 700, padding: '0.2rem 0.9rem', borderRadius: 50, whiteSpace: 'nowrap' }}>MOST COMPLETE</div>}
              <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--mid)', marginBottom: '0.5rem' }}>{p.name}</div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.6rem', fontWeight: 700, color: 'var(--sepia-dark)', marginBottom: '0.25rem' }}>
                {p.price}<span style={{ fontSize: '1rem', fontFamily: 'Lato, sans-serif', color: 'var(--mid)' }}>{p.period}</span>
              </div>
              <p style={{ color: 'var(--mid)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>{p.desc}</p>
              <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                {p.features.map(f => (
                  <li key={f} style={{ padding: '0.4rem 0', fontSize: '0.87rem', color: 'var(--ink)', borderBottom: '1px solid var(--border)', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 700 }}>✦</span>{f}
                  </li>
                ))}
              </ul>
              <Link href={p.href} className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>{p.cta}</Link>
            </div>
          ))}
        </div>
      </main>

      <div className="cross-sell">
        <h3>Also from Tech 4 Humanity</h3>
        <div className="cross-sell-links">
          <a href="https://ai4tradies.org">AI for Tradies</a>
          <a href="https://readingbuddy.ai">Reading Buddy</a>
          <a href="https://outcome-ready.vercel.app">Outcome Ready</a>
        </div>
      </div>
      <footer><p>© 2025 Tech 4 Humanity Pty Ltd</p></footer>
    </>
  )
}
