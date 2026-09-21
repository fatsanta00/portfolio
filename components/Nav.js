'use client'

import { useState, useEffect } from 'react'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add backdrop when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <a className="brand" href="#hero" onClick={close}>
        <span className="brand-initials" aria-hidden="true">SB</span>
        Stephen Bassey
      </a>

      {/* Desktop links */}
      <div className="nav-links" role="list">
        {links.map((l) => (
          <a key={l.href} className="nav-link" href={l.href} role="listitem">
            {l.label}
          </a>
        ))}
        <a
          className="nav-cta"
          href="mailto:stebassey00@gmail.com"
          aria-label="Email Stephen Bassey"
        >
          Hire me
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className={`hamburger${open ? ' hamburger--open' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`mobile-menu${open ? ' mobile-menu--open' : ''}`}
        aria-hidden={!open}
      >
        {links.map((l) => (
          <a key={l.href} className="mobile-link" href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a
          className="mobile-link mobile-link--cta"
          href="mailto:stebassey00@gmail.com"
          onClick={close}
        >
          Hire me
        </a>
      </div>
    </nav>
  )
}
