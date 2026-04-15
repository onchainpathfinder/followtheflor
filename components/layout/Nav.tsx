'use client'

import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <nav className="nav">
      <a href="/" className="logo">FL<em>OR</em></a>
      <ul className="nav-links">
        <li><a href="/onchain" className={pathname.startsWith('/onchain') ? 'active' : ''}>Onchain</a></li>
        <li><a href="/runs" className={pathname.startsWith('/runs') ? 'active' : ''}>Runs</a></li>
        <li><a href="/explores" className={pathname.startsWith('/explores') ? 'active' : ''}>Explores</a></li>
        <li><a href={isHome ? '#about' : '/#about'}>About</a></li>
      </ul>
      <a href="/newsletter" className={`nav-btn ${pathname === '/newsletter' ? 'active' : ''}`}>Subscribe</a>
    </nav>
  )
}
