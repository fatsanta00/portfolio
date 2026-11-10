'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#work', label: 'Selected Work' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#about', label: 'Profile' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false)
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header-inner">
        {/* Brand identity */}
        <a href="#hero" className="brand" onClick={closeMenu} aria-label="BasTech - Bassey Stephen Homepage">
          <span className="brand-mark" aria-hidden="true">BT</span>
          <div className="brand-text">
            <span className="brand-name">BasTech</span>
            <span className="brand-sub">Bassey Stephen</span>
          </div>
        </a>

        {/* Availability indicator */}
        <div className="nav-status-pill" aria-label="Current status: Available for contracts and remote roles">
          <span className="status-dot" aria-hidden="true"></span>
          <span>Available for work</span>
        </div>

        {/* Desktop navigation */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <ul className="nav-list">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-item-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Direct Email Action */}
        <div className="header-actions">
          <a
            href="mailto:stebassey00@gmail.com"
            className="action-btn-email"
            aria-label="Send email to stebassey00@gmail.com"
          >
            Get in touch
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            className={`mobile-toggle ${open ? 'mobile-toggle--active' : ''}`}
            aria-label={open ? 'Close main navigation menu' : 'Open main navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="mobile-toggle-bar"></span>
            <span className="mobile-toggle-bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-navigation"
        className={`mobile-drawer ${open ? 'mobile-drawer--open' : ''}`}
        aria-hidden={!open}
      >
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-status">
            <span className="status-dot" aria-hidden="true"></span>
            <span>Currently open to contract builds &amp; remote roles</span>
          </div>

          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navLinks.map((item, index) => (
                <li key={item.href}>
                  <a href={item.href} className="mobile-nav-link" onClick={closeMenu}>
                    <span className="mobile-nav-num" aria-hidden="true">0{index + 1}</span>
                    <span className="mobile-nav-text">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            <a href="mailto:stebassey00@gmail.com" className="btn-solid btn-full" onClick={closeMenu}>
              Send Email (stebassey00@gmail.com)
            </a>
            <a href="tel:+2347060885765" className="mobile-contact-line" onClick={closeMenu}>
              Direct Call: +234 706 088 5765
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
