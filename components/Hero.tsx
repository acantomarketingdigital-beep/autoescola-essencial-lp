import Image from "next/image";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/site";
import { WhatsAppLink } from "./WhatsAppLink";

const bullets = [
  "Carro manual e automático",
  "Moto manual e automática",
  "+1.000 alunos aprovados",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="container-site grid items-center gap-8 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4 lg:pt-14">
        <div className="pb-4 motion-safe:animate-fade-up lg:pb-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-sun/50 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white sm:text-sm">
            <ShieldCheck className="h-4 w-4 shrink-0 text-sun" aria-hidden="true" />
            {BUSINESS.badge}
          </p>

          <p className="mt-6 font-display text-sm font-bold uppercase tracking-wide text-sun sm:text-base">
            Do zero à aprovação
          </p>
          <h1 className="mt-2 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Sua CNH começa com a escolha certa.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Acompanhamento personalizado, veículos modernos e todo o suporte necessário para você se
            preparar para a habilitação com confiança.
          </p>

          <ul className="mt-6 space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-[15px] font-medium">
                <Check className="h-4 w-4 text-sun" strokeWidth={3} aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink cta="hero_cta" className="btn-sun">
              Quero começar <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </WhatsAppLink>
            <a href="#categorias" className="btn-outline-light">
              Conhecer as categorias
            </a>
          </div>
          <p className="mt-4 text-xs text-white/70 sm:text-sm">
            Atendimento para alunos de Paulínia e região. Empresa privada — CFC Credenciado nº 027.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[260px] self-end sm:max-w-[440px] lg:max-w-[600px]">
          {/* Halo verde ao fundo, pulsando junto com o LED */}
          <div
            className="absolute inset-x-1/4 bottom-16 top-1/2 rounded-full bg-[#2BFF4F]/25 blur-3xl motion-safe:animate-led-bloom"
            aria-hidden="true"
          />
          <div className="relative -mb-[6%] -mt-[8%]">
            <Image
              src="/img/semaforo.png"
              alt="Semáforo verde com a mensagem “Chegou sua hora!”"
              width={768}
              height={768}
              priority
              sizes="(min-width: 1024px) 600px, 440px"
              className="h-auto w-full"
            />
            {/* Brilho do LED verde (centro em ~47% / 76% da imagem) */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-[47%] top-[76%] -ml-[19%] -mt-[19%] aspect-square w-[38%] rounded-full bg-[radial-gradient(circle,rgba(150,255,140,0.5)_0%,rgba(60,255,90,0.45)_32%,rgba(43,255,79,0)_68%)] will-change-[opacity,transform] motion-safe:animate-led-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
