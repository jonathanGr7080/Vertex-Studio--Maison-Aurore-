import Image from "next/image";
import fenetreMatin from "@/public/images/gallery/fenetre-matin.webp";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { practicalInfo } from "@/content/site";

export function PracticalInfoSection() {
  return (
    <section id="contact" className="bg-nuit-2 px-5 py-24 text-ivoire sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading index="08" eyebrow="Informations pratiques" title="Nous trouver" tone="dark" />
            </Reveal>

            <Reveal as="dl" delayMs={80} className="mt-11 grid gap-9">
              <div className="grid gap-2">
                <dt className="text-[12px] uppercase tracking-[0.2em] text-ivoire/60">Adresse</dt>
                <dd className="text-lg leading-relaxed">
                  {practicalInfo.addressLines.join(" · ")}
                  <span className="mt-1 block text-sm italic text-ivoire/60">
                    {practicalInfo.addressNote}
                  </span>
                </dd>
              </div>

              <div className="grid gap-2">
                <dt className="text-[12px] uppercase tracking-[0.2em] text-ivoire/60">Téléphone</dt>
                <dd className="text-lg">
                  {practicalInfo.phoneDisplay}
                  <span className="mt-1 block text-sm italic text-ivoire/60">
                    {practicalInfo.phoneNote}
                  </span>
                </dd>
              </div>

              <div className="grid gap-2">
                <dt className="text-[12px] uppercase tracking-[0.2em] text-ivoire/60">Horaires</dt>
                <dd>
                  <ul className="grid gap-1.5">
                    {practicalInfo.hours.map((h) => (
                      <li key={h.days} className="flex flex-wrap justify-between gap-x-8 border-b border-ivoire/10 pb-1.5">
                        <span>{h.days}</span>
                        <span className="text-ivoire/75">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>

              <div className="grid gap-2">
                <dt className="text-[12px] uppercase tracking-[0.2em] text-ivoire/60">
                  Accès &amp; stationnement
                </dt>
                <dd className="max-w-[48ch] leading-relaxed text-ivoire/75">
                  {practicalInfo.access}
                </dd>
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={120} className="lg:col-span-6 lg:col-start-7">
            {/* Visuel d'ambiance (abstrait). Un plan illustré du quartier viendra plus tard. */}
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[4/5]">
              <Image
                src={fenetreMatin}
                alt=""
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-nuit/70 to-transparent px-4 pb-3 pt-10 text-[11px] uppercase tracking-[0.16em] text-ivoire/70">
                Quartier des quais, vieux Bruges — visuel d&rsquo;ambiance
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
