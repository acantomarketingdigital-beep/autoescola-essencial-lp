import { WhatsAppIcon } from "./WhatsAppIcon";
import { WhatsAppLink } from "./WhatsAppLink";

export function WhatsAppFloat() {
  return (
    <WhatsAppLink
      cta="floating_button"
      aria-label="Falar com a Autoescola Essencial no WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-3 sm:bottom-6 sm:right-6"
    >
      <span className="hidden rounded-lg bg-white px-3 py-2 text-xs leading-tight text-navy shadow-lg sm:block">
        Precisa de ajuda?
        <br />
        <strong>Fale no WhatsApp</strong>
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-whats text-white shadow-xl transition-transform duration-200 ease-out motion-safe:hover:scale-110">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </WhatsAppLink>
  );
}
