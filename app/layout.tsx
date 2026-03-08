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

const BASE_URL = "https://invest.diamondcapitalafrica.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Uganda Gold & Mineral Sector Investment Advisory | Diamond Capital Africa",
    template: "%s | Diamond Capital Africa",
  },
  description:
    "Foreign investor advisory for Uganda's gold and mineral sector. Active traders in Kampala — real regulatory access, real government relationships.",
  keywords: [
    "Uganda gold investment",
    "Uganda mining investment",
    "East Africa mineral sector advisory",
    "Uganda gold sector foreign investment",
    "Kampala gold traders",
    "Uganda FDI advisory",
    "mineral investment Uganda",
    "gold mining advisory Africa",
    "Diamond Capital Africa",
    "Uganda investor advisory",
  ],
  authors: [{ name: "Diamond Capital Africa", url: "https://diamondcapitalafrica.com" }],
  creator: "Diamond Capital Africa",
  publisher: "Diamond Capital Africa",
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Uganda Gold & Mineral Sector Investment Advisory | Diamond Capital Africa",
    description:
      "We know the mines, the labs, the regulators. Active gold traders in Kampala — with real regulatory and government access across Uganda's broader mineral sector.",
    url: BASE_URL,
    siteName: "Diamond Capital Africa — Investor Advisory",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uganda Gold & Mineral Investment Advisory | Diamond Capital Africa",
    description:
      "Foreign investor advisory for Uganda's gold and mineral sector. Active traders in Kampala — not researchers.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://diamondcapitalafrica.com/#organization",
      name: "Diamond Capital Africa",
      url: "https://diamondcapitalafrica.com",
      logo: `${BASE_URL}/Logo.png`,
      description:
        "Diamond Capital Africa is an active gold trading and mineral sector advisory firm based in Kampala, Uganda.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kampala",
        addressCountry: "UG",
      },
      areaServed: "Worldwide",
      sameAs: ["https://diamondcapitalafrica.com"],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Diamond Capital Africa — Investor Advisory",
      publisher: { "@id": "https://diamondcapitalafrica.com/#organization" },
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#service`,
      name: "Uganda Gold & Mineral Sector Investment Advisory",
      provider: { "@id": "https://diamondcapitalafrica.com/#organization" },
      serviceType: "Investment Advisory",
      description:
        "End-to-end advisory for foreign investors entering Uganda's gold and mineral sector — regulatory navigation, partner vetting, compliance structuring, and ongoing market intelligence.",
      areaServed: {
        "@type": "Country",
        name: "Uganda",
      },
      url: BASE_URL,
    },    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How can a foreign investor enter Uganda's gold sector?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most reliable path is through an established, licensed operator already active in the market. Diamond Capital Africa can introduce you to vetted suppliers, walk you through the regulatory requirements, and help you structure a compliant investment.",
          },
        },
        {
          "@type": "Question",
          name: "What licences are required to invest in Uganda's mining sector?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on your structure, you may need a UCDA export licence, Bank of Uganda compliance registration, and a DGSM licence from the Ministry of Energy. DCA maps the exact requirements for your situation.",
          },
        },
        {
          "@type": "Question",
          name: "Is Uganda's mineral sector safe for foreign investors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Uganda has a functioning regulatory framework and active export infrastructure. The main risks — supplier verification, compliance gaps, currency exposure — are manageable with the right local partner.",
          },
        },
        {
          "@type": "Question",
          name: "What does Diamond Capital Africa's advisory engagement include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Engagements include market entry assessments, regulatory mapping, warm introductions to vetted suppliers, and ongoing intelligence retainers. Structured as one-time advisory or monthly retainer.",
          },
        },
        {
          "@type": "Question",
          name: "Does DCA work with investors outside East Africa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most advisory clients are foreign investors — family offices, mining funds, and institutional investors based in Europe, the Middle East, and North America.",
          },
        },
      ],
    },  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
