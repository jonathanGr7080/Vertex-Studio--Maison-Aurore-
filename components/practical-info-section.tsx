import { ImagePlaceholder } from "@/components/image-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { practicalInfo } from "@/content/site";

export function PracticalInfoSection() {
  return (
    <section id="contact" className="bg-nuit-2 px-5 py-24 text-ivoire sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading index="08" eyebrow="Informations pratiques" title="Nous trouver" tone="dark" />

            <dl className="mt-11 grid gap-9">
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
                  Accès & stationnement
                </dt>
                <dd className="max-w-[48ch] leading-relaxed text-ivoire/75">
                  {practicalInfo.access}
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {/* Pas de carte Google pour une adresse fictive — un plan illustré viendra au Sprint 2. */}
            <ImagePlaceholder
              label="Plan illustré du quartier (concept)"
              aspect="aspect-[4/3] lg:aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
