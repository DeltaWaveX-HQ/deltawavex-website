import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Delta Wave X — Building Products That Scale",
  description:
    "Delta Wave X is a premium technology company and product studio. We build mobile apps, web platforms, AI solutions, SaaS systems, and custom software that scale.",
  keywords: [
    "mobile app development",
    "web development",
    "SaaS development",
    "AI solutions",
    "startup studio",
    "product development",
    "Delta Wave X",
  ],
  authors: [{ name: "Delta Wave X" }],
  creator: "Delta Wave X",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deltawavex.com",
    siteName: "Delta Wave X",
    title: "Delta Wave X — Building Products That Scale",
    description:
      "We transform ideas into powerful digital products through mobile apps, web platforms, AI solutions, SaaS systems, and custom software development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delta Wave X — Building Products That Scale",
    description:
      "Premium technology company building scalable digital products.",
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
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
