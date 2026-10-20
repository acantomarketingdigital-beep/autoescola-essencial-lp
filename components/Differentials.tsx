import {
  Building2,
  CalendarCheck,
  CarFront,
  ClipboardCheck,
  FileCheck2,
  Headset,
  MessageCircle,
  UserCheck,
} from "lucide-react";

const items = [
  { icon: Headset, title: "Atendimento humanizado", text: "Respeito, escuta e acompanhamento do início ao fim." },
  { icon: UserCheck, title: "Instrutores qualificados", text: "Experiência para ensinar com paciência e segurança." },
  { icon: CarFront, title: "Veículos novos e modernos", text: "Frota bem cuidada, com opções manuais e automáticas." },
  { icon: CalendarCheck, title: "Agendamento de aulas facilitado", text: "Mais praticidade para encaixar as aulas na sua rotina." },
  { icon: ClipboardCheck, title: "Acompanhamento completo", text: "Orientação clara em todas as etapas do processo." },
  { icon: FileCheck2, title: "Preparação para exames", text: "Treinamento focado para você chegar mais confiante ao exame prático oficial." },
  { icon: MessageCircle, title: "Atendimento rápido", text: "Tire suas dúvidas e receba suporte pelo WhatsApp." },
  { icon: Building2, title: "Ambiente confortável", text: "Uma estrutura moderna pensada para acolher você." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-white py-16 sm:py-24">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Por que escolher a Essencial?</p>
          <h2 className="h-section mt-3">Tudo o que você precisa para conquistar sua CNH</h2>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="group relative rounded-2xl border border-transparent p-6 transition hover:border-mist hover:shadow-lg"
            >
              <span className="absolute right-6 top-6 font-display text-sm font-extrabold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon className="h-9 w-9 text-sun" strokeWidth={2.2} aria-hidden="true" />
              <h3 className="mt-5 font-display text-lg font-extrabold leading-tight text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
