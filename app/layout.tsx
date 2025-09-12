import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'TechVantage Solutions - Custom SaaS Development & Digital Marketing Agency',
    template: '%s | TechVantage Solutions'
  },
  description: 'Enterprise-grade custom SaaS development and digital marketing solutions for mid-size businesses. Specializing in scalable applications, AI integration, and data-driven marketing strategies.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  keywords: [
    'custom SaaS development',
    'enterprise solutions',
    'digital marketing agency',
    'AI integration',
    'cloud infrastructure',
    'business intelligence',
    'data analytics',
    'marketing automation',
    'enterprise software',
    'Next.js development',
    'React applications',
    'Node.js backend',
    'cloud architecture',
    'system integration',
    'digital transformation',
    'performance marketing',
    'B2B solutions',
    'enterprise software',
    'technology consulting'
  ],
  authors: [{ name: 'Sachin Kumar' }],
  creator: 'Sachin Kumar',
  publisher: 'Sachin Kumar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sachinkumar.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sachinkumar.dev',
    title: 'Sachin Kumar - Technical Founder & Hybrid Operator',
    description: 'Technical founder and hybrid operator helping eCommerce & service businesses scale with full-stack development, marketing automation, and growth systems.',
    siteName: 'Sachin Kumar Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sachin Kumar - Technical Founder & Hybrid Operator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sachin Kumar - Technical Founder & Hybrid Operator',
    description: 'Technical founder and hybrid operator helping eCommerce & service businesses scale with full-stack development, marketing automation, and growth systems.',
    creator: '@sachinkumar',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Mobile Viewport and Touch Optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sachin Kumar" />
        
        {/* Android-specific optimizations */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-navbutton-color" content="#3b82f6" />
        
        {/* Touch and interaction optimizations */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Performance optimizations */}
        <meta name="renderer" content="webkit" />
        <meta name="force-rendering" content="webkit" />
        
        {/* Icons and manifest */}
        <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/twosapiens/image/upload/c_fill,h_180,w_180/v1750163800/WhatsApp_Image_2025-05-30_at_4.08.48_PM_uxhojj.jpg" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/twosapiens/image/upload/c_fill,h_32,w_32/v1750163800/WhatsApp_Image_2025-05-30_at_4.08.48_PM_uxhojj.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://res.cloudinary.com/twosapiens/image/upload/c_fill,h_16,w_16/v1750163800/WhatsApp_Image_2025-05-30_at_4.08.48_PM_uxhojj.jpg" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased touch-manipulation`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 