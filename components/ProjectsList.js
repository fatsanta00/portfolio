'use client'

import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const filterCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack / Next.js' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'backend', label: 'Backend & DB' },
]

export default function ProjectsList() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return projects.filter((p) => {
      // Filter match
      let filterMatch = true
      if (activeFilter === 'fullstack') {
        filterMatch = p.tech.some((t) => t.includes('Next.js') || t.includes('React'))
      } else if (activeFilter === 'typescript') {
        filterMatch = p.tech.some((t) => t.includes('TypeScript'))
      } else if (activeFilter === 'backend') {
        filterMatch = p.tech.some((t) =>
          ['Prisma', 'PostgreSQL', 'Drizzle ORM', 'PHP', 'Laravel', 'MySQL', 'Neon'].some((b) =>
            t.includes(b)
          )
        )
      }

      // Search match
      const searchableText = [
        p.title,
        p.tagline || '',
        p.description,
        p.longDescription || '',
        p.category || '',
        p.scope || '',
        p.tech.join(' '),
      ]
        .join(' ')
        .toLowerCase()

      const textMatch = q === '' || searchableText.includes(q)

      return filterMatch && textMatch
    })
  }, [activeFilter, searchQuery])

  const isDefaultView = activeFilter === 'all' && searchQuery.trim() === ''
  const featuredList = useMemo(() => filteredProjects.filter((p) => p.featured), [filteredProjects])
  const secondaryList = useMemo(() => filteredProjects.filter((p) => !p.featured), [filteredProjects])

  return (
    <div className="work-directory">
      {/* Filter and Search Controls Bar */}
      <div className="work-controls-bar">
        <div className="filter-tabs" role="tablist" aria-label="Filter projects by technology stack">
          {filterCategories.map((filter) => (
            <button
              key={filter.id}
              role="tab"
              aria-selected={activeFilter === filter.id}
              className={`filter-tab ${activeFilter === filter.id ? 'filter-tab--active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="search-box-wrapper">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="search"
            className="search-input-field"
            placeholder="Filter by tech or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search project catalog by keyword or technology"
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search input"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Directory Count Notice */}
      <div className="directory-count-notice" aria-live="polite">
        <span>
          Showing {filteredProjects.length} of {projects.length} documented builds
        </span>
        {activeFilter !== 'all' && (
          <span className="filter-reset-hint">
            Filtered by: <strong>{filterCategories.find((f) => f.id === activeFilter)?.label}</strong>
          </span>
        )}
      </div>

      {/* Main Listing View */}
      {filteredProjects.length === 0 ? (
        <div className="directory-empty-state" role="status">
          <p className="empty-title">No builds matched your filter criteria.</p>
          <p className="empty-sub">Try broadening your search term or selecting &quot;All Projects&quot;.</p>
          <button
            type="button"
            className="btn-outline"
            onClick={() => {
              setActiveFilter('all')
              setSearchQuery('')
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : isDefaultView ? (
        <div className="work-sections-container">
          {/* Section 1: Featured Flagship Applications */}
          <div className="featured-work-group">
            <div className="subgroup-header">
              <span className="subgroup-kicker">Flagship Builds</span>
              <h3 className="subgroup-title">Full-Stack Production Deployments</h3>
            </div>
            <div className="featured-cases-stack">
              {featuredList.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} isFeatured={true} />
              ))}
            </div>
          </div>

          {/* Section 2: Secondary, Event & Prototype Builds */}
          {secondaryList.length > 0 && (
            <div className="secondary-work-group">
              <div className="subgroup-header">
                <span className="subgroup-kicker">Systems &amp; Prototypes</span>
                <h3 className="subgroup-title">Event Applications &amp; Architectural Concepts</h3>
              </div>
              <div className="secondary-projects-grid">
                {secondaryList.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} isFeatured={false} />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Filtered or Searched view: unified responsive grid */
        <div className="filtered-results-stack">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isFeatured={project.featured}
            />
          ))}
        </div>
      )}
    </div>
  )
}
