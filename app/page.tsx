'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Custom cursor
    const cursor = document.getElementById('cursor') as HTMLElement | null
    const cursorRing = document.getElementById('cursorRing') as HTMLElement | null
    if (!cursor || !cursorRing) return
    const ring = cursorRing
    const dot = cursor

    let mouseX = 0, mouseY = 0
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX; mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }
    document.addEventListener('mousemove', onMouseMove)

    let ringX = 0, ringY = 0
    let rafId: number
    function animateRing() {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      rafId = requestAnimationFrame(animateRing)
    }
    animateRing()

    const interactiveEls = document.querySelectorAll('a, button, label')
    const onEnter = () => {
      dot.classList.add('expanded')
      ring.classList.add('expanded')
    }
    const onLeave = () => {
      dot.classList.remove('expanded')
      ring.classList.remove('expanded')
    }
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <main className="page">

      {/* Custom cursor */}
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />

      {/* NAV */}
      <nav className="nav">
        <a href="#" className="logo">FL<em>OR</em></a>
        <ul className="nav-links">
          <li><a href="#worlds">Worlds</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#newsletter">Newsletter</a></li>
        </ul>
        <a href="#worlds" className="nav-btn">Explore</a>
      </nav>

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
      <section className="newsletter" id="newsletter">
        <div className="nl-top">
          <span className="nl-eyebrow">Join 1,500+ curious minds</span>
          <h2 className="nl-headline">Get the gems before<br /><em>everyone else does.</em></h2>
          <p className="nl-desc">One email. The best of crypto insights, Malta secrets, and trail finds — picked just for you.</p>
        </div>
        <div className="nl-right">
          <div className="nl-interests">
            <span className="nl-interests-label">I&apos;m interested in:</span>
            <div className="nl-tags">
              <label className="nl-tag"><input type="checkbox" defaultChecked /> Crypto &amp; compliance</label>
              <label className="nl-tag"><input type="checkbox" defaultChecked /> Running &amp; adventure</label>
              <label className="nl-tag"><input type="checkbox" defaultChecked /> Malta hidden gems</label>
            </div>
          </div>
          <div className="nl-form">
            <input type="text" className="nl-input" placeholder="First name" />
            <input type="email" className="nl-input" placeholder="Your best email" />
            <button className="nl-btn">I&apos;m in →</button>
            <span className="nl-fine">Free forever. No spam. Unsubscribe anytime. Dai.</span>
          </div>
          <div className="nl-proof">
            <span className="nl-proof-item">✦ Crypto red flags your compliance team misses</span>
            <span className="nl-proof-item">✦ Malta spots you won&apos;t find on Google</span>
            <span className="nl-proof-item">✦ Routes tested by someone who actually runs them</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">FL<em>OR</em></div>
            <p className="footer-desc">Crypto. Adventure. Malta.<br />followtheflor.com</p>
            <div className="footer-socials">
              <a href="#" className="social-btn">Instagram</a>
              <a href="#" className="social-btn">LinkedIn</a>
              <a href="#" className="social-btn">TikTok</a>
              <a href="#" className="social-btn">YouTube</a>
            </div>
          </div>
          <div>
            <p className="footer-col-title">Explore</p>
            <ul className="footer-links">
              <li><a href="/onchain">Flor Onchain</a></li>
              <li><a href="/runs">Flor Runs</a></li>
              <li><a href="/explores">Flor Explores</a></li>
              <li><a href="#about">About Flor</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Connect</p>
            <ul className="footer-links">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">TikTok</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Resources</p>
            <ul className="footer-links">
              <li><a href="#">Coming soon</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 followtheflor.com</span>
          <span>Built from Malta, with intention.</span>
        </div>
      </footer>

    </main>
  )
}
