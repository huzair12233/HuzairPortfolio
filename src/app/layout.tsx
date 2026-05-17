import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SmoothScroll } from "@/components/smooth-scroll";
import { TopLoadingBar } from "@/components/top-loading-bar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://huzair.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ansari Huzair — ML Engineer & Full-Stack Developer",
  description:
    "CS graduate building AI-powered applications and full-stack platforms. ML, computer vision, generative AI, and modern web development.",
  keywords: [
    "Ansari Huzair",
    "ML Engineer",
    "Full-Stack Developer",
    "AI Applications",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
    "Computer Vision",
  ],
  authors: [{ name: "Ansari Huzair" }],
  creator: "Ansari Huzair",
  openGraph: {
    type: "website",
    title: "Ansari Huzair — ML Engineer & Full-Stack Developer",
    description:
      "CS graduate building AI-powered applications and full-stack platforms.",
    url: siteUrl,
    siteName: "Ansari Huzair",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansari Huzair — ML Engineer & Full-Stack Developer",
    description:
      "CS graduate building AI-powered applications and full-stack platforms.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SmoothScroll>
            <TopLoadingBar />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
