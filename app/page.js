import ProjectsList from '../components/ProjectsList'

/* ─── Skills data ──────────────────────────────────────────── */
const skillGroups = [
  {
    label: 'Web Development',
    icon: '🖥',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Laravel', 'Responsive Web Development'],
  },
  {
    label: 'Tech & Tools',
    icon: '🔧',
    skills: ['Linux', 'LaTeX', 'QBasic', 'Microsoft Office'],
  },
  {
    label: 'Soft Skills',
    icon: '💬',
    skills: ['Web Writing', 'Communication', 'Teamwork'],
  },
]

/* ─── Experience data ──────────────────────────────────────── */
const experience = [
  {
    id: 'exp1',
    role: 'Freelance Web Developer',
    company: 'Freelance / Self-employed',
    period: 'Approx. 2 years',
    summary:
      'Developed and maintained websites and web projects for clients and personal projects, working primarily with HTML, CSS, JavaScript, Python, and Laravel. Experience includes building responsive interfaces, cloning existing websites for practice, troubleshooting issues, and improving web functionality.',
  },
  {
    id: 'exp2',
    role: 'Web Writer',
    company: 'Freelance / Self-employed',
    period: 'Approx. 2 years',
    summary:
      'Created written web content and worked on online content projects, with an emphasis on clear communication, research, and engaging written material.',
  },
  {
    id: 'exp3',
    role: 'Sales Representative',
    company: 'N/A',
    period: 'Approx. 6 months',
    summary:
      'Worked in a customer-facing sales role, developing communication, customer service, and sales skills.',
  },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section id="hero" className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">👋 Hello, I&apos;m</p>
          <h1 className="hero-name">Stephen Bassey</h1>
          <p className="hero-role">Computer Science Student & Web Developer</p>
          <p className="hero-desc">
            I build responsive web interfaces, solve technical problems, and create clear, effective content. With a background spanning web development, writing, and customer service, I focus on building practical solutions that work well for users.
          </p>
          <div className="hero-actions">
            <a className="btn btn--primary" href="#projects">
              View my work
            </a>
            <a className="btn btn--outline" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="hero-socials">
            <a
              href="https://github.com/fatsanta00"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/bassey2006"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href="mailto:stebassey00@gmail.com"
              aria-label="Send email"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────── */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              A selection of web platforms and experiences I&apos;ve built.
            </p>
          </div>
          <ProjectsList />
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────── */}
      <section id="skills" className="section section--alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">Technologies and tools I work with.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((g) => (
              <div key={g.label} className="skill-group">
                <div className="skill-group-header">
                  <span className="skill-icon" aria-hidden="true">{g.icon}</span>
                  <h3 className="skill-group-label">{g.label}</h3>
                </div>
                <ul className="skill-list" aria-label={`${g.label} skills`}>
                  {g.skills.map((s) => (
                    <li key={s} className="skill-item">{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section id="about" className="section">
        <div className="container">
          <div className="about-layout">
            <div className="about-text">
              <h2 className="section-title">About me</h2>
              <p>
                I&apos;m a Web Developer and Software Engineer with experience in creating digital web content,
                building responsive interfaces, and working in customer-facing roles. I take pride in combining
                my technical skills with strong communication and teamwork abilities.
              </p>
              <p>
                When I&apos;m not writing code, I enjoy writing, reading fiction, travelling, gaming,
                and learning about new and niche areas of technology.
              </p>
              <p>
                I am currently open to new opportunities, particularly remote roles in web development,
                writing, customer service, sales, and related digital fields.
              </p>
              
              <div className="about-edu">
                <h3>Education</h3>
                <p>
                  <strong>BSc Computer Science</strong><br/>
                  Akwa Ibom State University<br/>
                  <em>Currently studying; expected graduation in 2028.</em>
                </p>
                <p>
                  <strong>Secondary Education (WAEC)</strong>
                </p>
              </div>
            </div>

            {/* Avatar placeholder */}
            <div className="about-avatar" aria-hidden="true">
              <div className="avatar-placeholder">
                <span>SB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────────── */}
      <section id="experience" className="section section--alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
              My recent professional history and freelance work.
            </p>
          </div>
          <ol className="timeline" aria-label="Work experience">
            {experience.map((e) => (
              <li key={e.id} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-body">
                  <div className="timeline-meta">
                    <span className="timeline-period">{e.period}</span>
                  </div>
                  <h3 className="timeline-role">{e.role}</h3>
                  <p className="timeline-company">{e.company}</p>
                  <p className="timeline-summary">{e.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section id="contact" className="section">
        <div className="container">
          <div className="contact-inner">
            <div className="section-header section-header--center">
              <h2 className="section-title">Get in touch</h2>
              <p className="section-subtitle">
                Whether you have a project in mind, a role to fill, or just want to say hi —
                my inbox is always open.
              </p>
            </div>

            <div className="contact-links">
              <a className="contact-link" href="mailto:stebassey00@gmail.com">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
                stebassey00@gmail.com
              </a>
              <a
                className="contact-link"
                href="https://github.com/fatsanta00"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub: fatsanta00"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                github.com/fatsanta00
              </a>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/bassey2006"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                linkedin.com/in/bassey2006
              </a>
            </div>

            <a className="btn btn--primary btn--lg" href="mailto:stebassey00@gmail.com">
              Say hello →
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="footer">
        <div className="container">
          <p>
            Designed &amp; built by{' '}
            <a href="https://github.com/fatsanta00" target="_blank" rel="noreferrer">
              Stephen Bassey
            </a>
            {' '}· {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  )
}
