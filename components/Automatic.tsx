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
        <div data-reveal="left" className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Sombra no "chão" — fica parada enquanto os veículos flutuam */}
          <div
            aria-hidden="true"
            className="absolute inset-x-[12%] bottom-[2%] h-[8%] rounded-[50%] bg-black/40 blur-xl"
          />
          <div className="relative will-change-transform motion-safe:animate-float">
            <Image
              src="/img/veiculos-automaticos.png"
              alt="Carro e moto automáticos da Autoescola Essencial usados nas aulas"
              width={644}
              height={621}
              sizes="(min-width: 1024px) 560px, 90vw"
              className="h-auto w-full"
            />

            {/* Reflexo de luz percorrendo a lataria (mascarado no formato dos veículos) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden [-webkit-mask-image:url(/img/veiculos-automaticos.png)] [-webkit-mask-size:100%_100%] [mask-image:url(/img/veiculos-automaticos.png)] [mask-size:100%_100%]"
            >
              <span className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/45 to-transparent motion-safe:animate-shine" />
            </div>

            {/* Faróis acendendo suavemente */}
            {[
              { left: "29%", top: "66%", size: "13%", delay: "0s" },
              { left: "6.5%", top: "64%", size: "8%", delay: "0.15s" },
              { left: "70%", top: "30%", size: "10%", delay: "1.4s" },
            ].map((f) => (
              <span
                key={f.left}
                aria-hidden="true"
                style={{
                  left: f.left,
                  top: f.top,
                  width: f.size,
                  marginLeft: `calc(${f.size} / -2)`,
                  marginTop: `calc(${f.size} / -2)`,
                  animationDelay: f.delay,
                }}
                className="pointer-events-none absolute aspect-square rounded-full bg-[radial-gradient(circle,rgba(255,255,240,0.95)_0%,rgba(255,240,180,0.45)_30%,rgba(255,240,180,0)_70%)] opacity-0 motion-safe:animate-glint"
              />
            ))}
          </div>
        </div>
        <div data-reveal="right">
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
