'use client'

import { useEffect, useRef } from 'react'

export default function ProjectModal({ project, onClose }) {
  const modalContainerRef = useRef(null)
  const previousActiveElementRef = useRef(null)

  useEffect(() => {
    // 1. Remember the element that had focus before the modal opened
    previousActiveElementRef.current = document.activeElement

    // 2. Lock body scroll
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // 3. Focus the modal container or the close button
    const container = modalContainerRef.current
    if (container) {
      const closeBtn = container.querySelector('.modal-close-button')
      if (closeBtn) {
        closeBtn.focus()
      } else {
        container.focus()
      }
    }

    // 4. Focus trapping & Escape key listener
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }

      if (e.key === 'Tab' && container) {
        const focusableElements = container.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement || document.activeElement === container) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    // Cleanup: restore scroll and focus
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow

      if (previousActiveElementRef.current && typeof previousActiveElementRef.current.focus === 'function') {
        previousActiveElementRef.current.focus()
      }
    }
  }, [onClose])

  if (!project) return null

  const hasDemo = Boolean(project.demo && project.demo !== '#')
  const hasRepo = Boolean(project.repo && project.repo !== '#')

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      aria-describedby="modal-project-desc"
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        ref={modalContainerRef}
      >
        {/* Modal Topbar */}
        <div className="modal-topbar">
          <div className="modal-meta-pills">
            <span className={`status-tag status-tag--${(project.status || 'concept').toLowerCase()}`}>
              {project.status || 'Project'}
            </span>
            <span className="scope-tag">{project.scope || project.category || 'Build'}</span>
          </div>

          <button
            type="button"
            className="modal-close-button"
            onClick={onClose}
            aria-label="Close project details dialogue (or press Escape)"
          >
            <span className="close-text" aria-hidden="true">ESC</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Header */}
        <div className="modal-header-section">
          <h2 id="modal-project-title" className="modal-main-title">
            {project.title}
          </h2>
          {project.tagline && <p className="modal-tagline">{project.tagline}</p>}
        </div>

        {/* Modal Content Body */}
        <div className="modal-scroll-body">
          {/* Optional Project Screenshot / Preview */}
          {project.img && (
            <div className="modal-preview-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.img}
                alt={project.imgAlt || `${project.title} interface preview`}
                className="modal-preview-image"
                loading="lazy"
              />
            </div>
          )}

          {/* Overview */}
          <div className="modal-content-block">
            <h3 className="modal-block-label">Overview &amp; Implementation</h3>
            <p id="modal-project-desc" className="modal-body-text">
              {project.longDescription || project.description || 'No description provided.'}
            </p>
          </div>

          {/* Architecture */}
          {project.architecture && (
            <div className="modal-content-block">
              <h3 className="modal-block-label">Architecture &amp; Data Pipeline</h3>
              <div className="modal-arch-box">
                <code>{project.architecture}</code>
              </div>
            </div>
          )}

          {/* Key Engineering Features */}
          {Array.isArray(project.highlights) && project.highlights.length > 0 && (
            <div className="modal-content-block">
              <h3 className="modal-block-label">Key Engineering Features</h3>
              <ul className="modal-specs-list">
                {project.highlights.map((item, index) => (
                  <li key={index} className="modal-spec-item">
                    <span className="spec-bullet" aria-hidden="true">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Verified Technologies */}
          {Array.isArray(project.tech) && project.tech.length > 0 && (
            <div className="modal-content-block">
              <h3 className="modal-block-label">Verified Tech Stack</h3>
              <div className="modal-tech-grid" aria-label="Verified technologies">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-spec-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer-actions">
          {hasDemo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-solid"
            >
              Open Live Deployment ↗
            </a>
          )}
          {hasRepo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-outline"
            >
              Inspect Source Code (GitHub) ↗
            </a>
          )}
          {!hasDemo && !hasRepo && (
            <span className="modal-internal-notice">
              Internal / Academic build — source repository private or offline.
            </span>
          )}
          <button
            type="button"
            className="modal-secondary-close"
            onClick={onClose}
            aria-label="Close dialogue"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
