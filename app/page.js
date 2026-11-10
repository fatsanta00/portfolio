import ProjectsList from '../components/ProjectsList'

/* ─── Structured Skills Data ─────────────────────────────────────── */
const capabilityColumns = [
  {
    code: '01',
    category: 'Frontend Engineering',
    summary: 'Building fast, accessible, and structured interfaces with modern React and Next.js.',
    skills: [
      'HTML5 & Semantic Structure',
      'CSS3 & Modern Layouts',
      'JavaScript (ES6+)',
      'TypeScript 5',
      'React (18 & 19)',
      'Next.js (App Router & Pages)',
      'Responsive & Mobile-First Design',
      'Tailwind CSS',
    ],
  },
  {
    code: '02',
    category: 'Backend & Data Systems',
    summary: 'Developing clean server-side logic, relational schemas, and persistent database pipelines.',
    skills: [
      'PHP 8+',
      'Laravel Framework',
      'Python',
      'PostgreSQL & Neon Serverless',
      'MySQL & SQLite',
      'Prisma ORM & Drizzle ORM',
      'NextAuth & Authentication',
      'REST APIs & Integrations',
    ],
  },
  {
    code: '03',
    category: 'Infrastructure & Tooling',
    summary: 'Managing source control, operating systems, cloud deployment, and technical documentation.',
    skills: [
      'Git & GitHub Workflows',
      'Linux CLI & Environment',
      'Vercel Deployment & Analytics',
      'Vercel Blob Storage',
      'LaTeX Document Engineering',
      'QBasic & Computing Foundations',
      'Microsoft Office Suite',
    ],
  },
  {
    code: '04',
    category: 'Delivery & Professional',
    summary: 'Ensuring projects are communicated clearly, documented properly, and delivered reliably.',
    skills: [
      'Systematic Troubleshooting & Debugging',
      'Technical Writing & Documentation',
      'Web Content & Research',
      'Client Communication',
      'Customer Service & Negotiation',
      'Cross-Functional Teamwork',
    ],
  },
]

/* ─── Work Experience Data ───────────────────────────────────────── */
const professionalHistory = [
  {
    id: 'exp-1',
    period: 'Approx. 2 Years',
    role: 'Freelance Web Developer',
    organization: 'Self-Employed / Independent Contractor',
    type: 'Client & Independent Projects',
    deliverables: [
      'Engineered and deployed responsive full-stack applications and custom web solutions using Next.js, React, TypeScript, PHP, Laravel, and PostgreSQL.',
      'Designed relational database schemas, integrated authentication workflows (NextAuth, JWT), and configured cloud storage pipelines.',
      'Troubleshot critical bugs, resolved responsive layout defects, and implemented performance optimizations across client websites.',
    ],
  },
  {
    id: 'exp-2',
    period: 'Approx. 2 Years',
    role: 'Web Writer',
    organization: 'Self-Employed / Digital Content Projects',
    type: 'Content & Research',
    deliverables: [
      'Authored structured digital copy, research-grounded web articles, and documentation with focus on technical accuracy and readability.',
      'Synthesized complex subject matter into clear, audience-appropriate written material for digital platforms.',
    ],
  },
  {
    id: 'exp-3',
    period: 'Approx. 6 Months',
    role: 'Sales Representative',
    organization: 'Customer Sales & Client Relations',
    type: 'Client-Facing Experience',
    deliverables: [
      'Managed direct client inquiries, customer service resolution, and sales negotiations in a fast-paced retail environment.',
      'Cultivated interpersonal communication, active listening, and problem-solving skills directly applicable to client stakeholder management.',
    ],
  },
]

/* ─── Education Data ─────────────────────────────────────────────── */
const educationHistory = [
  {
    id: 'edu-1',
    qualification: 'BSc Computer Science',
    institution: 'Akwa Ibom State University',
    status: 'In Progress · Expected Graduation 2028',
    focus: 'Core computing theory, algorithms, data structures, systems architecture, and software engineering.',
  },
  {
    id: 'edu-2',
    qualification: 'West African Senior School Certificate (WAEC)',
    institution: 'Secondary Education',
    status: 'Completed',
    focus: 'Science and technical foundation.',
  },
]

export default function Home() {
  return (
    <>
      {/* ── 00 / HERO ─────────────────────────────────────────── */}
      <section id="hero" className="hero-section">
        <div className="site-container">
          <div className="hero-grid">
            {/* Left Narrative Column */}
            <div className="hero-narrative">
              <div className="hero-kicker-row">
                <span className="hero-kicker-tag">BasTech · Bassey Stephen</span>
                <span className="hero-kicker-divider" aria-hidden="true">/</span>
                <span className="hero-kicker-location">Nigeria · Available for remote work</span>
              </div>

              <h1 className="hero-headline">
                Full-stack web developer building dependable applications with Next.js, TypeScript, and modern backends.
              </h1>

              <p className="hero-lead">
                I am a Computer Science student at Akwa Ibom State University with hands-on experience
                building full-stack production platforms, custom web interfaces, and database integrations.
                I combine technical rigor with clear communication to deliver software that works cleanly for users and businesses.
              </p>

              <div className="hero-cta-group">
                <a href="#work" className="btn-solid">
                  View Selected Work ↓
                </a>
                <a href="#contact" className="btn-outline">
                  Work With Me →
                </a>
              </div>

              <div className="hero-contact-strip">
                <a href="mailto:stebassey00@gmail.com" className="strip-item">
                  <span className="strip-label">Email:</span>
                  <span className="strip-val">stebassey00@gmail.com</span>
                </a>
                <a href="tel:+2347060885765" className="strip-item">
                  <span className="strip-label">Phone:</span>
                  <span className="strip-val">+234 706 088 5765</span>
                </a>
                <a href="https://github.com/fatsanta00" target="_blank" rel="noreferrer" className="strip-item">
                  <span className="strip-label">GitHub:</span>
                  <span className="strip-val">@fatsanta00 ↗</span>
                </a>
              </div>
            </div>

            {/* Right Architecture & Profile Card */}
            <aside className="hero-spec-card" aria-label="Technical Specification Summary">
              <div className="spec-card-header">
                <span className="spec-card-badge">Technical Profile</span>
                <span className="spec-card-state">
                  <span className="status-dot" aria-hidden="true"></span>
                  Active for Contract
                </span>
              </div>

              <div className="spec-card-body">
                <div className="spec-data-row">
                  <span className="spec-key">Core Stack</span>
                  <span className="spec-value">Next.js 14–16, React 18/19, TypeScript, PostgreSQL</span>
                </div>
                <div className="spec-data-row">
                  <span className="spec-key">Backend &amp; ORM</span>
                  <span className="spec-value">Prisma, Drizzle, PHP, Laravel, Python, MySQL</span>
                </div>
                <div className="spec-data-row">
                  <span className="spec-key">Primary Focus</span>
                  <span className="spec-value">Full-Stack Builds, Redesigns, API Integrations, Bug Fixes</span>
                </div>
                <div className="spec-data-row">
                  <span className="spec-key">Current Education</span>
                  <span className="spec-value">BSc Computer Science (Akwa Ibom State Univ, 2028)</span>
                </div>
                <div className="spec-data-row">
                  <span className="spec-key">Engagement</span>
                  <span className="spec-value">Freelance Contracts &amp; Remote Developer Positions</span>
                </div>
              </div>

              <div className="spec-card-footer">
                <span className="spec-footer-note">Verified repositories &amp; live production deployments documented below.</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── 01 / SELECTED WORK ─────────────────────────────────── */}
      <section id="work" className="section-block section-block--bordered">
        <div className="site-container">
          <div className="section-title-wrap">
            <span className="section-index-num">01 / SELECTED WORK</span>
            <h2 className="section-heading">Production Applications &amp; Technical Builds</h2>
            <p className="section-description">
              A curated catalog of verified web platforms, live deployments, and architectural implementations.
              Each project reflects actual code, documented dependencies, and functional solutions.
            </p>
          </div>

          <ProjectsList />
        </div>
      </section>

      {/* ── 02 / CAPABILITIES ──────────────────────────────────── */}
      <section id="capabilities" className="section-block">
        <div className="site-container">
          <div className="section-title-wrap">
            <span className="section-index-num">02 / TECHNICAL CAPABILITIES</span>
            <h2 className="section-heading">Tools, Frameworks &amp; Engineering Skills</h2>
            <p className="section-description">
              Technologies and professional capabilities verified through practical application builds and client deliverables.
            </p>
          </div>

          <div className="capabilities-grid">
            {capabilityColumns.map((col) => (
              <div key={col.code} className="capability-column">
                <div className="capability-col-header">
                  <span className="capability-code">{col.code}</span>
                  <h3 className="capability-category">{col.category}</h3>
                </div>
                <p className="capability-summary">{col.summary}</p>
                <ul className="capability-list" aria-label={`${col.category} skills`}>
                  {col.skills.map((skill) => (
                    <li key={skill} className="capability-item">
                      <span className="capability-bullet" aria-hidden="true">—</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 / ABOUT ─────────────────────────────────────────── */}
      <section id="about" className="section-block section-block--bordered">
        <div className="site-container">
          <div className="section-title-wrap">
            <span className="section-index-num">03 / PROFILE &amp; BACKGROUND</span>
            <h2 className="section-heading">About Bassey Stephen</h2>
            <p className="section-description">
              A developer focused on practical problem-solving, reliable architecture, and clear communication.
            </p>
          </div>

          <div className="about-editorial-grid">
            <div className="about-main-narrative">
              <p className="narrative-paragraph">
                I am a full-stack web developer and Computer Science student at <strong>Akwa Ibom State University</strong>.
                My work centers on building web applications that solve real operational needs — from cryptocurrency investment
                dashboards with real-time balance calculations, to institutional scholarship document submission portals,
                to community event applications.
              </p>
              <p className="narrative-paragraph">
                My approach to software engineering prioritizes clarity, performance, and correctness. Rather than assembling
                superficial templates or bloated libraries, I write structured TypeScript, clean React and Next.js components,
                and maintainable database schemas using Prisma and Drizzle ORMs.
              </p>
              <p className="narrative-paragraph">
                Alongside development, my background includes two years of structured web writing and customer-facing sales work.
                This allows me to bridge technical engineering with stakeholder needs: diagnosing the actual root cause of a bug,
                communicating development progress in plain terms, and designing user experiences that don&apos;t confuse people.
              </p>
              <p className="narrative-paragraph">
                I am currently open to freelance client contracts (new builds, performance upgrades, bug fixes, API integrations)
                and remote full-stack or frontend development roles.
              </p>
            </div>

            <div className="about-sidebar">
              <div className="sidebar-box">
                <h3 className="sidebar-box-title">Key Profile Points</h3>
                <dl className="sidebar-details-list">
                  <div className="detail-entry">
                    <dt>Full Name</dt>
                    <dd>Bassey Stephen</dd>
                  </div>
                  <div className="detail-entry">
                    <dt>Brand</dt>
                    <dd>BasTech</dd>
                  </div>
                  <div className="detail-entry">
                    <dt>Location</dt>
                    <dd>Nigeria · Available for remote work</dd>
                  </div>
                  <div className="detail-entry">
                    <dt>Education</dt>
                    <dd>BSc Computer Science (Exp. 2028)</dd>
                  </div>
                  <div className="detail-entry">
                    <dt>Primary Stack</dt>
                    <dd>Next.js, React, TypeScript, PostgreSQL, PHP</dd>
                  </div>
                  <div className="detail-entry">
                    <dt>Availability</dt>
                    <dd className="detail-highlight">Contracts &amp; Remote Roles</dd>
                  </div>
                </dl>
              </div>

              <div className="sidebar-box sidebar-box--subtle">
                <h3 className="sidebar-box-title">Personal Dimensions</h3>
                <p className="sidebar-text">
                  Outside of coding, I spend time reading fiction, conducting research on emerging technology disciplines,
                  writing, travelling, and gaming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 / EXPERIENCE & EDUCATION ────────────────────────── */}
      <section id="experience" className="section-block">
        <div className="site-container">
          <div className="section-title-wrap">
            <span className="section-index-num">04 / WORK HISTORY &amp; EDUCATION</span>
            <h2 className="section-heading">Verified Experience &amp; Academic Background</h2>
            <p className="section-description">
              A chronological record of professional client engagements, content work, and academic pursuits.
            </p>
          </div>

          <div className="timeline-editorial-layout">
            {/* Experience Column */}
            <div className="timeline-group">
              <h3 className="timeline-group-header">Professional Work History</h3>
              <div className="timeline-stack">
                {professionalHistory.map((item) => (
                  <article key={item.id} className="timeline-card">
                    <div className="timeline-card-meta">
                      <span className="timeline-period-badge">{item.period}</span>
                      <span className="timeline-type-tag">{item.type}</span>
                    </div>
                    <h4 className="timeline-role-title">{item.role}</h4>
                    <p className="timeline-org">{item.organization}</p>
                    <ul className="timeline-deliverables-list">
                      {item.deliverables.map((bullet, bIdx) => (
                        <li key={bIdx} className="deliverable-item">
                          <span className="deliverable-dash" aria-hidden="true">—</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div className="timeline-group">
              <h3 className="timeline-group-header">Academic Background</h3>
              <div className="timeline-stack">
                {educationHistory.map((item) => (
                  <article key={item.id} className="timeline-card">
                    <span className="timeline-period-badge">{item.status}</span>
                    <h4 className="timeline-role-title">{item.qualification}</h4>
                    <p className="timeline-org">{item.institution}</p>
                    <p className="education-focus">{item.focus}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 / CONTACT & WORK WITH ME ────────────────────────── */}
      <section id="contact" className="section-block section-block--bordered section-block--contact">
        <div className="site-container">
          <div className="contact-editorial-layout">
            <div className="contact-header-content">
              <span className="section-index-num">05 / WORK WITH ME</span>
              <h2 className="section-heading">Have a Project or Role in Mind? Let&apos;s Build.</h2>
              <p className="section-description">
                I am actively taking on paid freelance development work and open to remote software engineering roles.
                Reach out directly with your requirements, codebase issues, or project brief.
              </p>

              <div className="services-bullet-group">
                <h3 className="services-title">Available For:</h3>
                <ul className="services-list">
                  <li>
                    <strong>Full-Stack Web Applications:</strong> Custom platforms engineered with Next.js, React, TypeScript, and relational databases.
                  </li>
                  <li>
                    <strong>Website Builds &amp; Modern Redesigns:</strong> Fast, mobile-responsive interfaces built to modern web standards.
                  </li>
                  <li>
                    <strong>Bug Fixes &amp; Codebase Troubleshooting:</strong> Diagnosing broken components, responsive layout defects, and build failures.
                  </li>
                  <li>
                    <strong>API &amp; Database Integrations:</strong> Setting up PostgreSQL/MySQL, Prisma/Drizzle schemas, authentication, and REST APIs.
                  </li>
                </ul>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="contact-direct-panel">
              <div className="direct-channel-card">
                <div className="channel-icon-wrap" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 7 10-7" />
                  </svg>
                </div>
                <div className="channel-body">
                  <span className="channel-label">Direct Email</span>
                  <a href="mailto:stebassey00@gmail.com" className="channel-value channel-value--link">
                    stebassey00@gmail.com
                  </a>
                  <span className="channel-subtext">Best for project briefs, role descriptions, and inquiries.</span>
                </div>
              </div>

              <div className="direct-channel-card">
                <div className="channel-icon-wrap" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div className="channel-body">
                  <span className="channel-label">Phone &amp; WhatsApp</span>
                  <a href="tel:+2347060885765" className="channel-value channel-value--link">
                    +234 706 088 5765
                  </a>
                  <span className="channel-subtext">Direct telephone or WhatsApp for urgent coordination.</span>
                </div>
              </div>

              <div className="direct-channel-card">
                <div className="channel-icon-wrap" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <div className="channel-body">
                  <span className="channel-label">GitHub Repository</span>
                  <a href="https://github.com/fatsanta00" target="_blank" rel="noreferrer" className="channel-value channel-value--link">
                    github.com/fatsanta00 ↗
                  </a>
                  <span className="channel-subtext">Inspect public code commits, configurations, and repositories.</span>
                </div>
              </div>

              <div className="direct-channel-card">
                <div className="channel-icon-wrap" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="channel-body">
                  <span className="channel-label">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/fatsanta/" target="_blank" rel="noreferrer" className="channel-value channel-value--link">
                    linkedin.com/in/fatsanta ↗
                  </a>
                  <span className="channel-subtext">Professional network and career connection.</span>
                </div>
              </div>

              <div className="contact-action-box">
                <a href="mailto:stebassey00@gmail.com" className="btn-solid btn-full">
                  Compose Email to stebassey00@gmail.com →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="site-footer">
        <div className="site-container">
          <div className="footer-inner">
            <div className="footer-brand-side">
              <span className="footer-brand">BasTech</span>
              <span className="footer-desc">Portfolio of Bassey Stephen — Full-Stack Web Developer.</span>
            </div>

            <div className="footer-links-side">
              <a href="#hero" className="footer-link">Back to Top ↑</a>
              <a href="https://github.com/fatsanta00" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
              <a href="https://www.linkedin.com/in/fatsanta/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
              <a href="mailto:stebassey00@gmail.com" className="footer-link">Email</a>
            </div>
          </div>
          <div className="footer-bottom-line">
            <span>© {new Date().getFullYear()} Bassey Stephen (BasTech). All rights reserved.</span>
            <span>Hosted on Vercel · Built with Next.js &amp; React</span>
          </div>
        </div>
      </footer>
    </>
  )
}
