import { ArrowRight } from "lucide-react";
import { whatsappLinkProps } from "@/lib/site";

const categories = [
  {
    tag: "Categoria A",
    title: "Moto",
    text: "Primeira habilitação para motocicletas, com aulas em motos manuais e automáticas.",
    highlight: "Primeira autoescola de Paulínia com moto automática para aulas.",
    cta: "Quero habilitação de moto",
    featured: true,
  },
  {
    tag: "Categoria B",
    title: "Carro",
    text: "Formação completa para você se preparar para a CNH, com aulas em veículos manuais e automáticos.",
    cta: "Quero habilitação de carro",
  },
  {
    tag: "Categoria A + B",
    title: "Carro e moto",
    text: "Faça o processo para carro e moto com acompanhamento completo até o exame prático.",
    cta: "Quero habilitação A+B",
  },
  {
    tag: "Já possui CNH?",
    title: "Adição de categoria",
    text: "Adicione a categoria de carro ou motocicleta à sua habilitação.",
    cta: "Adicionar uma categoria",
  },
];

export function Categories() {
  return (
    <section id="categorias" className="bg-paper py-16 sm:py-24">
      <div className="container-site">
        <div className="grid gap-4 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Categorias e serviços</p>
            <h2 className="h-section mt-3">Encontre a habilitação ideal para você</h2>
          </div>
          <p className="text-base leading-relaxed lg:pb-2">
            Da primeira CNH às aulas para quem já é habilitado, a Essencial acompanha você em todas
            as etapas da formação.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {categories.map((c) => (
            <article
              key={c.title}
              className={`flex flex-col rounded-2xl border p-7 sm:p-8 ${
                c.featured
                  ? "border-navy bg-navy text-white shadow-lg"
                  : "border-mist bg-white"
              }`}
            >
              <p
                className={`font-display text-sm font-bold uppercase tracking-wide ${
                  c.featured ? "text-sun" : "text-brand"
                }`}
              >
                {c.tag}
              </p>
              <h3
                className={`mt-2 font-display text-2xl font-extrabold sm:text-3xl ${
                  c.featured ? "text-white" : "text-navy"
                }`}
              >
                {c.title}
              </h3>
              <p className={`mt-3 leading-relaxed ${c.featured ? "text-white/85" : ""}`}>{c.text}</p>
              {c.highlight && <p className="mt-4 font-medium text-sun">{c.highlight}</p>}
              <a
                {...whatsappLinkProps}
                className={`mt-6 inline-flex items-center gap-1.5 self-start text-sm font-bold hover:underline ${
                  c.featured ? "text-sun" : "text-brand"
                }`}
              >
                {c.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <article className="mt-5 rounded-2xl border border-mist bg-white p-7 text-center sm:p-10">
          <p className="font-display text-sm font-bold uppercase tracking-wide text-navy">
            Volte com confiança
          </p>
          <h3 className="mt-2 font-display text-2xl font-extrabold text-navy sm:text-3xl">
            Aulas para habilitados
          </h3>
          <p className="mx-auto mt-3 max-w-2xl leading-relaxed">
            Vença o medo de dirigir, recupere a confiança ou aperfeiçoe sua condução com aulas
            personalizadas.
          </p>
          <a {...whatsappLinkProps} className="btn-sun mt-6">
            Quero voltar a dirigir
          </a>
        </article>
      </div>
    </section>
  );
}
