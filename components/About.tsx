import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="bg-mist py-16 sm:py-24">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2.5rem] shadow-xl lg:max-w-none">
          <Image
            src="/img/fachada.png"
            alt="Fachada da Autoescola Essencial com carros e motos de aula em Paulínia/SP"
            fill
            sizes="(min-width: 1024px) 420px, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="eyebrow">Sobre a Autoescola Essencial</p>
          <h2 className="h-section mt-3">Mais do que formar motoristas, realizamos sonhos.</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed sm:text-[17px]">
            <p>
              A Autoescola Essencial nasceu para oferecer um ensino de qualidade, baseado em
              respeito, transparência e compromisso com cada aluno.
            </p>
            <p>
              Referência em Paulínia pelo atendimento humanizado e pela excelência no ensino,
              investimos constantemente em inovação, tecnologia e veículos modernos — fomos
              pioneiros na cidade com motocicleta automática para treinamento.
            </p>
            <p>
              Aqui, você recebe acompanhamento personalizado desde a matrícula até o dia do exame
              prático aplicado pelo DETRAN.
            </p>
          </div>
          <p className="mt-6 rounded-xl border border-navy/15 bg-white/70 p-4 text-sm leading-relaxed text-navy">
            <strong>Transparência:</strong> somos um Centro de Formação de Condutores (CFC) privado,
            credenciado ao DETRAN sob o nº 027. Os exames oficiais, a emissão da CNH e as taxas
            públicas são de responsabilidade exclusiva dos órgãos de trânsito.
          </p>
        </div>
      </div>
    </section>
  );
}
