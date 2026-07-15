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
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading index="01" eyebrow="L'expérience" title="Le luxe de la simplicité" />
            <p className="mt-9 max-w-[44ch] text-lg leading-relaxed text-nuit/75">
              Maison Aurore célèbre les produits belges, les saisons et les artisans qui les font.
              Le raffinement vient de la maîtrise, du service et de la retenue — jamais de
              l&rsquo;ostentation.
            </p>
            <p className="mt-8 max-w-[38ch] font-display text-2xl italic leading-snug text-laiton-fonce">
              « La précision en cuisine, la chaleur en salle. »
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
            <ul>
              {proofs.map((proof) => (
                <li
                  key={proof.index}
                  className="grid grid-cols-[3rem_1fr] gap-5 border-t border-nuit/15 py-9 last:border-b"
                >
                  <span aria-hidden className="font-display text-xl text-laiton-fonce">
                    {proof.index}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium">{proof.title}</h3>
                    <p className="mt-2.5 max-w-[52ch] leading-relaxed text-nuit/70">{proof.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
