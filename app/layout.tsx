import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://mohammedawaiz-2026.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mohammed Awaiz — Full Stack Web Developer",
  description:
    "Mohammed Awaiz is a full stack web developer building fast, AI-integrated web applications with React, Next.js and Node.js.",
  keywords: [
    "Mohammed Awaiz",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer UAE",
    "Frontend Engineer",
  ],
  authors: [{ name: "Mohammed Awaiz" }],
  creator: "Mohammed Awaiz",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mohammed Awaiz — Full Stack Web Developer",
    description:
      "Full stack developer building fast, AI-integrated web applications with React, Next.js and Node.js.",
    url: siteUrl,
    siteName: "Mohammed Awaiz",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Awaiz — Full Stack Web Developer",
    description:
      "Full stack developer building fast, AI-integrated web applications with React, Next.js and Node.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="MRBYKHpOA65wMeP5_F7ZjyPSpcijC_-SxoyV_VgfRkM"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#07070b] text-[#edecf3]">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-46EKSSLD12"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;

          gtag('js', new Date());
          gtag('config', 'G-46EKSSLD12');
        `}
        </Script>

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-full"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohammed Awaiz",
              jobTitle: "Full Stack Web Developer",
              url: siteUrl,
              email: "mailto:awaizshamshad@gmail.com",
              sameAs: [
                "https://www.linkedin.com/in/-mohammed-awaiz/",
                "https://www.instagram.com/awaiz167/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
