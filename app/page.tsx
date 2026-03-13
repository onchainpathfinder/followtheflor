import Image from 'next/image'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Newsletter from '@/components/layout/Newsletter'

export default function Home() {
  return (
    <main className="page">

      {/* NAV */}
      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <span className="hero-eyebrow">followtheflor.com</span>
          <h1 className="hero-headline">
            Blockchain, coastlines,
            <em>and everything in between.</em>
          </h1>
          <p className="hero-sub">
            For the curious. The adventurous. The ones who find the gems.
          </p>
          <a href="#worlds" className="hero-cta">Explore →</a>
        </div>
        <div className="hero-photo">
          <Image
            src="/images/hero-portrait.jpg"
            alt="Flor in Florence — golden hour portrait"
            fill
            priority
            className="hero-photo-img"
          />
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {['MiCA compliance','trail running','Malta sunrises','crypto AML','iGaming regulation','hidden gems','Valletta espresso','web3 risk','Mediterranean coast','no corporate BS','MiCA compliance','trail running','Malta sunrises','crypto AML','iGaming regulation','hidden gems','Valletta espresso','web3 risk','Mediterranean coast','no corporate BS'].map((item, i) => (
            <span key={i} className="ticker-item">{item}</span>
          ))}
        </div>
      </div>

      {/* PHOTO STRIP */}
      <section className="photo-strip">
        <div className="photo-strip-item">
          <Image src="/images/strip-malta.jpg" alt="Dramatic Malta sky and landscape" fill className="strip-img" />
        </div>
        <div className="photo-strip-item">
          <Image src="/images/strip-running.jpg" alt="Flor racing Mdina 2 Spinola" fill className="strip-img" />
        </div>
        <div className="photo-strip-item">
          <Image src="/images/strip-working.jpg" alt="Flor in running gear — ready to move" fill className="strip-img" />
        </div>
        <div className="photo-strip-item">
          <Image src="/images/strip-gems.jpg" alt="CONFETTI — colorful hidden gem doorway" fill className="strip-img" />
        </div>
      </section>

      {/* 3 WORLDS */}
      <section className="worlds" id="worlds">
        <span className="worlds-eyebrow">Three worlds. One life.</span>
        <h2 className="worlds-headline">Pick your path.</h2>
        <p className="worlds-sub">Every corner of this island has a story. Every blockchain has a lesson. Every trail has a view.</p>
        <div className="worlds-grid">

          {/* ONCHAIN */}
          <div className="world-card">
            <div className="world-img">
              <Image src="/images/world-onchain.jpg" alt="Ancient stone arches — where old meets new" fill className="world-img-inner" />
            </div>
            <div className="world-body">
              <span className="world-tag">Flor Onchain</span>
              <h3 className="world-title">Crypto, compliance, and cutting through the noise.</h3>
              <p className="world-desc">MiCA explainers, AML red flags, iGaming regulation — from someone who actually does this for a living.</p>
              <a href="/onchain" className="world-link">Explore Onchain →</a>
            </div>
          </div>

          {/* RUNS */}
          <div className="world-card">
            <div className="world-img">
              <Image src="/images/world-runs.jpg" alt="Mountain sunset trail — running terrain" fill className="world-img-inner" />
            </div>
            <div className="world-body">
              <span className="world-tag">Flor Runs</span>
              <h3 className="world-title">Trails, sea swims, and moving through Malta.</h3>
              <p className="world-desc">Real training logs, coastal routes, outdoor spots — from someone who runs this island, not just lives on it.</p>
              <a href="/runs" className="world-link">Explore Runs →</a>
            </div>
          </div>

          {/* EXPLORES */}
          <div className="world-card">
            <div className="world-img">
              <Image src="/images/strip-gems.jpg" alt="CONFETTI — colorful hidden gem doorway in Malta" fill className="world-img-inner" />
            </div>
            <div className="world-body">
              <span className="world-tag">Flor Explores</span>
              <h3 className="world-title">The spots nobody else will tell you about.</h3>
              <p className="world-desc">Hidden restaurants, coastal walks, cultural corners of Malta. The real island — not the tourist brochure version.</p>
              <a href="/explores" className="world-link">Explore Malta →</a>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-photo">
          <Image src="/images/about-photo.jpg" alt="Medieval castle on rocky terrain — Malta" fill className="about-photo-img" />
        </div>
        <div className="about-content">
          <span className="about-eyebrow">The woman behind it</span>
          <h2 className="about-headline">I build the paths.</h2>
          <p className="about-body">
            Hi, I&apos;m Floriana. I build the paths. On the blockchain, on the trails, across this island.
            Always curious. Always going where nobody&apos;s been yet.
            <br /><br />
            Welcome to my world.
          </p>
          <a href="#" className="about-cta">The full story →</a>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="photo-grid">
        <div className="photo-grid-item">
          <Image src="/images/IMG_2858.JPG" alt="Comino cliffs and turquoise lagoon from above — Malta" fill className="grid-img" />
        </div>
        <div className="photo-grid-item">
          <Image src="/images/IMG_2841_2.JPG" alt="Wild Malta coastline with yellow fennel flowers and turquoise sea" fill className="grid-img" />
        </div>
        <div className="photo-grid-item">
          <Image src="/images/IMG_2840.JPG" alt="Hidden inlet between Gozo cliffs — crystal clear water" fill className="grid-img" />
        </div>
      </section>

      {/* NEWSLETTER */}
      <Newsletter />

      {/* FOOTER */}
      <Footer />

    </main>
  )
}
