/**
 * Registro central dos botões de conversão (WhatsApp).
 * - key            → enviado como `button_location` na Data Layer
 * - service        → enviado como `service_category`
 * - message        → texto pré-preenchido no WhatsApp
 */
export const CTAS = {
  header_whatsapp: {
    service: "geral",
    message: "Olá! Vim pelo site da Autoescola Essencial e gostaria de mais informações.",
  },
  header_mobile_menu: {
    service: "geral",
    message: "Olá! Vim pelo site da Autoescola Essencial e gostaria de mais informações.",
  },
  hero_cta: {
    service: "primeira_habilitacao",
    message: "Olá! Quero começar minha habilitação com a Autoescola Essencial. Pode me ajudar?",
  },
  category_moto: {
    service: "moto",
    message:
      "Olá! Tenho interesse na habilitação de moto (Categoria A). Pode me passar mais informações?",
  },
  category_carro: {
    service: "carro",
    message:
      "Olá! Tenho interesse na habilitação de carro (Categoria B). Pode me passar mais informações?",
  },
  category_a_plus_b: {
    service: "a_plus_b",
    message:
      "Olá! Tenho interesse na habilitação de carro e moto (Categoria A+B). Pode me passar mais informações?",
  },
  category_adicao: {
    service: "adicao_categoria",
    message: "Olá! Já tenho CNH e quero adicionar uma categoria. Como funciona?",
  },
  category_habilitados: {
    service: "habilitados",
    message:
      "Olá! Já sou habilitado(a) e quero fazer aulas para voltar a dirigir com confiança. Como funciona?",
  },
  automatic_vehicles: {
    service: "automatico",
    message: "Olá! Quero saber como funcionam as aulas em carro e moto automáticos.",
  },
  how_it_works: {
    service: "primeira_habilitacao",
    message: "Olá! Quero dar o primeiro passo para tirar minha CNH. Como funciona o processo?",
  },
  package_02: {
    service: "reforco",
    message: "Olá! Tenho interesse no pacote de 02 aulas + veículo. Quais são as condições?",
  },
  package_05: {
    service: "reforco",
    message: "Olá! Tenho interesse no pacote de 05 aulas + veículo. Quais são as condições?",
  },
  package_10: {
    service: "reforco",
    message: "Olá! Tenho interesse no pacote de 10 aulas + veículo. Quais são as condições?",
  },
  payment_conditions: {
    service: "pagamento",
    message: "Olá! Gostaria de consultar as condições e formas de pagamento.",
  },
  faq_contact: {
    service: "duvida",
    message: "Olá! Tenho uma dúvida sobre a habilitação. Pode me ajudar?",
  },
  location_cta: {
    service: "visita",
    message: "Olá! Gostaria de conhecer a Autoescola Essencial pessoalmente. Qual o melhor horário?",
  },
  final_cta: {
    service: "primeira_habilitacao",
    message: "Olá! Quero começar minha habilitação agora. Quais são os próximos passos?",
  },
  floating_button: {
    service: "geral",
    message: "Olá! Vim pelo site da Autoescola Essencial e preciso de ajuda.",
  },
  footer_whatsapp: {
    service: "geral",
    message: "Olá! Vim pelo site da Autoescola Essencial e gostaria de mais informações.",
  },
} as const satisfies Record<string, { service: string; message: string }>;

export type CtaKey = keyof typeof CTAS;
