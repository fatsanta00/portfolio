'use client'

import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectsList() {
  const [selectedTag, setSelectedTag] = useState('All')
  const [q, setQ] = useState('')

  const tags = useMemo(() => {
    const s = new Set()
    projects.forEach((p) => p.tech.forEach((t) => s.add(t)))
    return ['All', ...Array.from(s).sort()]
  }, [])

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    return projects.filter((p) => {
      const tagMatch = selectedTag === 'All' || p.tech.includes(selectedTag)
      const text = (p.title + ' ' + p.description + ' ' + p.tech.join(' ')).toLowerCase()
      const textMatch = term === '' || text.includes(term)
      return tagMatch && textMatch
    })
  }, [selectedTag, q])

  return (
    <div>
      <div className="filters">
        <div className="tags" role="group" aria-label="Filter by technology">
          {tags.map((t) => (
            <button
              key={t}
              className={'filter-btn ' + (t === selectedTag ? 'active' : '')}
              onClick={() => setSelectedTag(t)}
              aria-pressed={t === selectedTag}
            >
              {t}
            </button>
          ))}
        </div>

        <input
          aria-label="Search projects"
          className="search-input"
          placeholder="Search projects…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state" role="status" aria-live="polite">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <p>No projects match <strong>{q || selectedTag}</strong>.</p>
          <button
            className="filter-btn"
            onClick={() => { setSelectedTag('All'); setQ('') }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="projects-grid">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </div>
  )
}
