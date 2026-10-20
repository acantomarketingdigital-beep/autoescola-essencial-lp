import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS, whatsappLinkProps } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="border-t border-mist bg-paper text-sm">
      <div className="container-site flex flex-col items-center gap-6 py-10 text-center">
        <Image
          src="/img/logo.png"
          alt="Autoescola Essencial"
          width={768}
          height={404}
          className="h-14 w-auto"
        />

        <div className="space-y-1 text-xs leading-relaxed sm:text-sm">
          <p className="font-bold uppercase text-navy">{BUSINESS.legalName}</p>
          <p>CNPJ: {BUSINESS.cnpj}</p>
          <p>Endereço completo: {BUSINESS.address.full}</p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {BUSINESS.phones.map((p) => (
            <li key={p.href}>
              <a href={p.href} className="inline-flex items-center gap-2 text-navy hover:underline">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {p.label}
              </a>
            </li>
          ))}
          <li>
            <a
              {...whatsappLinkProps}
              className="inline-flex items-center gap-2 font-semibold text-navy hover:underline"
            >
              <WhatsAppIcon className="h-4 w-4 text-whats" />
              WhatsApp comercial
            </a>
          </li>
        </ul>

        <p className="max-w-3xl text-xs leading-relaxed sm:text-sm">{BUSINESS.disclaimer}</p>

        <nav aria-label="Links legais" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="/politica-de-privacidade" className="text-navy underline-offset-2 hover:underline">
            Política de Privacidade
          </Link>
          <Link href="/termos-de-uso" className="text-navy underline-offset-2 hover:underline">
            Termos de Uso
          </Link>
        </nav>

        <a
          href="https://pulse.kreotechnologies.com.br/comece"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-mist bg-white py-1 pl-1 pr-3 text-[11px] text-ink transition-transform duration-200 ease-out motion-safe:hover:scale-105"
        >
          <Image
            src="/img/pulse.png"
            alt="Pulse CRM & Dashboard"
            width={64}
            height={64}
            className="h-6 w-6 rounded-full"
          />
          <span>
            Desenvolvido por <strong className="font-semibold text-navy">Pulse CRM &amp; Dashboard</strong>
          </span>
        </a>
      </div>
    </footer>
  );
}
