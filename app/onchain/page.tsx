import Image from 'next/image'
import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Newsletter from '@/components/layout/Newsletter'

export const metadata: Metadata = {
  title: 'FLOR Onchain — Crypto Compliance, MiCA & AML in Plain English',
  description: 'Crypto AML, MiCA regulation, and iGaming compliance explained by someone who actually does this. No jargon, no fluff — just what you need to know.',
}

export default function OnchainPage() {
  const topics = [
    {
      num: '01',
      title: 'MiCA Explainers',
      desc: 'The EU\'s crypto regulation framework, broken down into plain English. What it means for you, your exchange, your tokens.',
    },
    {
      num: '02',
      title: 'AML Red Flags',
      desc: 'Transaction monitoring patterns, suspicious activity indicators, and the compliance gaps nobody talks about.',
    },
    {
      num: '03',
      title: 'iGaming Compliance',
      desc: 'Where crypto meets gambling regulation. Licensing, AML requirements, and the grey areas in between.',
    },
    {
      num: '04',
      title: 'Web3 Regulation',
      desc: 'DeFi, DAOs, NFTs — the regulatory landscape is shifting fast. Stay ahead of what\'s coming.',
    },
  ]

  return (
    <main className="pillar-page pillar-page--onchain">
      <Nav />

      {/* HERO */}
      <section className="pillar-hero">
        <div className="pillar-hero-bg" />
        <div className="pillar-hero-content">
          <span className="pillar-hero-eyebrow">Flor Onchain</span>
          <h1 className="pillar-hero-headline">
            Crypto, compliance, and cutting through the noise.
          </h1>
          <p className="pillar-hero-sub">
            MiCA explainers, AML red flags, iGaming regulation — from someone who actually does this for a living. No jargon. No fluff. Just what you need to know.
          </p>
        </div>
        <div className="pillar-hero-image">
          <Image
            src="/images/world-onchain.jpg"
            alt="Ancient stone arches — where old meets new, like tradition and crypto regulation"
            fill
            priority
            className="pillar-hero-img"
          />
        </div>
      </section>

      {/* TOPICS */}
      <section className="pillar-topics">
        <span className="pillar-topics-eyebrow">What you&apos;ll find here</span>
        <h2 className="pillar-topics-headline">Regulation in plain English.</h2>
        <div className="pillar-topics-grid">
          {topics.map((topic) => (
            <div key={topic.num} className="pillar-topic-card">
              <span className="pillar-topic-num">{topic.num}</span>
              <h3 className="pillar-topic-title">{topic.title}</h3>
              <p className="pillar-topic-desc">{topic.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMING SOON */}
      <section className="pillar-featured">
        <span className="pillar-featured-eyebrow">Coming soon</span>
        <h2 className="pillar-featured-headline">Articles are on the way.</h2>
        <div className="pillar-featured-cards">
          <div className="pillar-featured-card">
            <span className="pillar-featured-tag">Deep Dive</span>
            <h3 className="pillar-featured-title">MiCA: What Actually Changes</h3>
            <p className="pillar-featured-desc">The first deep-dive drops soon.</p>
          </div>
          <div className="pillar-featured-card">
            <span className="pillar-featured-tag">Red Flag Guide</span>
            <h3 className="pillar-featured-title">Crypto AML Patterns</h3>
            <p className="pillar-featured-desc">What your compliance team misses.</p>
          </div>
          <div className="pillar-featured-card">
            <span className="pillar-featured-tag">Explainer</span>
            <h3 className="pillar-featured-title">iGaming Meets Crypto</h3>
            <p className="pillar-featured-desc">Where regulation gets interesting.</p>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <Newsletter
        eyebrow="Stay ahead of the regulators"
        headline={<>Get the compliance intel<br /><em>before it hits the news.</em></>}
        description="Plain-English breakdowns of crypto regulation, AML trends, and what's actually changing in Web3 compliance."
        proofItems={[
          'Crypto red flags your compliance team misses',
          'MiCA updates before they\'re mainstream',
          'Real-world AML case breakdowns',
        ]}
      />

      {/* FOOTER */}
      <Footer />
    </main>
  )
}
