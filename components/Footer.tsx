import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone, ShieldCheck } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./BrandIcons";
import { BUSINESS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-white text-sm">
      <div className="container-site grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/img/logo.png"
            alt="Autoescola Essencial"
            width={768}
            height={404}
            className="h-16 w-auto"
          />
          <p className="mt-3 font-semibold text-navy">Do zero à aprovação.</p>
          <p className="mt-1 text-xs">CFC privado credenciado nº {BUSINESS.cfcNumber}</p>
        </div>

        <div>
          <h2 className="font-display font-extrabold uppercase text-navy">Contato</h2>
          <ul className="mt-3 space-y-2">
            {BUSINESS.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="inline-flex items-center gap-2 hover:text-navy">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {p.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="inline-flex items-center gap-2 text-[13px] [overflow-wrap:anywhere] hover:text-navy">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {BUSINESS.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display font-extrabold uppercase text-navy">Atendimento</h2>
          <ul className="mt-3 space-y-1">
            <li>Seg–Sex: 7h50–18h</li>
            <li>Sábado: 7h50–12h</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display font-extrabold uppercase text-navy">Redes sociais</h2>
          <div className="mt-3 flex gap-2">
            <a
              href={BUSINESS.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Autoescola Essencial"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#3B5998] text-white hover:brightness-110"
            >
              <FacebookIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Autoescola Essencial"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#222] text-white hover:brightness-125"
            >
              <InstagramIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Bloco legal / compliance */}
      <div className="border-t border-mist bg-paper">
        <div className="container-site space-y-5 py-8 text-center">
          <div className="text-xs leading-relaxed text-ink">
            <p className="font-bold uppercase text-navy">{BUSINESS.legalName}</p>
            <p className="mt-1">CNPJ: {BUSINESS.cnpj}</p>
            <p className="mt-1">Endereço completo: {BUSINESS.address.full}</p>
            <p className="mt-1">
              Telefones: {BUSINESS.phones.map((p) => p.label).join(" · ")} · E-mail: {BUSINESS.email}
            </p>
          </div>

          <p className="mx-auto flex max-w-3xl items-start gap-2 rounded-xl border-2 border-navy/20 bg-white p-4 text-left text-sm font-semibold leading-relaxed text-navy sm:items-center">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand sm:mt-0" aria-hidden="true" />
            <span>“{BUSINESS.disclaimer}”</span>
          </p>

          <p className="text-xs">
            Serviços oficiais de trânsito:{" "}
            <a
              href={BUSINESS.detranUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand underline"
            >
              site oficial do DETRAN-SP
            </a>
            .
          </p>

          <nav aria-label="Links legais" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/politica-de-privacidade" className="inline-flex items-center gap-1.5 hover:text-navy">
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /> Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="inline-flex items-center gap-1.5 hover:text-navy">
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /> Termos de Uso
            </Link>
          </nav>

          <p className="text-xs">
            © {new Date().getFullYear()} {BUSINESS.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
