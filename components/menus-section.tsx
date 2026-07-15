import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { menuNote, menus, pairings } from "@/content/menus";

export function MenusSection() {
  return (
    <section id="menus" className="bg-nuit px-5 py-24 text-ivoire sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-2xl">
          <SectionHeading index="02" eyebrow="Les menus" title="Trois parcours, une saison" tone="dark" />
          <p className="mt-9 max-w-[46ch] text-lg leading-relaxed text-ivoire/75">
            Chaque menu se construit autour de la récolte du moment. Le prix accompagne
            l&rsquo;expérience — il ne la résume pas.
          </p>
        </Reveal>

        <ul className="mt-16 sm:mt-20">
          {menus.map((menu, i) => (
            <Reveal
              as="li"
              key={menu.id}
              delayMs={i * 80}
              className={`border-t py-10 first:pt-0 sm:py-12 ${
                menu.featured ? "border-laiton/40" : "border-ivoire/12"
              }`}
            >
              <div className="grid gap-x-10 gap-y-4 lg:grid-cols-12 lg:items-baseline">
                <div className="lg:col-span-4">
                  {menu.featured && (
                    <p className="mb-2 font-display text-sm italic text-laiton">
                      Le parcours de la maison
                    </p>
                  )}
                  <div className="flex items-baseline justify-between gap-4 lg:block">
                    <h3 className="font-display text-[clamp(1.9rem,4vw,2.6rem)] font-medium leading-none">
                      {menu.name}
                    </h3>
                    <span className="font-display text-2xl text-laiton lg:hidden">{menu.price}</span>
                  </div>
                  <p className="mt-3 text-[12px] uppercase tracking-[0.2em] text-ivoire/55">
                    {menu.courses}
                  </p>
                </div>

                <p className="max-w-[52ch] leading-relaxed text-ivoire/75 lg:col-span-6">
                  {menu.description}
                </p>

                <div className="hidden text-right lg:col-span-2 lg:block">
                  <span className="font-display text-3xl text-laiton">{menu.price}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16 grid gap-x-10 gap-y-12 border-t border-ivoire/12 pt-12 lg:grid-cols-12">
          <p className="text-[12px] uppercase tracking-[0.2em] text-ivoire/55 lg:col-span-4">
            Accords boissons
          </p>
          <ul className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
            {pairings.map((pairing) => (
              <li key={pairing.id}>
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-display text-xl font-medium">{pairing.name}</h4>
                  <span className="font-display text-lg text-laiton">{pairing.price}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ivoire/70">{pairing.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[46ch] text-xs text-ivoire/55">{menuNote}</p>
          <ButtonLink href="#reservation" variant="outline-light" className="px-7">
            Réserver une table
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
