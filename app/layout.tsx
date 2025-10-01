import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Falkenberg NEXT - Väx med Falkenberg",
  description: "En ny stationsnära stadsdel full av drömmar. Falkenberg NEXT händer nu. Vi söker fastighetsutvecklare som vill hjälpa oss flytta gränserna.",
  keywords: ["Falkenberg", "fastighetsutveckling", "Västkusten", "Halland", "kontorslokaler", "etablering"],
  openGraph: {
    title: "Falkenberg NEXT - Väx med Falkenberg",
    description: "En ny stationsnära stadsdel full av drömmar",
    type: "website",
    locale: "sv_SE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}