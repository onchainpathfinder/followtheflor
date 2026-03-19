'use client'

import React from 'react'

interface NewsletterProps {
  eyebrow?: string
  headline?: React.ReactNode
  description?: string
  proofItems?: string[]
}

export default function Newsletter({
  eyebrow = 'Join 1,500+ curious minds',
  headline,
  description = 'One email. The best of crypto insights, Malta secrets, and trail finds — picked just for you.',
  proofItems = [
    'Crypto red flags your compliance team misses',
    'Malta spots the guidebooks don\'t cover',
    'Routes tested by someone who actually runs them',
  ],
}: NewsletterProps) {
  return (
    <section className="newsletter" id="newsletter">
      <div className="nl-top">
        <span className="nl-eyebrow">{eyebrow}</span>
        <h2 className="nl-headline">
          {headline || <>Get the gems before<br /><em>everyone else does.</em></>}
        </h2>
        <p className="nl-desc">{description}</p>
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
          {proofItems.map((item, i) => (
            <span key={i} className="nl-proof-item">✦ {item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
