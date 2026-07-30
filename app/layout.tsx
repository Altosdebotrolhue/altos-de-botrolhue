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

export const metadata: Metadata = {
  metadataBase: new URL("https://altos-de-botrolhue.vercel.app"),

  title: "Altos de Botrolhue | Centro de Eventos en Labranza, Temuco",

  description:
    "Centro de eventos en Labranza, Temuco, rodeado de naturaleza. Realizamos matrimonios, cumpleaños, celebraciones familiares, eventos corporativos y celebraciones especiales.",

  keywords: [
    "centro de eventos Temuco",
    "centro de eventos Labranza",
    "matrimonios Temuco",
    "eventos Temuco",
    "celebraciones Temuco",
    "Altos de Botrolhue",
  ],

  authors: [
    {
      name: "Altos de Botrolhue",
    },
  ],

  openGraph: {
    title: "Altos de Botrolhue | Centro de Eventos en Temuco",
    description:
      "Celebra matrimonios, cumpleaños y eventos especiales en un entorno natural en Labranza, Temuco.",
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
      <body>{children}</body>
    </html>
  );
}