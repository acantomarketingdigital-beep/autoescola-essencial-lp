import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "./Footer";

export function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-mist bg-white">
        <div className="container-site flex h-20 items-center justify-between">
          <Link href="/" aria-label="Voltar para a página inicial">
            <Image src="/img/logo.png" alt="Autoescola Essencial" width={768} height={404} className="h-12 w-auto" />
          </Link>
          <Link href="/" className="link-arrow">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Voltar ao site
          </Link>
        </div>
      </header>
      <main className="bg-paper py-12 sm:py-16">
        <article className="container-site max-w-3xl rounded-2xl bg-white p-6 shadow-sm sm:p-10 [&_a]:text-brand [&_a]:underline [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:text-navy [&_li]:mt-1 [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
          <h1 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">{title}</h1>
          <p className="!mt-2 text-sm">Última atualização: {updatedAt}</p>
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
