'use client'

import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <nav className="nav">
      <a href="/" className="logo">FL<em>OR</em></a>
      <ul className="nav-links">
        <li><a href="/onchain" className={pathname === '/onchain' ? 'active' : ''}>Onchain</a></li>
        <li><a href="/runs" className={pathname === '/runs' ? 'active' : ''}>Runs</a></li>
        <li><a href="/explores" className={pathname === '/explores' ? 'active' : ''}>Explores</a></li>
        <li><a href={isHome ? '#about' : '/#about'}>About</a></li>
      </ul>
      <a href={isHome ? '#newsletter' : '/#newsletter'} className="nav-btn">Subscribe</a>
    </nav>
  )
}
