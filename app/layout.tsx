import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Investor Advisory — Diamond Capital Africa",
  description:
    "DCA offers mineral sector advisory for foreign investors entering Uganda's market. Active gold traders in Kampala — with real regulatory and government access across the broader mining sector.",
  openGraph: {
    title: "Investor Advisory — Diamond Capital Africa",
    description:
      "We know the mines, the labs, the regulators. Gold is our proof. Uganda's mineral sector is where we operate.",
    url: "https://invest.diamondcapitalafrica.com",
    siteName: "Diamond Capital Africa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
