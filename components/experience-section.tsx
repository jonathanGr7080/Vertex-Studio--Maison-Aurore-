import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const proofs = [
  {
    index: "I",
    title: "Produits de saison",
    text: "La carte s'écrit au rythme des récoltes et des arrivages — jamais l'inverse.",
  },
  {
    index: "II",
    title: "Cuisine ouverte",
    text: "La brigade travaille à vue, dans le prolongement de la salle. Rien à cacher, tout à montrer.",
  },
  {
    index: "III",
    title: "Service chaleureux",
    text: "Une hospitalité précise et détendue, qui met chaque table à l'aise sans jamais jouer un rôle.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-ivoire px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-14">
          <div className="lg:col-span-6">
            <SectionHeading index="01" eyebrow="L'expérience" title="Le luxe de la simplicité" />
          </div>
          <div className="lg:col-span-6 lg:pt-14">
            <p className="max-w-[46ch] text-xl leading-relaxed text-nuit/80">
              Maison Aurore célèbre les produits belges, les saisons et les artisans qui les font.
              Le raffinement vient de la maîtrise, du service et de la retenue — jamais de
              l&rsquo;ostentation.
            </p>
            <p className="mt-8 max-w-[30ch] font-display text-[1.7rem] italic leading-snug text-laiton-fonce">
              « La précision en cuisine, la chaleur en salle. »
            </p>
          </div>
        </Reveal>

        <ul className="mt-20 grid gap-10 border-t border-nuit/15 pt-12 sm:mt-24 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-nuit/15">
          {proofs.map((proof, i) => (
            <Reveal
              as="li"
              key={proof.index}
              delayMs={i * 90}
              className="sm:px-8 sm:first:pl-0 sm:last:pr-0"
            >
              <span aria-hidden className="font-display text-lg text-laiton-fonce">
                {proof.index}
              </span>
              <h3 className="mt-3 font-display text-2xl font-medium">{proof.title}</h3>
              <p className="mt-2.5 max-w-[42ch] leading-relaxed text-nuit/70">{proof.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
