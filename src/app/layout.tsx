import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Inconsolata } from "next/font/google";
import "./globals.css";
import { StructuredData } from "./structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  weight: ["400", "700"],
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://menezis.ai'),
  title: {
    default: 'Menezis | Autonomous Infrastructure Platform',
    template: '%s | Menezis'
  },
  description: 'Deploy infrastructure with natural language. 16 MCP tools for Claude, Cursor, Windsurf, Roo & Antigravity. Post-quantum ML-KEM-768 security. Free tier available. From 5.99€/month.',
  keywords: [
    'MCP server',
    'Model Context Protocol',
    'Claude infrastructure',
    'AI deployment',
    'post-quantum security',
    'ML-KEM-768',
    'cloud infrastructure',
    'autonomous monitoring',
    'natural language deployment',
    'infrastructure as code',
    'Docker orchestration',
    'Kubernetes deployment',
    'serverless',
    'DevOps automation',
    'self-healing infrastructure'
  ],
  authors: [{ name: 'Menezis', url: 'https://menezis.ai' }],
  creator: 'Menezis',
  publisher: 'Menezis',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://menezis.ai',
    siteName: 'Menezis',
    title: 'Menezis | Autonomous Infrastructure Platform',
    description: 'Deploy infrastructure with natural language. 16 MCP tools, post-quantum security, autonomous monitoring. Free tier available.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Menezis - Infrastructure at the Speed of Thought',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menezis | Autonomous Infrastructure Platform',
    description: 'Deploy infrastructure with natural language. Native MCP integration for Claude, Cursor & Windsurf.',
    images: ['/og-image.png'],
    creator: '@menezis_ai',
  },
  alternates: {
    canonical: 'https://menezis.ai',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#00FF41',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${inconsolata.variable} antialiased bg-black text-white`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-terminal-green text-black px-4 py-2 rounded z-50 font-mono text-sm"
        >
          Skip to content
        </a>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
