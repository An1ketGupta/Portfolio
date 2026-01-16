import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://justaniket.vercel.app"),
  title: {
    default: "Aniket Gupta - Full Stack Developer | Software Engineer Portfolio",
    template: "%s | Aniket Gupta"
  },
  description: "Full Stack Developer and Software Engineer from IIITDM Kurnool. Specializing in React, Next.js, Node.js, and modern web technologies. Building scalable applications with 500+ active users.",
  keywords: [
    "Aniket Gupta",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack",
    "Portfolio",
    "IIITDM Kurnool",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "AWS",
    "Jhansi",
    "Uttar Pradesh"
  ],
  authors: [{ name: "Aniket Gupta", url: "https://github.com/An1ketGupta" }],
  creator: "Aniket Gupta",
  publisher: "Aniket Gupta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://justaniket.vercel.app",
    siteName: "Aniket Gupta Portfolio",
    title: "Aniket Gupta - Full Stack Developer | Software Engineer",
    description: "Full Stack Developer specializing in React, Next.js, and Node.js. Building fast, reliable web applications with modern technologies.",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Aniket Gupta - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniket Gupta - Full Stack Developer",
    description: "Software Engineer building fast, reliable web applications. React, Next.js, Node.js specialist.",
    creator: "@funnyket_",
    site: "@funnyket_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://aniketgupta.dev",
  },
  category: "Portfolio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aniket Gupta",
  url: "https://aniketgupta.dev",
  image: "https://aniketgupta.dev/og-image.jpg",
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelancer"
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Indian Institute of Information Technology Design and Manufacturing Kurnool",
    abbreviation: "IIITDM Kurnool"
  },
  sameAs: [
    "https://github.com/An1ketGupta",
    "https://www.linkedin.com/in/aniket-gupta-06a56128a/",
    "https://x.com/funnyket_"
  ],
  email: "guptaaniket600.ag@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jhansi",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN"
  },
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "Full Stack Development",
    "Web Development"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
