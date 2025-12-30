import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type React from "react";
import Basics from "./assets/TypeScript/_essentials/basics";
import ScrollToTop from "./assets/TypeScript/_module/scrollToTop";
import PageLoader from "./assets/TypeScript/_module/pageLoader";
import SmoothScroll from "./assets/TypeScript/_module/smoothScroll";
import AOSProvider from "./assets/TypeScript/_module/aos";
import ClientLayout from "./ClientLayout";
import "./assets/scss/style.scss"; 
 
export const metadata: Metadata = {
  title: "Portfolio - Nico Beyer",
  description: "Das persönliche Portfolio von Nico Beyer – Webentwicklung, barrierefreie Projekte und kreative Lösungen mit Next.js.",
  keywords: [
    "Nico Beyer",
    "Portfolio",
    "Webentwicklung",
    "Next.js",
    "Barrierefreiheit",
    "Web Accessibility",
    "Frontend",
    "SEO",
    "UI/UX Design",
    "Web Projekte"
  ],
  generator: "Next.js v14",
  applicationName: "Portfolio Nico Beyer",
  creator: "Nico Beyer",
  publisher: "Nico Beyer",
  referrer: "no-referrer-when-downgrade",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/images/favicon.ico",
    shortcut: "/assets/images/favicon.ico",
  },
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
  themeColor: "#ffffff",
};

const richSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.nbeyer.tech/#website",
      "url": "https://www.nbeyer.tech",
      "name": "Portfolio Nico Beyer",
      "publisher": {
        "@id": "https://www.nbeyer.tech/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.nbeyer.tech/#person",
      "name": "Nico Beyer",
      "url": "https://www.nbeyer.tech",
      "jobTitle": "Frontend Developer",
      "sameAs": [
        "https://de.linkedin.com/in/nico-beyer-1347a8377",
        "https://www.xing.com/profile/Nico_Beyer031219"
      ]
    }
  ]
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(richSchema, null, 2) }}
        />
      </head>
      <body>
        <PageLoader />
        <ScrollToTop />
        <SmoothScroll />
        <Basics />
        
        <AOSProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AOSProvider>
      </body> 

      <Analytics/>
      <SpeedInsights/>
    </html>
  ); 
}
