import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anbuselvan T. — Backend AI & Data Engineering",
  description:
    "Portfolio of Anbuselvan T., a Backend-focused AI & Data Engineering student specializing in Context Engineering and production-grade systems.",
  keywords: [
    "Anbuselvan",
    "AI Engineering",
    "Data Engineering",
    "Backend",
    "RAG",
    "Vector Databases",
    "Python",
  ],
  authors: [{ name: "Anbuselvan T." }],
  openGraph: {
    title: "Anbuselvan T. — Backend AI & Data Engineering",
    description:
      "Portfolio of Anbuselvan T., a Backend-focused AI & Data Engineering student.",
    url: "https://anbudev.me",
    siteName: "anbudev.me",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Load Inter font — root layout applies site-wide, not page-specific */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-[#0a0a0a] text-[#f0f0f0] antialiased">
        {children}
      </body>
    </html>
  );
}
