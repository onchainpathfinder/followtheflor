import Image from 'next/image'
import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Newsletter from '@/components/layout/Newsletter'

export const metadata: Metadata = {
  title: 'FLOR Runs — Training Logs, Malta Routes & Race Reports',
  description: 'Real training logs, Malta\'s best coastal running routes, and honest race reports. No wellness-bro energy — just miles, sea swims, and the island.',
}

export default function RunsPage() {
  const topics = [
    {
      num: '01',
      title: 'Training Logs',
      desc: 'The real numbers. Weekly mileage, splits, what worked, what didn\'t. No filter.',
    },
    {
      num: '02',
      title: 'Coastal Routes',
      desc: 'Malta\'s best running routes along the coast — tested, mapped, and rated by someone who actually runs them.',
    },
    {
      num: '03',
      title: 'Race Reports',
      desc: 'From Mdina 2 Spinola to trail ultras. Honest race recaps with what I\'d do differently.',
    },
    {
      num: '04',
      title: 'Outdoor Spots',
      desc: 'The swimming spots, cliff trails, and sunrise routes that make Malta a runner\'s island.',
    },
  ]

  return (
    <main className="pillar-page pillar-page--runs">
      <Nav />

      {/* HERO */}
      <section className="pillar-hero">
        <div className="pillar-hero-bg" />
        <div className="pillar-hero-content">
          <span className="pillar-hero-eyebrow">Flor Runs</span>
          <h1 className="pillar-hero-headline">
            Trails, sea swims, and moving through Malta.
          </h1>
          <p className="pillar-hero-sub">
            Real training logs, coastal routes, race reports, and the outdoor spots that make this island worth running. No wellness-bro energy. Just honest miles.
          </p>
        </div>
        <div className="pillar-hero-image">
          <Image
            src="/images/world-runs.jpg"
            alt="Mountain sunset trail — running terrain in Malta"
            fill
            priority
            className="pillar-hero-img"
          />
        </div>
      </section>

      {/* TOPICS */}
      <section className="pillar-topics">
        <span className="pillar-topics-eyebrow">What you&apos;ll find here</span>
        <h2 className="pillar-topics-headline">Honest miles. Real routes.</h2>
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
        <h2 className="pillar-featured-headline">First training log dropping soon.</h2>
        <div className="pillar-featured-cards">
          <div className="pillar-featured-card">
            <span className="pillar-featured-tag">Training Log</span>
            <h3 className="pillar-featured-title">Week 1: Base Building</h3>
            <p className="pillar-featured-desc">Real numbers, real routes, real Malta.</p>
          </div>
          <div className="pillar-featured-card">
            <span className="pillar-featured-tag">Route Guide</span>
            <h3 className="pillar-featured-title">Dingli Cliffs Trail</h3>
            <p className="pillar-featured-desc">The route that earns the sunrise.</p>
          </div>
          <div className="pillar-featured-card">
            <span className="pillar-featured-tag">Race Report</span>
            <h3 className="pillar-featured-title">Mdina 2 Spinola</h3>
            <p className="pillar-featured-desc">What I learned and what I&apos;d change.</p>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <Newsletter
        eyebrow="Run smarter, not louder"
        headline={<>Get the routes and training intel<br /><em>straight to your inbox.</em></>}
        description="Weekly training updates, Malta's best running routes, and honest race reports from someone who actually logs the miles."
        proofItems={[
          'Routes tested on Malta\'s coastline',
          'Honest training logs with real numbers',
          'Race reports with actual takeaways',
        ]}
      />

      {/* FOOTER */}
      <Footer />
    </main>
  )
}
