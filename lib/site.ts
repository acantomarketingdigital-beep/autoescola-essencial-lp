/**
 * Fonte única de verdade para dados institucionais e de contato.
 * CTAs de WhatsApp: use <WhatsAppLink cta="..."> (components/WhatsAppLink.tsx) com mensagens em lib/ctas.ts.
 * Os links são sempre diretos para wa.me (sem encurtador/redirect).
 */
export const SITE_URL = "https://autoescolaessencial.com.br";

export const WHATSAPP_NUMBER = "5519999017200";

/** Monta o link oficial wa.me com a mensagem pré-preenchida. */
export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const BUSINESS = {
  name: "Autoescola Essencial",
  legalName: "CENTRO DE FORMACAO DE CONDUTORES A&B SANTOS & MILEO LTDA",
  cnpj: "36.670.858/0001-00",
  cfcNumber: "027",
  badge: "Autoescola Essencial — CFC Privado Credenciado nº 027",
  disclaimer:
    "A Autoescola Essencial é uma empresa privada, Centro de Formação de Condutores (CFC) credenciado sob o nº 027. Serviços e taxas estatais são de responsabilidade exclusiva dos órgãos competentes.",
  address: {
    street: "Avenida Antônio Batista Piva, 2.740, sala 2",
    district: "Parque Bom Retiro",
    city: "Paulínia",
    state: "SP",
    zip: "13142-070",
    full: "Avenida Antônio Batista Piva, 2.740, sala 2, Parque Bom Retiro — Paulínia/SP, CEP: 13142-070",
  },
  phones: [
    { label: "(19) 3884-2501", href: "tel:+551938842501" },
    { label: "(19) 99901-7200", href: "tel:+5519999017200" },
  ],
  hours: ["Segunda a sexta: 7h50 às 18h", "Sábado: 7h50 às 12h"],
  social: {
    instagram: "https://www.instagram.com/autoescolaessencial2/",
    facebook: "https://www.facebook.com/profile.php?id=61573312199921",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Ant%C3%B4nio+Batista+Piva%2C+2740+-+Parque+Bom+Retiro%2C+Paul%C3%ADnia+-+SP%2C+13142-070",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Ant%C3%B4nio+Batista+Piva%2C+2740+-+Parque+Bom+Retiro%2C+Paul%C3%ADnia+-+SP%2C+13142-070&output=embed",
} as const;

export const NAV = [
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#categorias", label: "Categorias" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#duvidas", label: "Dúvidas" },
] as const;
