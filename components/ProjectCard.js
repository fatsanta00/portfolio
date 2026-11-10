'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

const ProjectModal = dynamic(() => import('./ProjectModal'), { ssr: false })

export default function ProjectCard({ project, index, isFeatured = false }) {
  const [modalOpen, setModalOpen] = useState(false)
  const hasDemo = Boolean(project.demo && project.demo !== '#')
  const hasRepo = Boolean(project.repo && project.repo !== '#')

  if (isFeatured) {
    return (
      <>
        <article className="featured-case-card" aria-label={`Featured Project: ${project.title}`}>
          <div className="featured-case-top">
            <div className="featured-case-meta">
              <span className="case-index" aria-hidden="true">
                0{index + 1}
              </span>
              <div className="case-meta-group">
                <span className={`status-badge status-badge--${(project.status || 'live').toLowerCase()}`}>
                  <span className="status-dot" aria-hidden="true"></span>
                  {project.status || 'Live'}
                </span>
                <span className="category-tag">{project.category}</span>
              </div>
            </div>
            <span className="scope-indicator">{project.scope}</span>
          </div>

          <div className="featured-case-header">
            <h3 className="featured-case-title">{project.title}</h3>
            {project.tagline && <p className="featured-case-tagline">{project.tagline}</p>}
          </div>

          {/* Genuine Project Preview Area */}
          {project.img && (
            <div
              className="featured-preview-box"
              onClick={() => setModalOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setModalOpen(true)
                }
              }}
              aria-label={`View enlarged interface preview and architecture for ${project.title}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.img}
                alt={project.imgAlt || `${project.title} live interface preview`}
                className="featured-preview-img"
                loading="lazy"
                width={960}
                height={540}
              />
              <span className="preview-hover-hint" aria-hidden="true">
                Click to inspect full architecture ↗
              </span>
            </div>
          )}

          <p className="featured-case-desc">{project.description}</p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="featured-case-highlights">
              <span className="highlights-label">Key Capabilities:</span>
              <ul className="highlights-list">
                {project.highlights.slice(0, 3).map((highlight, hIdx) => (
                  <li key={hIdx} className="highlight-item">
                    <span className="highlight-dash" aria-hidden="true">—</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="featured-case-bottom">
            <div className="featured-tech-row" aria-label="Key technologies">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="case-actions-row">
              <button
                type="button"
                className="btn-text-action"
                onClick={() => setModalOpen(true)}
                aria-label={`View complete technical overview for ${project.title}`}
              >
                Architecture &amp; Specs →
              </button>

              <div className="external-links-group">
                {hasDemo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-action-primary"
                    aria-label={`Open live application for ${project.title}`}
                  >
                    Live Demo ↗
                  </a>
                )}
                {hasRepo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-action-secondary"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>

        {modalOpen && (
          <ProjectModal project={project} onClose={() => setModalOpen(false)} />
        )}
      </>
    )
  }

  // Standard row / card presentation for secondary & concept projects
  return (
    <>
      <article className="compact-project-card" aria-label={`Project: ${project.title}`}>
        {project.img && (
          <div
            className="compact-preview-box"
            onClick={() => setModalOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setModalOpen(true)
              }
            }}
            aria-label={`View preview for ${project.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.img}
              alt={project.imgAlt || `${project.title} interface preview`}
              className="compact-preview-img"
              loading="lazy"
              width={480}
              height={270}
            />
          </div>
        )}

        <div className="compact-card-header">
          <div>
            <div className="compact-meta">
              <span className={`status-badge-sm status-badge-sm--${(project.status || 'concept').toLowerCase()}`}>
                {project.status || 'Complete'}
              </span>
              <span className="compact-category">{project.category}</span>
            </div>
            <h4 className="compact-title">{project.title}</h4>
          </div>
          <button
            type="button"
            className="compact-inspect-btn"
            onClick={() => setModalOpen(true)}
            aria-label={`Inspect ${project.title}`}
          >
            Details →
          </button>
        </div>

        <p className="compact-desc">{project.description}</p>

        <div className="compact-footer">
          <div className="compact-tech-list">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag-sm">
                {t}
              </span>
            ))}
          </div>

          {(hasDemo || hasRepo) && (
            <div className="compact-actions">
              {hasDemo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="compact-link"
                >
                  Live ↗
                </a>
              )}
              {hasRepo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="compact-link"
                >
                  Code ↗
                </a>
              )}
            </div>
          )}
        </div>
      </article>

      {modalOpen && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}
