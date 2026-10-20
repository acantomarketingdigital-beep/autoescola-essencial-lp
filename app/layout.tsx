import type { Metadata, Viewport } from "next";
import { Manrope, Montserrat } from "next/font/google";
import "./globals.css";
import { BUSINESS, SITE_URL } from "@/lib/site";

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

const title = "Autoescola Essencial | CFC Credenciado nº 027 em Paulínia/SP";
const description =
  "Autoescola Essencial, CFC privado credenciado nº 027 em Paulínia/SP. Aulas para habilitação nas categorias A, B e A+B, adição de categoria e aulas para habilitados, em carro e moto manuais ou automáticos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | Autoescola Essencial",
  },
  description,
  applicationName: BUSINESS.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title,
    description,
    images: [
      {
        url: "/img/fachada.png",
        width: 768,
        height: 1024,
        alt: "Fachada da Autoescola Essencial em Paulínia/SP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/img/fachada.png"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0B3474",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  taxID: BUSINESS.cnpj,
  url: SITE_URL,
  logo: `${SITE_URL}/img/logo.png`,
  image: `${SITE_URL}/img/fachada.png`,
  telephone: "+55-19-3884-2501",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:50",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:50",
      closes: "12:00",
    },
  ],
  sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${montserrat.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
