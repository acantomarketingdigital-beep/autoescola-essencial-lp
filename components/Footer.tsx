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
      </div>
    </footer>
  );
}
