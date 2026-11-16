import type { Metadata, Viewport } from "next";
import { Manrope, Montserrat } from "next/font/google";
import "./globals.css";
import { BUSINESS, SITE_URL } from "@/lib/site";
import { jsonLd, localBusinessSchema } from "@/lib/schema";
import { AnalyticsHead, AnalyticsNoScript } from "@/components/Analytics";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const title = "Autoescola Essencial em Paulínia | CFC Credenciado nº 027";
const description =
  "Autoescola em Paulínia/SP, CFC credenciado nº 027. CNH categorias A, B e A+B, adição de categoria e aulas para habilitados, com carro e moto automáticos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | Autoescola Essencial",
  },
  description,
  keywords: [
    "autoescola Paulínia",
    "autoescola em Paulínia",
    "CFC Paulínia",
    "CNH Paulínia",
    "habilitação Paulínia",
    "carteira de motorista Paulínia",
    "autoescola carro automático",
    "autoescola moto automática",
    "adição de categoria",
    "aulas para habilitados",
    "Autoescola Essencial",
  ],
  applicationName: BUSINESS.name,
  category: "education",
  alternates: { canonical: "/" },
  // og:image / twitter:image vêm de app/opengraph-image.png e app/twitter-image.png (1200x630)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0B3474",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marca que o JS está ativo: só então os elementos [data-reveal] começam ocultos. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body>
        <AnalyticsNoScript />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(localBusinessSchema)} />
        <AnalyticsHead />
      </body>
    </html>
  );
}
