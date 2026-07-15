import Image, { type StaticImageData } from "next/image";
import lin from "@/public/images/gallery/lin-sombre.webp";
import pierreCalme from "@/public/images/gallery/pierre-calme.webp";
import saugeOmbre from "@/public/images/gallery/sauge-ombre.webp";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { producers, producersIntro, producersNote } from "@/content/producers";

const visuals: Record<string, { src: StaticImageData; aspect: string }> = {
  maraicher: { src: pierreCalme, aspect: "aspect-[5/4]" },
  pecheur: { src: saugeOmbre, aspect: "aspect-[4/3]" },
  fromager: { src: lin, aspect: "aspect-[5/4]" },
};

export function ProducersSection() {
  return (
    <section id="producteurs" className="bg-pierre/45 px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-2xl">
          <SectionHeading index="04" eyebrow="Les producteurs" title="Ceux qui font la carte" />
          <p className="mt-9 text-lg leading-relaxed text-nuit/75">{producersIntro}</p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16 sm:mt-24 sm:gap-24">
          {producers.map((producer, i) => {
            const visual = visuals[producer.id];
            const imageFirst = i % 2 === 0;
            return (
              <Reveal
                as="article"
                key={producer.id}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16"
              >
                <div
                  className={`relative overflow-hidden ${visual.aspect} lg:col-span-5 ${
                    imageFirst ? "lg:order-1" : "lg:order-2 lg:col-start-8"
                  }`}
                >
                  <Image
                    src={visual.src}
                    alt=""
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className={`lg:col-span-6 ${imageFirst ? "lg:order-2" : "lg:order-1 lg:row-start-1"}`}>
                  <p className="flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-nuit/60">
                    <span className="font-display text-base text-laiton-fonce">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {producer.region}
                  </p>
                  <h3 className="mt-4 font-display text-[clamp(1.8rem,3.2vw,2.4rem)] font-medium leading-tight">
                    {producer.name}
                  </h3>
                  <p className="mt-1 text-sm text-laiton-fonce">{producer.role}</p>
                  <p className="mt-5 max-w-[52ch] leading-relaxed text-nuit/70">
                    {producer.description}
                  </p>
                  <p className="mt-5 flex max-w-[52ch] gap-3 border-t border-nuit/15 pt-5 text-sm leading-relaxed text-nuit/75">
                    <span className="mt-px shrink-0 text-[12px] uppercase tracking-[0.16em] text-nuit/50">
                      En cuisine
                    </span>
                    <span>{producer.link}</span>
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-14 text-xs italic text-nuit/65">{producersNote}</p>
      </div>
    </section>
  );
}
