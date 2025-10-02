import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

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
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}