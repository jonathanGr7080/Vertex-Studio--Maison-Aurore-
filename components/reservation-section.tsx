"use client";

import { useId, useState, type FormEvent } from "react";
import { SectionHeading } from "@/components/section-heading";

const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];
const timeSlots = ["12h00", "12h30", "13h00", "19h00", "19h30", "20h00", "20h30"];

const fieldClass =
  "mt-2 h-12 w-full border border-nuit/25 bg-white px-4 text-nuit focus-visible:border-laiton-fonce";

export function ReservationSection() {
  const [submitted, setSubmitted] = useState(false);
  const id = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="reservation" className="bg-ivoire px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading index="06" eyebrow="Réservation" title="Votre table à l'aube des saisons" />
            <p className="mt-9 max-w-[44ch] text-lg leading-relaxed text-nuit/75">
              Ce bloc est une démonstration : aucune réservation réelle n&rsquo;est transmise.
              Il est conçu pour être remplacé par un service dédié — Zenchef, Formitable ou
              TheFork — lors d&rsquo;une phase ultérieure.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="border-l-2 border-laiton bg-pierre/40 px-5 py-4 text-sm text-nuit/80">
              Démonstration — ce formulaire n&rsquo;envoie aucune réservation réelle.
            </p>

            {submitted ? (
              <div role="status" className="mt-8 border border-sauge/50 bg-sauge/10 px-7 py-9">
                <p className="font-display text-2xl font-medium">Demande simulée</p>
                <p className="mt-3 max-w-[48ch] leading-relaxed text-nuit/75">
                  Dans la version finale, votre réservation serait confirmée ici. Aucune demande
                  n&rsquo;a réellement été transmise.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 flex min-h-11 items-center border border-nuit/30 px-6 text-sm font-medium transition-colors duration-200 hover:border-laiton-fonce hover:text-laiton-fonce"
                >
                  Revenir au formulaire
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${id}-date`} className="text-sm font-medium">
                    Date
                  </label>
                  <input id={`${id}-date`} name="date" type="date" required className={fieldClass} />
                </div>

                <div>
                  <label htmlFor={`${id}-heure`} className="text-sm font-medium">
                    Heure
                  </label>
                  <select id={`${id}-heure`} name="heure" required defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Choisir un service
                    </option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={`${id}-convives`} className="text-sm font-medium">
                    Convives
                  </label>
                  <select id={`${id}-convives`} name="convives" defaultValue="2" className={fieldClass}>
                    {partySizes.map((n) => (
                      <option key={n} value={n}>
                        {n} {n > 1 ? "personnes" : "personne"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={`${id}-nom`} className="text-sm font-medium">
                    Nom
                  </label>
                  <input
                    id={`${id}-nom`}
                    name="nom"
                    type="text"
                    required
                    autoComplete="name"
                    className={fieldClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="flex min-h-12 w-full items-center justify-center bg-laiton px-8 text-sm font-medium tracking-[0.03em] text-nuit transition-colors duration-200 hover:bg-pierre sm:w-auto"
                  >
                    Simuler la demande
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
