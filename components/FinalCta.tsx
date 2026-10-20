import { ArrowRight } from "lucide-react";
import { whatsappLinkProps } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="border-t-8 border-navy bg-sun py-16 text-center sm:py-24">
      <div data-reveal className="container-site">
        <p className="font-display text-sm font-bold uppercase tracking-wide text-brand">
          O próximo passo é seu
        </p>
        <h2 className="mx-auto mt-3 max-w-4xl font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
          Está pronto para conquistar sua liberdade?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-navy/90">
          Fale agora com a equipe da Autoescola Essencial e descubra o melhor caminho para iniciar
          sua habilitação.
        </p>
        <a {...whatsappLinkProps} className="btn-navy mt-8">
          Começar minha habilitação <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <p className="mt-4 text-sm text-navy/80">Atendimento rápido e personalizado pelo WhatsApp.</p>
      </div>
    </section>
  );
}
