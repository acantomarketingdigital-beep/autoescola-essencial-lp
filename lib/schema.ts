import { BUSINESS, SITE_URL } from "./site";

/**
 * Dados estruturados (schema.org / JSON-LD).
 * O negócio é declarado como LocalBusiness + DrivingSchool para que buscadores e IAs
 * entendam imediatamente: quem é, onde fica, CNPJ, contatos e serviços.
 */
const BUSINESS_ID = `${SITE_URL}/#autoescola`;

const services = [
  "Primeira habilitação — Categoria A (moto)",
  "Primeira habilitação — Categoria B (carro)",
  "Primeira habilitação — Categoria A+B (carro e moto)",
  "Adição de categoria",
  "Aulas para habilitados (perda do medo de dirigir)",
  "Aulas em carro e moto automáticos",
  "Pacotes de aulas preparatórias para o exame prático",
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "DrivingSchool"],
      "@id": BUSINESS_ID,
      name: BUSINESS.name,
      legalName: BUSINESS.legalName,
      description:
        "Autoescola Essencial: empresa privada, Centro de Formação de Condutores (CFC) credenciado sob o nº 027 em Paulínia/SP. Aulas para habilitação nas categorias A, B e A+B, adição de categoria e aulas para habilitados, em carro e moto manuais ou automáticos.",
      url: SITE_URL,
      logo: `${SITE_URL}/img/logo.png`,
      image: [`${SITE_URL}/img/fachada.png`, `${SITE_URL}/opengraph-image.png`],
      taxID: BUSINESS.cnpj,
      identifier: [
        { "@type": "PropertyValue", propertyID: "CNPJ", value: BUSINESS.cnpj },
        { "@type": "PropertyValue", propertyID: "Credenciamento CFC", value: BUSINESS.cfcNumber },
      ],
      telephone: "+55-19-3884-2501",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+55-19-3884-2501",
          contactType: "customer service",
          areaServed: "BR",
          availableLanguage: "Portuguese",
        },
        {
          "@type": "ContactPoint",
          telephone: "+55-19-99901-7200",
          contactType: "customer service",
          contactOption: "WhatsApp",
          areaServed: "BR",
          availableLanguage: "Portuguese",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.state,
        postalCode: BUSINESS.address.zip,
        addressCountry: "BR",
      },
      hasMap: BUSINESS.mapsUrl,
      areaServed: ["Paulínia", "Sumaré", "Hortolândia"].map((name) => ({
        "@type": "City",
        name,
      })),
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
      paymentAccepted: "PIX, Cartão de crédito, Cartão de débito, Dinheiro",
      currenciesAccepted: "BRL",
      knowsLanguage: "pt-BR",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços da Autoescola Essencial",
        itemListElement: services.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, provider: { "@id": BUSINESS_ID } },
        })),
      },
      sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BUSINESS.name,
      inLanguage: "pt-BR",
      publisher: { "@id": BUSINESS_ID },
    },
  ],
};

export function faqSchema(faqs: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Serializa JSON-LD com escape de "<" para não quebrar o <script>. */
export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
