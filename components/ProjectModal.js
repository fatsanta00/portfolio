'use client'

import { useEffect, useRef } from 'react'

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    if (modalRef.current) {
      modalRef.current.focus()
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const hasDemo = Boolean(project.demo && project.demo !== '#')
  const hasRepo = Boolean(project.repo && project.repo !== '#')

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        ref={modalRef}
      >
        {/* Modal Topbar */}
        <div className="modal-topbar">
          <div className="modal-meta-pills">
            <span className={`status-tag status-tag--${(project.status || 'concept').toLowerCase()}`}>
              {project.status || 'Project'}
            </span>
            <span className="scope-tag">{project.scope || project.category}</span>
          </div>

          <button
            type="button"
            className="modal-close-button"
            onClick={onClose}
            aria-label="Close project modal (Press Escape)"
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
          <p className="modal-tagline">{project.tagline || project.category}</p>
        </div>

        {/* Modal Content Body */}
        <div className="modal-scroll-body">
          {/* Overview */}
          <div className="modal-content-block">
            <h3 className="modal-block-label">Overview &amp; Implementation</h3>
            <p className="modal-body-text">{project.longDescription || project.description}</p>
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
          {project.highlights && project.highlights.length > 0 && (
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
          <button type="button" className="modal-secondary-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
