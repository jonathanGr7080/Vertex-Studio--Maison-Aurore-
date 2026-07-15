import { SectionHeading } from "@/components/section-heading";
import { menuNote, menus, pairings } from "@/content/menus";

export function MenusSection() {
  return (
    <section id="menus" className="bg-nuit px-5 py-24 text-ivoire sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading index="02" eyebrow="Les menus" title="Trois parcours, une saison" tone="dark" />
            <p className="mt-9 max-w-[40ch] text-lg leading-relaxed text-ivoire/75">
              Chaque menu se construit autour de la récolte du moment. Le prix accompagne
              l&rsquo;expérience — il ne la résume pas.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ul>
              {menus.map((menu) => (
                <li
                  key={menu.id}
                  className={`border-t py-9 first:border-t-0 first:pt-0 ${
                    menu.featured ? "border-laiton/50" : "border-ivoire/12"
                  }`}
                >
                  {menu.featured && (
                    <p className="mb-3 font-display text-sm italic text-laiton">
                      Le parcours de la maison
                    </p>
                  )}
                  <div className="flex items-baseline gap-4">
                    <h3 className="font-display text-3xl font-medium">{menu.name}</h3>
                    <span
                      aria-hidden
                      className="mb-1.5 flex-1 self-end border-b border-dotted border-ivoire/30"
                    />
                    <span className="font-display text-2xl text-laiton">{menu.price}</span>
                  </div>
                  <p className="mt-2 text-[12px] uppercase tracking-[0.18em] text-ivoire/60">
                    {menu.courses}
                  </p>
                  <p className="mt-4 max-w-[56ch] leading-relaxed text-ivoire/75">
                    {menu.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-12 border-t border-ivoire/12 pt-10">
              <p className="text-[12px] uppercase tracking-[0.2em] text-ivoire/60">
                Accords boissons
              </p>
              <ul className="mt-6 grid gap-8 sm:grid-cols-2">
                {pairings.map((pairing) => (
                  <li key={pairing.id}>
                    <div className="flex items-baseline gap-3">
                      <h4 className="font-display text-xl font-medium">{pairing.name}</h4>
                      <span
                        aria-hidden
                        className="mb-1 flex-1 self-end border-b border-dotted border-ivoire/30"
                      />
                      <span className="font-display text-lg text-laiton">{pairing.price}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ivoire/70">
                      {pairing.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
              <p className="text-xs text-ivoire/55">{menuNote}</p>
              <a
                href="#reservation"
                className="flex min-h-12 items-center border border-laiton/70 px-7 text-sm font-medium text-ivoire transition-colors duration-200 hover:bg-laiton hover:text-nuit"
              >
                Réserver une table
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
