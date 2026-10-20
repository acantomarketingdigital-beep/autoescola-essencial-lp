"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, ShieldCheck, X } from "lucide-react";
import { BUSINESS, NAV } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WhatsAppLink } from "./WhatsAppLink";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      {/* Faixa de identificação do CFC */}
      <div className="bg-navy-deep text-white">
        <p className="container-site flex items-center justify-center gap-2 py-1.5 text-center text-[11px] font-semibold sm:text-xs">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-sun" aria-hidden="true" />
          {BUSINESS.badge}
        </p>
      </div>

      <div className="container-site flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link href="/" aria-label="Autoescola Essencial — página inicial" className="shrink-0">
          <Image
            src="/img/logo.png"
            alt="Autoescola Essencial — Do zero à aprovação"
            width={768}
            height={404}
            priority
            className="h-11 w-auto sm:h-14"
          />
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-[15px] font-medium text-navy hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppLink
            cta="header_whatsapp"
            className="btn hidden bg-whats px-4 py-2 text-white hover:brightness-95 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </WhatsAppLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Navegação mobile" className="border-t border-mist bg-white lg:hidden">
          <ul className="container-site flex flex-col py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-semibold text-navy"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pb-3 pt-1">
              <WhatsAppLink cta="header_mobile_menu" className="btn w-full bg-whats text-white">
                <WhatsAppIcon className="h-4 w-4" />
                Falar no WhatsApp
              </WhatsAppLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
