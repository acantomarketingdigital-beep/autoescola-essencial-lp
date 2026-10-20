import { CircleCheck } from "lucide-react";
import { whatsappLinkProps } from "@/lib/site";

const methods = ["PIX", "Cartão de crédito", "Cartão de débito", "Dinheiro"];

export function Payment() {
  return (
    <section aria-labelledby="pagamento-titulo" className="bg-brand py-12 text-white sm:py-16">
      <div className="container-site grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr] md:items-center">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-sun">
            Condições facilitadas
          </p>
          <h2 id="pagamento-titulo" className="mt-2 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
            Comece sua jornada do seu jeito.
          </h2>
        </div>
        <ul className="space-y-1.5">
          {methods.map((m) => (
            <li key={m} className="flex items-center gap-2 font-semibold">
              <CircleCheck className="h-4 w-4 text-sun" aria-hidden="true" />
              {m}
            </li>
          ))}
        </ul>
        <div>
          <p className="text-sm text-white/85">
            Parcelamento conforme condições da empresa. Pagamentos referem-se apenas aos serviços
            da autoescola; taxas estatais são pagas diretamente aos órgãos competentes.
          </p>
          <a {...whatsappLinkProps} className="btn-sun mt-4">
            Consultar condições
          </a>
        </div>
      </div>
    </section>
  );
}
