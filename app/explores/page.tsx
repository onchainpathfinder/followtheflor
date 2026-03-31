import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Newsletter from '@/components/layout/Newsletter'
import PostCard from '@/components/blog/PostCard'
import { getPostsByPillar } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'FLOR Explores — Hidden Gems, Coastal Walks & the Places Nobody Talks About',
  description: 'Malta, Gozo, Abruzzo, Rome — the places that exist between the tourist brochures. Found on foot, shared without filter.',
}

export default function ExploresPage() {
  const posts = getPostsByPillar('explores')

  return (
    <main className="pillar-page pillar-page--explores">
      <Nav />

      {/* HERO */}
      <section className="pillar-hero">
        <div className="pillar-hero-bg" />
        <div className="pillar-hero-content">
          <span className="pillar-hero-eyebrow">Flor Explores</span>
          <h1 className="pillar-hero-headline">
            The places nobody else will tell you about.
          </h1>
          <p className="pillar-hero-sub">
            Hidden gems, coastal walks, medieval villages, and the trails between the tourist brochures. Malta, Gozo, Italy — found on foot, shared with intention.
          </p>
        </div>
        <div className="pillar-hero-image">
          <Image
            src="/images/strip-gems.jpg"
            alt="Hidden gem doorway — the kind of place you only find on foot"
            fill
            priority
            className="pillar-hero-img"
          />
        </div>
      </section>

      {/* REGION CARDS */}
      <section className="pillar-topics">
        <span className="pillar-topics-eyebrow">Explore by region</span>
        <h2 className="pillar-topics-headline">Pick your adventure.</h2>
        <div className="pillar-topics-grid">
          <Link href="/explores/malta" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="pillar-topic-card">
              <span className="pillar-topic-num">01</span>
              <h3 className="pillar-topic-title">Malta & Gozo</h3>
              <p className="pillar-topic-desc">Hidden restaurants, coastal walks, Comino without the crowds. The real Maltese Islands — not the postcard version.</p>
            </div>
          </Link>
          <Link href="/explores/italy" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="pillar-topic-card">
              <span className="pillar-topic-num">02</span>
              <h3 className="pillar-topic-title">Italy</h3>
              <p className="pillar-topic-desc">Wild Abruzzo, hidden Rome, Lombardy trails. Fortresses, gorges, medieval villages — the Italy between the famous cities.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ALL ARTICLES */}
      {posts.length > 0 ? (
        <section className="pillar-articles">
          <span className="pillar-articles-eyebrow">All articles</span>
          <h2 className="pillar-articles-headline">Everything so far.</h2>
          <div className="pillar-articles-grid">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      ) : (
        <section className="pillar-featured">
          <span className="pillar-featured-eyebrow">Coming soon</span>
          <h2 className="pillar-featured-headline">The first hidden gem guide is coming.</h2>
        </section>
      )}

      {/* NEWSLETTER */}
      <Newsletter
        eyebrow="Find the gems first"
        headline={<>Get the hidden spots<br /><em>before everyone else does.</em></>}
        description="The restaurants, walks, and cultural corners that tourists miss. Malta, Gozo, Italy — delivered once a week, found on foot."
        proofItems={[
          'Spots that guidebooks skip entirely',
          'Trail-tested hikes with honest difficulty ratings',
          'The local knowledge nobody else writes about',
        ]}
      />

      <Footer />
    </main>
  )
}
