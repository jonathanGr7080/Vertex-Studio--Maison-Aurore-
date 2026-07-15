import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqItems } from "@/content/faq";

export function FaqSection() {
  return (
    <section id="faq" className="bg-ivoire px-5 pb-24 sm:px-8 sm:pb-36">
      <div className="mx-auto max-w-[1200px] border-t border-nuit/15 pt-20 sm:pt-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading index="07" eyebrow="Questions fréquentes" title="Avant votre venue" />
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7 lg:col-start-6">
            {faqItems.map((item) => (
              <details key={item.question} className="group border-b border-nuit/15 first:border-t">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-xl font-medium transition-colors duration-[var(--dur-micro)] marker:content-none hover:text-laiton-fonce [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden
                    className="text-2xl font-light text-laiton-fonce transition-transform duration-[var(--dur-base)] ease-[var(--ease-standard)] group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[58ch] pb-6 leading-relaxed text-nuit/70">{item.answer}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
