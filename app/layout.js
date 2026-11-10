import '../styles/globals.css'
import Nav from '../components/Nav'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Bassey Stephen | Full-Stack Web Developer · BasTech',
  description:
    'Portfolio of Bassey Stephen (BasTech) — Full-stack web developer and Computer Science student building robust web applications with React, Next.js, TypeScript, PHP/Laravel, and PostgreSQL. Nigeria · Available for remote work.',
  keywords: [
    'Bassey Stephen',
    'BasTech',
    'Web Developer Nigeria',
    'Remote Web Developer',
    'Full-Stack Developer',
    'Next.js Developer',
    'React Developer',
    'TypeScript Developer',
    'Laravel Developer',
    'PostgreSQL',
    'Akwa Ibom State University',
  ],
  authors: [{ name: 'Bassey Stephen', url: 'https://github.com/fatsanta00' }],
  metadataBase: new URL('https://bastech.vercel.app'),
  alternates: {
    canonical: 'https://bastech.vercel.app',
  },
  openGraph: {
    title: 'Bassey Stephen | Full-Stack Web Developer · BasTech',
    description:
      'Portfolio of Bassey Stephen — Full-stack web applications, custom website builds, responsive interfaces, and database integrations. Nigeria · Available for remote work.',
    url: 'https://bastech.vercel.app',
    siteName: 'BasTech — Bassey Stephen',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/projects/aberra.svg',
        width: 1200,
        height: 630,
        alt: 'BasTech — Bassey Stephen Full-Stack Web Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bassey Stephen | Full-Stack Web Developer · BasTech',
    description:
      'Full-stack web developer and Computer Science student building robust web applications with Next.js, React, TypeScript, and Laravel. Nigeria · Available for remote work.',
    images: ['/projects/aberra.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#090b10',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Bassey Stephen',
  alternateName: 'BasTech',
  jobTitle: 'Full-Stack Web Developer',
  url: 'https://bastech.vercel.app',
  email: 'stebassey00@gmail.com',
  telephone: '+2347060885765',
  nationality: 'Nigerian',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NG',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Akwa Ibom State University',
  },
  sameAs: [
    'https://github.com/fatsanta00',
    'https://www.linkedin.com/in/fatsanta/',
  ],
  knowsAbout: [
    'Next.js',
    'React',
    'TypeScript',
    'PostgreSQL',
    'Prisma ORM',
    'Drizzle ORM',
    'PHP',
    'Laravel',
    'Full-Stack Web Development',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
