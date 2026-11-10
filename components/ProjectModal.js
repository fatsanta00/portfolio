'use client'

import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const hasDemo = project.demo && project.demo !== '#'
  const hasRepo = project.repo && project.repo !== '#'

  return (
    /* Backdrop */
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      {/* Panel — stop propagation so click inside doesn't close */}
      <div
        className="modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div>
            <div className="modal-status-row">
              {project.featured && (
                <span className="modal-badge modal-badge--featured">Featured</span>
              )}
              <span className={`modal-badge modal-badge--status modal-badge--${(project.status || '').toLowerCase()}`}>
                {project.status || 'Project'}
              </span>
            </div>
            <h2 className="modal-title">{project.title}</h2>
          </div>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          <p className="modal-desc">{project.longDescription || project.description}</p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-title">Key features</h3>
              <ul className="modal-highlights">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-section">
            <h3 className="modal-section-title">Technologies</h3>
            <ul className="tech-list modal-tech-list" aria-label="Technologies used">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        {(hasDemo || hasRepo) && (
          <div className="modal-footer">
            {hasDemo && (
              <a
                className="btn btn--primary"
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
              >
                View live ↗
              </a>
            )}
            {hasRepo && (
              <a
                className="btn btn--outline"
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
              >
                Source code ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
