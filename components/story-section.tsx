import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function StorySection() {
  return (
    <section id="histoire" className="overflow-hidden bg-ivoire px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-20">
          {/* Cluster d'images en chevauchement — composition volontairement asymétrique. */}
          <Reveal className="relative lg:col-span-5">
            <ImagePlaceholder
              label="Portrait du chef Julien Moreau"
              aspect="aspect-[4/5]"
              className="w-[82%]"
            />
            <div className="mt-[-22%] ml-auto w-[58%]">
              <ImagePlaceholder
                label="Geste précis, cuisine ouverte"
                aspect="aspect-square"
                className="ring-8 ring-ivoire"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <SectionHeading index="03" eyebrow="Notre histoire" title="Julien Moreau, retour à Bruges" />
            </Reveal>

            <Reveal
              as="div"
              delayMs={80}
              className="mt-9 flex max-w-[54ch] flex-col gap-6 text-lg leading-relaxed text-nuit/75"
            >
              <p>
                Après plusieurs années passées dans des maisons exigeantes en Belgique et en
                France, Julien Moreau revient s&rsquo;installer là où tout a commencé. Maison
                Aurore est née de ce retour : une salle calme sur les quais, une cuisine ouverte,
                et l&rsquo;envie de cuisiner au plus près de son territoire.
              </p>
              <p>
                Sa cuisine part du produit, jamais d&rsquo;une idée figée. Ce sont les maraîchers,
                les pêcheurs et les affineurs de la région qui donnent le tempo : la carte change
                au fil des récoltes et des arrivages.
              </p>
              <p>
                Certains plats ne vivent que quelques semaines — le temps d&rsquo;une saison,
                exactement. C&rsquo;est cette impermanence, assumée, qui fait la signature de la
                maison.
              </p>
            </Reveal>

            <Reveal as="blockquote" delayMs={140} className="mt-10 border-l-2 border-laiton pl-7">
              <p className="max-w-[40ch] font-display text-[1.7rem] italic leading-snug text-nuit">
                « Un menu ne se fige jamais. Il suit les saisons, et les mains qui les font
                pousser. »
              </p>
              <cite className="mt-4 block text-[12px] uppercase not-italic tracking-[0.2em] text-nuit/65">
                Julien Moreau — Chef de Maison Aurore
              </cite>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
