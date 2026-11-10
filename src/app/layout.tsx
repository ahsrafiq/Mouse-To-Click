import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F7FA' },
    { media: '(prefers-color-scheme: dark)', color: '#1C1F26' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mousetoclick.com'),
  title: {
    default: 'MouseToClick | Global Outsourcing & Business Solutions',
    template: '%s | MouseToClick',
  },
  description:
    'MouseToClick provides flexible global outsourcing solutions across healthcare support, security monitoring, finance and accounting, customer service, IT support, and digital business operations.',
  keywords: [
    'Global Outsourcing Services',
    'Remote Business Support',
    'Healthcare Administrative Support',
    'Remote CCTV Monitoring',
    'Finance and Accounting Outsourcing',
    'Customer Support Outsourcing',
    'IT Support Services',
    'Digital Business Solutions',
    'Business Process Outsourcing',
    'BPO',
  ],
  authors: [{ name: 'MouseToClick' }],
  creator: 'MouseToClick',
  publisher: 'MouseToClick',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'MouseToClick | Global Outsourcing & Business Solutions',
    description:
      'Flexible global outsourcing solutions across healthcare support, security monitoring, finance, customer service, IT support, and digital operations.',
    url: 'https://mousetoclick.com',
    siteName: 'MouseToClick',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MouseToClick | Global Outsourcing & Business Solutions',
    description:
      'Innovating the Way Businesses Work. Global outsourcing solutions across healthcare, security, finance, customer support, IT, and digital operations.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Blocking script: runs before paint to avoid flash-of-dark. */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('mousetoclick_theme');if(t==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-charcoal dark:bg-charcoal dark:text-white flex flex-col font-body antialiased selection:bg-blue-electric selection:text-white transition-colors duration-200">
        <ThemeProvider>
          {/* Accessible Skip-to-Content Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] bg-blue-electric text-white px-5 py-2.5 rounded-md font-body text-xs uppercase tracking-wider shadow-electric-glow focus:outline-none focus:ring-2 focus:ring-white"
          >
            Skip to Main Content
          </a>

          <Navbar />
          <main id="main-content" className="flex-grow pt-20" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
