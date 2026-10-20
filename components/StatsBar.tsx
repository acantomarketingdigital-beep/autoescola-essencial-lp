import { BarChart3, BadgeCheck, CircleCheckBig, HeartHandshake } from "lucide-react";

const stats = [
  { icon: CircleCheckBig, title: "+1000", sub: "Alunos aprovados" },
  { icon: BadgeCheck, title: "Instrutores", sub: "Qualificados" },
  { icon: BarChart3, title: "Alto índice", sub: "De aprovação" },
  { icon: HeartHandshake, title: "Atendimento", sub: "Humanizado" },
];

export function StatsBar() {
  return (
    <section aria-label="Destaques" className="bg-sun">
      <ul className="container-site grid grid-cols-2 gap-x-4 gap-y-6 py-8 lg:grid-cols-4 lg:py-10">
        {stats.map(({ icon: Icon, title, sub }) => (
          <li key={title} className="flex items-center gap-3">
            <Icon
              className="h-9 w-9 shrink-0 text-navy sm:h-11 sm:w-11"
              strokeWidth={2.2}
              aria-hidden="true"
            />
            <div>
              <p className="font-display text-lg font-extrabold leading-none text-navy sm:text-2xl">
                {title}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-navy/80 sm:text-xs">
                {sub}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
