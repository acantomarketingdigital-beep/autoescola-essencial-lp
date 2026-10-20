import { ExternalLink, Star } from "lucide-react";
import { BUSINESS } from "@/lib/site";

/** Avaliações reais publicadas no perfil do Google da autoescola (texto original preservado). */
const reviews = [
  {
    name: "Liliane Badial",
    text: "Foi uma experiência incrível, tiraram todas as minhas dúvidas e principalmente o medo de instrutores ruins. Atendimento da recepção muito atencioso, instrutor calmo e paciente.",
  },
  {
    name: "Gabriel Almeida",
    text: "Explicam tudo nos mínimos detalhes e se empenham em fazer você aprender.",
  },
  {
    name: "Elaine Garces",
    text: "Experiência maravilhosa, profissionais totalmente preparados e capacitados..",
  },
  {
    name: "Marisangela Oliveira",
    text: "Excelente profissional. Estão de parabéns pelo trabalho de vcs!",
  },
  {
    name: "Th Blayk",
    text: "Foi muito gratificante fazer as aulas aprender bem rápido as instruções muito bom antedimento",
  },
  {
    name: "Tiago Estavarengo",
    text: "Foi muito bom, muito atenciosos",
  },
];

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-label="Google" role="img">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

export function Reviews() {
  return (
    <section id="avaliacoes" className="bg-paper py-16 sm:py-24">
      <div className="container-site">
        <div className="grid gap-4 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Experiência dos alunos</p>
            <h2 className="h-section mt-3">Quem aprende com a Essencial recomenda</h2>
          </div>
          <p className="text-base leading-relaxed lg:pb-2">
            Veja o que nossos alunos falam nas avaliações publicadas no Google.
          </p>
        </div>

        <ul
          className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0"
          aria-label="Avaliações de alunos"
        >
          {reviews.map((r) => (
            <li
              key={r.name}
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-mist bg-white p-6 sm:w-[46%] lg:w-[31.5%]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display font-bold text-white"
                    aria-hidden="true"
                  >
                    {r.name.charAt(0)}
                  </span>
                  <p className="font-bold text-navy">{r.name}</p>
                </div>
                <GoogleG />
              </div>
              <div className="mt-3 flex gap-0.5" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F6BB06] text-[#F6BB06]" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-3 text-[15px] leading-relaxed text-navy/90">“{r.text}”</blockquote>
            </li>
          ))}
        </ul>

        <div className="mt-6 text-center">
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow"
          >
            Ver todas as avaliações no Google <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
