import { WhatsAppLink } from "./WhatsAppLink";

const steps = [
  {
    title: "Entre em contato",
    text: "Fale com nossa equipe pelo WhatsApp e escolha a categoria desejada.",
  },
  {
    title: "Faça sua matrícula",
    text: "Receba orientações sobre documentos, valores e formas de pagamento dos serviços da autoescola.",
  },
  {
    title: "Exames médico e psicológico",
    text: "Orientamos você sobre os exames exigidos, realizados por clínicas credenciadas pelo órgão oficial de trânsito.",
  },
  {
    title: "Aulas teóricas e práticas",
    text: "Aprenda com instrutores especializados e veículos modernos, manuais ou automáticos.",
  },
  {
    title: "Preparação para o exame prático",
    text: "Preparação para o exame prático oficial e encaminhamento do aluno.",
  },
  {
    title: "Rumo à sua CNH",
    text: "Após a aprovação no exame prático oficial, a CNH é emitida pelo órgão oficial de trânsito.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-paper py-16 sm:py-24">
      <div className="container-site">
        <div data-reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Como funciona</p>
            <h2 className="h-section mt-3">
              Do zero à aprovação:
              <br className="hidden sm:block" /> cada etapa com você
            </h2>
          </div>
          <WhatsAppLink cta="how_it_works" className="btn-sun self-start lg:self-auto">
            Quero dar o primeiro passo
          </WhatsAppLink>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              data-reveal
              data-reveal-delay={(i % 3) * 110}
              className="rounded-2xl bg-white p-6 shadow-sm transition-transform duration-300 ease-out motion-safe:hover:-translate-y-1"
            >
              <span className="font-display text-sm font-extrabold text-navy">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-extrabold leading-tight text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-center text-xs leading-relaxed sm:text-sm">
          Os exames oficiais, os prazos e as taxas estatais são definidos e cobrados exclusivamente
          pelos órgãos competentes, não pela autoescola.
        </p>
      </div>
    </section>
  );
}
