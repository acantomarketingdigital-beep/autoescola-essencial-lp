import Image from "next/image";
import { Check } from "lucide-react";
import { whatsappLinkProps } from "@/lib/site";

const bullets = [
  "Menos preocupação com troca de marchas",
  "Mais foco no trânsito e na condução",
  "Ideal para alunos inseguros ou iniciantes",
  "Carro e moto automáticos disponíveis",
];

export function Automatic() {
  return (
    <section className="overflow-hidden bg-navy py-16 text-white sm:py-24">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Image
            src="/img/veiculos-automaticos.png"
            alt="Carro e moto automáticos da Autoescola Essencial usados nas aulas"
            width={644}
            height={621}
            sizes="(min-width: 1024px) 560px, 90vw"
            className="h-auto w-full drop-shadow-2xl"
          />
        </div>
        <div>
          <p className="eyebrow text-brand-light">Mais conforto para aprender</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
            Aprenda em veículos automáticos
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
            Uma alternativa mais confortável para desenvolver confiança e segurança durante o
            aprendizado.
          </p>
          <ul className="mt-6 space-y-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 font-medium">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-sun" strokeWidth={3} aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
          <a {...whatsappLinkProps} className="btn-sun mt-8">
            Quero saber como funciona
          </a>
        </div>
      </div>
    </section>
  );
}
