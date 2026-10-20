import { whatsappLinkProps } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <a
      {...whatsappLinkProps}
      aria-label="Falar com a Autoescola Essencial no WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-3 sm:bottom-6 sm:right-6"
    >
      <span className="hidden rounded-lg bg-white px-3 py-2 text-xs leading-tight text-navy shadow-lg sm:block">
        Precisa de ajuda?
        <br />
        <strong>Fale no WhatsApp</strong>
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-whats text-white shadow-xl transition hover:scale-105">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </a>
  );
}
