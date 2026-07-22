import Image from "next/image";
import chefPasse from "@/public/images/chef-passe-nb.webp";
import chefDressage from "@/public/images/chef-dressage.webp";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { chef } from "@/content/chef";

export function ChefSection() {
  return (
    <section id="chef" className="overflow-hidden bg-ivoire px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-14">
          <div className="lg:col-span-6">
            <SectionHeading index="03" eyebrow="Le chef" title={chef.name} />
            <p className="mt-4 text-[12px] uppercase tracking-[0.16em] text-nuit/65">
              {chef.role} · {chef.demoNotice}
            </p>
          </div>
          <div className="lg:col-span-6 lg:pt-6">
            <p className="max-w-[48ch] text-xl leading-relaxed text-nuit/80">{chef.intro}</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-14 sm:mt-20 lg:grid-cols-12 lg:items-start lg:gap-20">
          {/* Cluster d'images en chevauchement — photographies d'ambiance sous licence,
              sans visage identifiable (le chef reste un personnage fictif). */}
          <Reveal className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] w-[82%] overflow-hidden">
              <Image
                src={chefPasse}
                alt=""
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 82vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-[-22%] ml-auto aspect-square w-[58%] overflow-hidden ring-8 ring-ivoire">
              <Image
                src={chefDressage}
                alt=""
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 28vw, 48vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            {/* Parcours */}
            <Reveal as="ol" className="grid gap-0">
              {chef.career.map((step, i) => (
                <li
                  key={step.period}
                  className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-nuit/15 py-5 last:border-b"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="font-display text-base text-laiton-fonce">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="flex flex-wrap items-baseline gap-x-3">
                      <span className="font-display text-xl font-medium">{step.period}</span>
                      <span className="text-[12px] uppercase tracking-[0.16em] text-nuit/55">
                        {step.place}
                      </span>
                    </p>
                    <p className="mt-1.5 max-w-[46ch] leading-relaxed text-nuit/70">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </Reveal>

            {/* Vision */}
            <Reveal
              as="div"
              delayMs={80}
              className="mt-10 flex max-w-[54ch] flex-col gap-5 leading-relaxed text-nuit/75"
            >
              {chef.vision.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>

            <Reveal as="blockquote" delayMs={140} className="mt-10 border-l-2 border-laiton pl-7">
              <p className="max-w-[40ch] font-display text-[1.7rem] italic leading-snug text-nuit">
                «&nbsp;{chef.quote}&nbsp;»
              </p>
              <cite className="mt-4 block text-[12px] uppercase not-italic tracking-[0.2em] text-nuit/65">
                {chef.name} — {chef.role}
              </cite>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
