import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { expectations, expectationsIntro, expectationsNote } from "@/content/expectations";

export function ExpectationsSection() {
  return (
    <section id="experience-salle" className="bg-ivoire px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-14">
          <div className="lg:col-span-6">
            <SectionHeading index="05" eyebrow="En salle" title="Ce que l'expérience veut transmettre" />
          </div>
          <div className="lg:col-span-6 lg:pt-6">
            <p className="max-w-[46ch] text-xl leading-relaxed text-nuit/80">{expectationsIntro}</p>
          </div>
        </Reveal>

        <ul className="mt-16 grid gap-x-14 gap-y-12 border-t border-nuit/15 pt-12 sm:mt-20 sm:grid-cols-2">
          {expectations.map((item, i) => (
            <Reveal as="li" key={item.title} delayMs={(i % 2) * 90} className="flex gap-5">
              <span aria-hidden className="font-display text-lg text-laiton-fonce">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl font-medium">{item.title}</h3>
                <p className="mt-2.5 max-w-[46ch] leading-relaxed text-nuit/70">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <p className="mt-12 text-xs italic text-nuit/65">{expectationsNote}</p>
      </div>
    </section>
  );
}
