import { ImagePlaceholder } from "@/components/image-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { producers, producersNote } from "@/content/producers";

export function ProducersSection() {
  return (
    <section id="producteurs" className="bg-pierre/45 px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-xl">
          <SectionHeading index="04" eyebrow="Les producteurs" title="Ceux qui font la carte" />
          <p className="mt-9 text-lg leading-relaxed text-nuit/75">
            Avant d&rsquo;être une cuisine, Maison Aurore est un carnet d&rsquo;adresses : des
            fermes, des criées et des caves qui décident, chaque matin, de ce que la maison
            servira le soir.
          </p>
        </div>

        <ul className="mt-16">
          {producers.map((producer, i) => (
            <li
              key={producer.id}
              className="grid gap-6 border-t border-nuit/15 py-10 last:border-b sm:grid-cols-12 sm:items-center"
            >
              <div className="sm:col-span-2">
                <p aria-hidden className="font-display text-xl text-laiton-fonce">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-nuit/65">
                  {producer.region}
                </p>
              </div>

              <div className="sm:col-span-4">
                <h3 className="font-display text-2xl font-medium">{producer.name}</h3>
                <p className="mt-1 text-sm text-laiton-fonce">{producer.role}</p>
              </div>

              <p className="max-w-[48ch] leading-relaxed text-nuit/70 sm:col-span-4">
                {producer.description}
              </p>

              <div className="hidden sm:col-span-2 sm:block">
                <ImagePlaceholder
                  label={producer.role.toLowerCase()}
                  aspect="aspect-square"
                />
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs italic text-nuit/65">{producersNote}</p>
      </div>
    </section>
  );
}
