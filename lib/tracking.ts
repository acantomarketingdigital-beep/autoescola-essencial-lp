/**
 * Helper de rastreamento de conversões.
 * Dispara o evento generate_lead na tag do Google (gtag.js) de forma síncrona e nunca
 * bloqueia a navegação: o link segue abrindo o WhatsApp normalmente.
 */
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type LeadEvent = {
  button_location: string;
  button_text: string;
  service_category: string;
};

export function trackWhatsAppLead({ button_location, button_text, service_category }: LeadEvent) {
  if (typeof window === "undefined") return;

  try {
    window.gtag?.("event", "generate_lead", {
      lead_type: "whatsapp_click",
      button_location,
      button_text,
      service_category,
    });
  } catch {
    // Rastreamento nunca pode impedir o contato do usuário.
  }
}
