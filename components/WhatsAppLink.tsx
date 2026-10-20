"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { CTAS, type CtaKey } from "@/lib/ctas";
import { whatsappUrl } from "@/lib/site";
import { trackWhatsAppLead } from "@/lib/tracking";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel"> & {
  /** Identificador do botão (button_location) — ver lib/ctas.ts */
  cta: CtaKey;
};

/**
 * Link direto para o WhatsApp (wa.me) com mensagem por botão + evento generate_lead na Data Layer.
 * O href é o link real; o onClick apenas registra o evento e não interfere na abertura da aba.
 */
export function WhatsAppLink({ cta, onClick, children, ...rest }: Props) {
  const { message, service } = CTAS[cta];

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    const el = e.currentTarget;
    const text = (el.innerText || el.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim();
    trackWhatsAppLead({ button_location: cta, button_text: text, service_category: service });
    onClick?.(e);
  }

  return (
    <a
      {...rest}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={cta}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
