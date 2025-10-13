import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Global metadata controls SEO + social link previews for the entire site.
export const metadata: Metadata = {
  metadataBase: new URL("https://cornelious.design"),
  title: "Cornelious - Product Designer",
  description:
    "Product Designer passionate about crafting meaningful digital experiences focusing on user-centered design. Currently studying UX Design at DePaul University in Chicago.",
  openGraph: {
    title: "Cornelious Williams · Product Designer",
    description:
      "Product Designer passionate about crafting meaningful digital experiences focusing on user-centered design. Currently studying UX Design at DePaul University in Chicago.",
    url: "https://example.com",
    siteName: "Cornelious Williams Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cornelious Williams portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cornelious Williams · Product Designer",
    description:
      "Product Designer passionate about crafting meaningful digital experiences focusing on user-centered design. Currently studying UX Design at DePaul University in Chicago.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
