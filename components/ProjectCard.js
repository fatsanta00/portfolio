export default function ProjectCard({ project }) {
  const hasDemo = project.demo && project.demo !== '#'
  const hasRepo = project.repo && project.repo !== '#'

  return (
    <article className="card" aria-label={`Project: ${project.title}`}>
      {/* Image / placeholder region */}
      <div className="card-media" aria-hidden="true">
        {project.img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.img}
            alt={`${project.title} screenshot`}
            className="card-img"
          />
        ) : (
          <div className="card-img-placeholder">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
              <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>No preview yet</span>
          </div>
        )}
        {project.featured && (
          <span className="card-badge">Featured</span>
        )}
      </div>

      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.description}</p>

        <ul className="tech-list" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {(hasDemo || hasRepo) && (
          <div className="card-actions">
            {hasDemo && (
              <a
                className="link-demo"
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Live demo for ${project.title}`}
              >
                Live ↗
              </a>
            )}
            {hasRepo && (
              <a
                className="link-repo"
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Source code for ${project.title}`}
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
