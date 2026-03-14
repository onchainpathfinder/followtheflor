import type { PostMeta } from '@/lib/mdx'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Newsletter from '@/components/layout/Newsletter'

const pillarLabels: Record<string, string> = {
  onchain: 'Flor Onchain',
  runs: 'Flor Runs',
  explores: 'Flor Explores',
}

const pillarNewsletter: Record<string, {
  eyebrow: string
  headline: React.ReactNode
  description: string
  proofItems: string[]
}> = {
  onchain: {
    eyebrow: 'Stay ahead of the regulators',
    headline: <>Get the compliance intel<br /><em>before it hits the news.</em></>,
    description: 'Plain-English breakdowns of crypto regulation, AML trends, and what\'s actually changing in Web3 compliance.',
    proofItems: [
      'Crypto red flags your compliance team misses',
      'MiCA updates before they\'re mainstream',
      'Real-world AML case breakdowns',
    ],
  },
  runs: {
    eyebrow: 'Run smarter, not louder',
    headline: <>Get the routes and training intel<br /><em>straight to your inbox.</em></>,
    description: 'Weekly training updates, Malta\'s best running routes, and honest race reports.',
    proofItems: [
      'Routes tested on Malta\'s coastline',
      'Honest training logs with real numbers',
      'Race reports with actual takeaways',
    ],
  },
  explores: {
    eyebrow: 'Find the gems first',
    headline: <>Get Malta&apos;s hidden spots<br /><em>before everyone else does.</em></>,
    description: 'The restaurants, walks, and cultural corners that tourists miss.',
    proofItems: [
      'Malta spots you won\'t find on Google',
      'Restaurant picks from a local, not an algorithm',
      'Coastal walks tested and photographed by Flor',
    ],
  },
}

interface PostLayoutProps {
  meta: PostMeta
  pillar: 'onchain' | 'runs' | 'explores'
  children: React.ReactNode
}

export default function PostLayout({ meta, pillar, children }: PostLayoutProps) {
  const formattedDate = new Date(meta.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const nl = pillarNewsletter[pillar]

  return (
    <main className={`pillar-page pillar-page--${pillar}`}>
      <Nav />

      <article className="article">
        <header className="article-header">
          <a href={`/${pillar}`} className="article-back">
            ← Back to {pillarLabels[pillar]}
          </a>
          <span className="article-tag">{meta.tags[0]}</span>
          <h1 className="article-title">{meta.title}</h1>
          <div className="article-meta">
            <time>{formattedDate}</time> · {meta.readingTime}
          </div>
        </header>
        <div className="article-body">{children}</div>
      </article>

      <Newsletter
        eyebrow={nl.eyebrow}
        headline={nl.headline}
        description={nl.description}
        proofItems={nl.proofItems}
      />

      <Footer />
    </main>
  )
}
