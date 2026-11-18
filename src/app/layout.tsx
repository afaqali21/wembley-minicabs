import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wembley Taxi & Minicabs | Fixed Fares | 24/7 Airport Transfers",
  description:
    "Looking for a taxi in Wembley? Book Wembley Minicabs for fixed fares, no surcharge, 24/7 service, large vehicles and reliable airport transfers. Call 0208 204 4444.",
  metadataBase: new URL("https://www.wembley-minicabs.co.uk"),
  alternates: {
    canonical: "https://www.wembley-minicabs.co.uk/",
  },
  keywords: [
    "Wembley Taxi",
    "Wembley Minicabs",
    "Taxi Wembley",
    "Wembley Taxi Service",
    "Wembley Cabs",
    "Taxi Near Wembley",
    "Minicabs Wembley",
    "Wembley to Heathrow Airport",
    "Wembley Airport Transfers",
    "Wembley to Gatwick Airport",
    "Wembley to Luton Airport",
    "Wembley to Stansted Airport",
    "Wembley 7 Seater Taxi",
    "Wembley 8 Seater Taxi",
    "Wembley Stadium Taxi",
    "Taxi Wembley Park",
    "24 Hour Taxi Wembley",
  ],
  authors: [{ name: "Minicabs UK Ltd" }],
  openGraph: {
    title: "Wembley Taxi & Minicabs | Fixed Fares | 24/7 Airport Transfers",
    description:
      "Looking for a taxi in Wembley? Book Wembley Minicabs for fixed fares, no surcharge, 24/7 service, large vehicles and reliable airport transfers. Call 0208 204 4444.",
    url: "https://www.wembley-minicabs.co.uk/",
    siteName: "Wembley Minicabs",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wembley Taxi & Minicabs | Fixed Fares | 24/7 Airport Transfers",
    description:
      "Looking for a reliable taxi in Wembley? Book with Minicabs UK Ltd. Fixed fares, TfL licensed drivers, 24/7 service. Call 0208 204 4444.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#7bc010] selection:text-white">
        {children}
      </body>
    </html>
  );
}
