/**
 * Helper de rastreamento de conversões.
 * Faz o push na Data Layer (GTM) de forma síncrona e nunca bloqueia a navegação:
 * o link segue abrindo o WhatsApp normalmente (sem preventDefault / redirect).
 */
type DataLayerEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
    fbq?: (...args: unknown[]) => void;
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
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "generate_lead",
      lead_type: "whatsapp_click",
      button_location,
      button_text,
      service_category,
    });

    // Meta Pixel direto (somente quando carregado via NEXT_PUBLIC_META_PIXEL_ID).
    window.fbq?.("track", "Contact", {
      content_name: button_location,
      content_category: service_category,
    });
  } catch {
    // Rastreamento nunca pode impedir o contato do usuário.
  }
}
