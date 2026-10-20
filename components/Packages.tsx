import { ArrowRight } from "lucide-react";
import type { CtaKey } from "@/lib/ctas";
import { WhatsAppLink } from "./WhatsAppLink";

const packages = [
  { qty: "02", text: "Revise manobras e corrija pequenos detalhes antes da prova." },
  { qty: "05", text: "Ganhe mais prática, segurança e confiança para o exame.", featured: true },
  { qty: "10", text: "Preparação completa para iniciantes ou alunos com pouca experiência." },
];

export function Packages() {
  return (
    <section id="pacotes" className="bg-white py-16 sm:py-24">
      <div className="container-site">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Pacotes preparatórios</p>
          <h2 className="h-section mt-3">Precisa de um reforço antes do exame?</h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3 md:items-center">
          {packages.map((p, i) => (
            <article
              key={p.qty}
              data-reveal
              data-reveal-delay={i * 120}
              className={`card-hover flex flex-col rounded-2xl p-8 ${
                p.featured ? "bg-navy text-white shadow-xl md:py-12" : "bg-paper"
              }`}
            >
              {p.featured && (
                <p className="mb-2 font-display text-xs font-extrabold uppercase tracking-wide">
                  Mais escolhido
                </p>
              )}
              <p
                className={`font-display text-5xl font-extrabold ${
                  p.featured ? "text-sun" : "text-brand"
                }`}
              >
                {p.qty}
              </p>
              <h3
                className={`mt-2 font-display text-xl font-extrabold ${
                  p.featured ? "text-white" : "text-navy"
                }`}
              >
                aulas + veículo
              </h3>
              <p className={`mt-3 text-sm leading-relaxed ${p.featured ? "text-white/85" : ""}`}>
                {p.text}
              </p>
              <WhatsAppLink
                cta={`package_${p.qty}` as CtaKey}
                className={`cta-link mt-6 ${
                  p.featured ? "text-sun" : "text-brand"
                }`}
              >
                Consultar condições <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </WhatsAppLink>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs sm:text-sm">
          Valores dos pacotes informados pelo WhatsApp. Não incluem taxas estatais.
        </p>
      </div>
    </section>
  );
}
