import Image from "next/image";

const photos = [
  { src: "/img/estrutura-1.png", alt: "Entrada da Autoescola Essencial com tapete da marca" },
  { src: "/img/estrutura-2.png", alt: "Fachada com carros e motos de aula" },
  { src: "/img/estrutura-3.png", alt: "Porta da sala teórica" },
  { src: "/img/estrutura-4.png", alt: "Sala de aulas teóricas" },
  { src: "/img/estrutura-5.png", alt: "Frota de carros e motos estacionada em frente à autoescola" },
  { src: "/img/estrutura-6.png", alt: "Corredor e secretaria" },
  { src: "/img/estrutura-7.png", alt: "Recepção com área de espera" },
  { src: "/img/estrutura-8.png", alt: "Fachada da unidade com placa de identificação do CFC" },
];

export function Structure() {
  return (
    <section id="estrutura" className="bg-gradient-to-b from-[#E4EDF3] to-[#EEF3F6] py-16 sm:py-24">
      <div className="container-site">
        <div data-reveal className="grid gap-4 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Conheça de perto</p>
            <h2 className="h-section mt-3">Nossa estrutura</h2>
          </div>
          <p className="text-base leading-relaxed lg:pb-2">
            Um espaço organizado, confortável e preparado para receber você em cada etapa da sua
            formação.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {photos.map((p, i) => (
            <li
              key={p.src}
              data-reveal
              data-reveal-delay={(i % 4) * 90}
              className="relative aspect-square overflow-hidden rounded-2xl bg-mist"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 280px, 45vw"
                className="object-cover transition-transform duration-500 ease-out motion-safe:hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
