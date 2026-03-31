import Image from 'next/image'
import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Newsletter from '@/components/layout/Newsletter'
import PostCard from '@/components/blog/PostCard'
import { getPostsByPillarAndRegion } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'FLOR Explores Italy — Abruzzo, Rome & the Italy Nobody Tells You About',
  description: 'Wild Abruzzo, hidden Rome, Lombardy trails. The Italy that exists between the famous cities — mountains, gorges, medieval villages, and zero crowds.',
}

export default function ExploresItalyPage() {
  const posts = getPostsByPillarAndRegion('explores', 'italy')

  const topics = [
    {
      num: '01',
      title: 'Wild Abruzzo',
      desc: 'Fortresses at 1,460m, gorges so narrow you touch both walls, emerald lakes with hermit caves. Italy\'s best-kept secret.',
    },
    {
      num: '02',
      title: 'Hidden Villages',
      desc: 'Medieval borghi with fewer than 100 residents, cursed castles, and murals that tell centuries of history.',
    },
    {
      num: '03',
      title: 'Trails & Gorges',
      desc: 'From the Sagittario to the Fara San Martino gorge — hikes that earn the view. Proper shoes required.',
    },
    {
      num: '04',
      title: 'Coast to Mountains',
      desc: 'The Trabocchi coast, Atri badlands, Campo Imperatore. Sea to 1,800m in an hour. Only in Italy.',
    },
  ]

  return (
    <main className="pillar-page pillar-page--explores">
      <Nav />

      {/* HERO */}
      <section className="pillar-hero">
        <div className="pillar-hero-bg" />
        <div className="pillar-hero-content">
          <span className="pillar-hero-eyebrow">Flor Explores — Italy</span>
          <h1 className="pillar-hero-headline">
            The Italy nobody tells you about.
          </h1>
          <p className="pillar-hero-sub">
            Wild Abruzzo, hidden Rome, Lombardy trails. The places that exist between the famous cities — found on foot, shared without the tourist filter.
          </p>
        </div>
        <div className="pillar-hero-image">
          <Image
            src="/images/explores/abruzzo/wild-abruzzo-rocca-calascio-castle.jpg"
            alt="Rocca Calascio fortress rising from its hilltop against dramatic storm clouds in Abruzzo"
            fill
            priority
            className="pillar-hero-img"
          />
        </div>
      </section>

      {/* TOPICS */}
      <section className="pillar-topics">
        <span className="pillar-topics-eyebrow">What you&apos;ll find here</span>
        <h2 className="pillar-topics-headline">The wild side of Italy. No queues.</h2>
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

      {/* ARTICLES */}
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
          <h2 className="pillar-featured-headline">Italy guides are on the way.</h2>
        </section>
      )}

      {/* NEWSLETTER */}
      <Newsletter
        eyebrow="Find the hidden Italy first"
        headline={<>Get the places tourists miss<br /><em>before the guidebooks catch up.</em></>}
        description="Abruzzo gorges, medieval villages, coastal trails — the Italy between the famous cities. Delivered weekly, explored on foot."
        proofItems={[
          'Wild Abruzzo spots the guidebooks skip entirely',
          'Trail-tested hikes with honest difficulty ratings',
          'The folklore and history nobody else writes about',
        ]}
      />

      <Footer />
    </main>
  )
}
