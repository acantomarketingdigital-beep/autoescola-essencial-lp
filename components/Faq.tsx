import { ArrowRight, Plus } from "lucide-react";
import { BUSINESS, whatsappLinkProps } from "@/lib/site";

export const faqs = [
  {
    q: "Quais categorias a Essencial oferece?",
    a: "Primeira habilitação nas categorias A, B e A+B, além de adição de categoria e aulas para habilitados.",
  },
  {
    q: "Posso fazer aulas em veículo automático?",
    a: "Sim. A Essencial oferece aulas em carro e moto automáticos.",
  },
  {
    q: "A autoescola é credenciada?",
    a: `Sim. Somos um Centro de Formação de Condutores (CFC) privado, devidamente credenciado sob o nº ${BUSINESS.cfcNumber}. Não somos um órgão público.`,
  },
  {
    q: "A Essencial realiza os exames ou emite a CNH?",
    a: "Não. Os exames oficiais (teórico e prático) são aplicados pelo órgão oficial de trânsito, que também é o único responsável pela emissão da CNH. Nosso papel é a formação, a preparação para o exame prático oficial e o encaminhamento do aluno.",
  },
  {
    q: "As taxas estatais estão incluídas nos valores?",
    a: "Não. Serviços e taxas estatais são de responsabilidade exclusiva dos órgãos competentes e pagos diretamente a eles. Os valores informados pela autoescola referem-se apenas aos nossos serviços de formação.",
  },
  {
    q: "Nunca dirigi. Posso começar do zero?",
    a: "Sim. Nossos instrutores acompanham alunos iniciantes durante todo o processo.",
  },
  {
    q: "Já tenho CNH, mas tenho medo de dirigir. Vocês ajudam?",
    a: "Sim. Oferecemos aulas personalizadas para recuperar a confiança e voltar a dirigir.",
  },
  {
    q: "Quais cidades são atendidas?",
    a: "Atendemos principalmente Paulínia, Sumaré, Hortolândia e cidades vizinhas.",
  },
  {
    q: "Como posso saber os valores?",
    a: "Entre em contato pelo WhatsApp para receber as condições atualizadas para o serviço desejado.",
  },
];

export function Faq() {
  return (
    <section id="duvidas" className="bg-white py-16 sm:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div data-reveal>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-brand">
            Perguntas frequentes
          </p>
          <h2 className="h-section mt-3">Ficou com alguma dúvida?</h2>
          <p className="mt-4 leading-relaxed">
            Se não encontrar sua resposta, nossa equipe está pronta para ajudar pelo WhatsApp.
          </p>
          <a {...whatsappLinkProps} className="link-arrow mt-6">
            Falar com a equipe <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div data-reveal data-reveal-delay={120} className="divide-y divide-mist rounded-2xl border border-mist">
          {faqs.map((f, i) => (
            <details key={f.q} className="group" open={i === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-bold text-navy hover:bg-paper sm:px-6">
                {f.q}
                <Plus
                  className="faq-icon h-5 w-5 shrink-0 text-brand transition-transform"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 leading-relaxed sm:px-6">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
