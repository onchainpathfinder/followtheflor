import Image from 'next/image'
import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Newsletter from '@/components/layout/Newsletter'
import PostCard from '@/components/blog/PostCard'
import { getPostsByPillar } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'FLOR Explores — Maltese Islands Hidden Gems, Local Food & Coastal Walks',
  description: 'Hidden restaurants, coastal walks, and cultural corners of the Maltese Islands. The real islands — not the tourist brochure. Found on foot, shared with intention.',
}

export default function ExploresPage() {
  const posts = getPostsByPillar('explores')

  const topics = [
    {
      num: '01',
      title: 'Hidden Restaurants',
      desc: 'The places locals actually eat. No TripAdvisor top-10 lists. Just good food in unexpected corners.',
    },
    {
      num: '02',
      title: 'Coastal Walks',
      desc: 'The paths between the cliffs, the inlets nobody photographs, the routes that earn the view.',
    },
    {
      num: '03',
      title: 'Cultural Corners',
      desc: 'Baroque churches, festa traditions, the stories behind Valletta\'s side streets. The Maltese Islands beyond the beach.',
    },
    {
      num: '04',
      title: 'Local Food',
      desc: 'Pastizzi at 6am, fenkata on a Friday, the wine nobody exports. Eating like a local across the Maltese Islands.',
    },
  ]

  return (
    <main className="pillar-page pillar-page--explores">
      <Nav />

      {/* HERO */}
      <section className="pillar-hero">
        <div className="pillar-hero-bg" />
        <div className="pillar-hero-content">
          <span className="pillar-hero-eyebrow">Flor Explores</span>
          <h1 className="pillar-hero-headline">
            The spots nobody else will tell you about.
          </h1>
          <p className="pillar-hero-sub">
            Hidden restaurants, coastal walks, cultural corners of the Maltese Islands. The real islands — not the tourist brochure version. Found on foot, shared with intention.
          </p>
        </div>
        <div className="pillar-hero-image">
          <Image
            src="/images/strip-gems.jpg"
            alt="CONFETTI — colorful hidden gem doorway in the Maltese Islands"
            fill
            priority
            className="pillar-hero-img"
          />
        </div>
      </section>

      {/* TOPICS */}
      <section className="pillar-topics">
        <span className="pillar-topics-eyebrow">What you&apos;ll find here</span>
        <h2 className="pillar-topics-headline">The real Maltese Islands. Not the postcard.</h2>
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

      {/* ARTICLES OR COMING SOON */}
      {posts.length > 0 ? (
        <section className="pillar-articles">
          <span className="pillar-articles-eyebrow">Latest articles</span>
          <h2 className="pillar-articles-headline">Read the latest.</h2>
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
          <div className="pillar-featured-cards">
            <div className="pillar-featured-card">
              <span className="pillar-featured-tag">Hidden Gem</span>
              <h3 className="pillar-featured-title">Valletta Side Streets</h3>
              <p className="pillar-featured-desc">The doors nobody opens. Until now.</p>
            </div>
            <div className="pillar-featured-card">
              <span className="pillar-featured-tag">Food Guide</span>
              <h3 className="pillar-featured-title">Where Locals Actually Eat</h3>
              <p className="pillar-featured-desc">Not the tourist traps. The real ones.</p>
            </div>
            <div className="pillar-featured-card">
              <span className="pillar-featured-tag">Coastal Walk</span>
              <h3 className="pillar-featured-title">Comino Without the Crowds</h3>
              <p className="pillar-featured-desc">When to go, where to swim, what to skip.</p>
            </div>
          </div>
        </section>
      )}

      {/* NEWSLETTER */}
      <Newsletter
        eyebrow="Find the gems first"
        headline={<>Get the Maltese Islands&apos; hidden spots<br /><em>before everyone else does.</em></>}
        description="The restaurants, walks, and cultural corners that tourists miss. Malta, Gozo, Comino — delivered once a week, found on foot."
        proofItems={[
          'Spots across the Maltese Islands that guidebooks skip',
          'Restaurant picks from a local, not an algorithm',
          'Coastal walks tested and photographed by Flor',
        ]}
      />

      {/* FOOTER */}
      <Footer />
    </main>
  )
}
