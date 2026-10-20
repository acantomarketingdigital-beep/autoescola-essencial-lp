import { Clock, MapPin, Phone } from "lucide-react";
import { BUSINESS, whatsappLinkProps } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Location() {
  return (
    <section id="localizacao" className="bg-navy py-16 text-white sm:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-sun">
            Localização e atendimento
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Venha conhecer a Essencial
          </h2>

          <dl className="mt-8 space-y-6">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sun" aria-hidden="true" />
              <div>
                <dt className="font-display text-sm font-bold uppercase text-sun">Endereço</dt>
                <dd className="mt-1 text-white/90">
                  {BUSINESS.address.street}
                  <br />
                  {BUSINESS.address.district} — {BUSINESS.address.city}/{BUSINESS.address.state}, CEP{" "}
                  {BUSINESS.address.zip}
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-sun" aria-hidden="true" />
              <div>
                <dt className="font-display text-sm font-bold uppercase text-sun">Horários</dt>
                {BUSINESS.hours.map((h) => (
                  <dd key={h} className="mt-1 text-white/90">
                    {h}
                  </dd>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-sun" aria-hidden="true" />
              <div>
                <dt className="font-display text-sm font-bold uppercase text-sun">Telefones</dt>
                {BUSINESS.phones.map((p) => (
                  <dd key={p.href} className="mt-1">
                    <a href={p.href} className="text-white/90 hover:text-white hover:underline">
                      {p.label}
                    </a>
                  </dd>
                ))}
              </div>
            </div>
          </dl>

          <a {...whatsappLinkProps} className="btn-outline-light mt-8">
            <WhatsAppIcon className="h-4 w-4" />
            Chamar no WhatsApp
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white/5 shadow-xl">
          <iframe
            title="Mapa: localização da Autoescola Essencial em Paulínia/SP"
            src={BUSINESS.mapsEmbed}
            className="h-[320px] w-full border-0 sm:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
