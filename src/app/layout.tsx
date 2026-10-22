import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BUSINESS_INFO } from "@/data/hangar-data";

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Hangar Auto | Estética Automóvel de Precisão & Higienização Residencial",
  description: "Estética automóvel de luxo, polimento técnico, vitrificação cerâmica e higienização residencial profunda em Herval d'Oeste, Joaçaba e região. Avaliação 5.0 no Google.",
  keywords: [
    "estética automotiva Herval d'Oeste",
    "estética automotiva Joaçaba",
    "polimento técnico SC",
    "vitrificação cerâmica",
    "higienização de sofás Herval d'Oeste",
    "higienização residencial Joaçaba",
    "impermeabilização de estofados",
    "Hangar Auto",
    "detalhamento automotivo"
  ],
  authors: [{ name: "Hangar Auto" }],
  creator: "Hangar Auto",
  metadataBase: new URL("https://hangarauto.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://hangarauto.com.br",
    title: "Hangar Auto | A Perfeição em Cada Detalhe",
    description: "Excelência em estética automóvel e higienização profunda residencial em Herval d'Oeste e Joaçaba - SC. Avaliação 5.0 ★★★★★ no Google.",
    siteName: "Hangar Auto",
    images: [
      {
        url: "/estetica/Gemini_Generated_Image_2cyq0a2cyq0a2cyq.jpg",
        width: 1200,
        height: 630,
        alt: "Hangar Auto - Estética Automotiva de Precisão",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hangar Auto | Estética Automotiva & Higienização Residencial",
    description: "Polimento técnico, vitrificação cerâmica e higienização de sofás em Herval d'Oeste e Joaçaba.",
    images: ["/estetica/Gemini_Generated_Image_2cyq0a2cyq0a2cyq.jpg"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://hangarauto.com.br/#business",
    name: BUSINESS_INFO.name,
    image: "https://hangarauto.com.br/estetica/Gemini_Generated_Image_2cyq0a2cyq0a2cyq.jpg",
    telephone: "+5549988104554",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.185,
      longitude: -51.498,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "12:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "28",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Vital Fedrigo",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: "Perfeito em cada detalhe, meu carro nunca ficou tão bonito. Super recomendo.",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Herval d'Oeste" },
      { "@type": "City", name: "Joaçaba" },
      { "@type": "City", name: "Luzerna" },
    ],
  };

  return (
    <html lang="pt-BR" className={`${syne.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#09090B] text-zinc-100 antialiased selection:bg-zinc-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
