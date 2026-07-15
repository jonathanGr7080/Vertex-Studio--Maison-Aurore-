import { ImagePlaceholder } from "@/components/image-placeholder";
import { SectionHeading } from "@/components/section-heading";

export function StorySection() {
  return (
    <section id="histoire" className="bg-ivoire px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 lg:mt-16">
            <ImagePlaceholder label="Portrait du chef Julien Moreau" aspect="aspect-[4/5]" />
            <div className="mt-5 grid grid-cols-2 gap-5">
              <ImagePlaceholder label="Gestes en cuisine" aspect="aspect-square" />
              <ImagePlaceholder
                label="Céramique sombre, assiette dressée"
                aspect="aspect-square"
                className="lg:mt-10"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHeading index="03" eyebrow="Notre histoire" title="Julien Moreau, retour à Bruges" />

            <div className="mt-9 flex max-w-[54ch] flex-col gap-6 text-lg leading-relaxed text-nuit/75">
              <p>
                Après plusieurs années passées dans des maisons exigeantes en Belgique et en
                France, Julien Moreau revient s&rsquo;installer là où tout a commencé. Maison
                Aurore est née de ce retour : une salle calme sur les quais, une cuisine ouverte,
                et l&rsquo;envie de cuisiner au plus près de son territoire.
              </p>
              <p>
                La carte change au fil des récoltes et des arrivages. Certains plats ne vivent que
                quelques semaines — le temps d&rsquo;une saison, exactement.
              </p>
            </div>

            <blockquote className="mt-10 border-l-2 border-laiton pl-7">
              <p className="max-w-[40ch] font-display text-[1.65rem] italic leading-snug text-nuit">
                « Un menu ne se fige jamais. Il suit les saisons, et les mains qui les font
                pousser. »
              </p>
              <cite className="mt-4 block text-[12px] uppercase not-italic tracking-[0.2em] text-nuit/65">
                Julien Moreau — Chef de Maison Aurore
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
