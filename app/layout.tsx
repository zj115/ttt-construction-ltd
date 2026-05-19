import type { Metadata } from "next";
import { Instrument_Serif, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap"
});

export const metadata: Metadata = {
  title: "TTT Construction Ltd | Residential Builders in New Zealand",
  description:
    "Residential new builds, renovations, extensions, and project management services by TTT Construction Ltd in New Zealand.",
  keywords: [
    "TTT Construction Ltd",
    "New Zealand construction",
    "renovation",
    "project management",
    "residential construction",
    "home extensions",
    "detached homes"
  ],
  openGraph: {
    title: "TTT Construction Ltd | Residential Builders in New Zealand",
    description:
      "Reliable residential new build, renovation, extension, and project management services across New Zealand.",
    type: "website",
    locale: "en_NZ"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
