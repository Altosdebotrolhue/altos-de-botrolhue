import type { Metadata } from "next";
import Script from "next/script";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://altos-de-botrolhue.vercel.app"),

  title: "Altos de Botrolhue | Centro de Eventos en Labranza, Temuco",

  description:
    "Altos de Botrolhue es un centro de eventos en Labranza, Temuco, rodeado de naturaleza. Realizamos matrimonios, cumpleaños, celebraciones familiares, eventos corporativos y eventos especiales.",

  authors: [
    {
      name: "Altos de Botrolhue",
    },
  ],

  alternates: {
    canonical: "https://altos-de-botrolhue.vercel.app/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Altos de Botrolhue | Centro de Eventos en Temuco",

    description:
      "Celebra matrimonios, cumpleaños, celebraciones familiares y eventos especiales en un entorno natural en Labranza, Temuco.",

    url: "https://altos-de-botrolhue.vercel.app/",

    siteName: "Altos de Botrolhue",

    locale: "es_CL",

    type: "website",

    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Altos de Botrolhue - Centro de Eventos en Temuco",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Altos de Botrolhue | Centro de Eventos en Temuco",

    description:
      "Centro de eventos en Labranza, Temuco, rodeado de naturaleza.",

    images: ["/hero.jpg"],
  },

  verification: {
    google: "KDQcVlOdVjEFRuBZPPlz-kH-H_piHmLgFwapE9ku8hs",
  },
};

/* Datos estructurados para Google */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://altos-de-botrolhue.vercel.app/#business",

  name: "Altos de Botrolhue",

  description:
    "Centro de eventos en Labranza, Temuco, rodeado de naturaleza. Ideal para matrimonios, cumpleaños, celebraciones familiares, eventos corporativos y eventos especiales.",

  url: "https://altos-de-botrolhue.vercel.app/",

  telephone: "+56926194264",

  email: "Altosbotrolhue@gmail.com",

  image: "https://altos-de-botrolhue.vercel.app/hero.jpg",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Labranza",
    addressRegion: "La Araucanía",
    addressCountry: "CL",
  },

  areaServed: {
    "@type": "City",
    name: "Temuco",
  },

  openingHours: "Mo-Su 09:00-20:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HS82S5EQX4"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HS82S5EQX4');
          `}
        </Script>
      </body>
    </html>
  );
}