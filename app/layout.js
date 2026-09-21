import '../styles/globals.css'
import Nav from '../components/Nav'

export const metadata = {
  title: 'Stephen Bassey | Web Developer',
  description:
    'Portfolio of Stephen Bassey — a Web Developer and Computer Science student building responsive web applications.',
  keywords: ['web developer', 'HTML', 'CSS', 'JavaScript', 'Python', 'Laravel', 'Stephen Bassey'],
  authors: [{ name: 'Stephen Bassey', url: 'https://github.com/fatsanta00' }],
  openGraph: {
    title: 'Stephen Bassey | Web Developer',
    description:
      'Portfolio of Stephen Bassey — a Web Developer and Computer Science student building responsive web applications.',
    siteName: 'Stephen Bassey Portfolio',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stephen Bassey | Web Developer',
    description: 'Portfolio of Stephen Bassey, Web Developer and Computer Science student.',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main id="main-content">{children}</main>
      </body>
    </html>
  )
}
