"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { buttonClasses } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";

const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];
const timeSlots = ["12h00", "12h30", "13h00", "19h00", "19h30", "20h00", "20h30"];

type Errors = Partial<Record<"date" | "creneau" | "nom", string>>;

const fieldBase =
  "mt-2 h-12 w-full border bg-white px-4 text-nuit transition-colors duration-[var(--dur-micro)] " +
  "hover:border-nuit/40 focus-visible:border-laiton-fonce";
const errorText = "text-[#a3311d]";

function validate(data: FormData): Errors {
  const errors: Errors = {};

  const date = String(data.get("date") ?? "");
  if (!date) {
    errors.date = "Veuillez indiquer une date.";
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const chosen = new Date(`${date}T00:00:00`);
    if (Number.isNaN(chosen.getTime())) errors.date = "Date invalide.";
    else if (chosen < today) errors.date = "La date doit être aujourd'hui ou ultérieure.";
  }

  if (!String(data.get("creneau") ?? "")) errors.creneau = "Veuillez choisir un créneau.";
  if (!String(data.get("nom") ?? "").trim()) errors.nom = "Veuillez indiquer un nom.";

  return errors;
}

const errorLabels: Record<keyof Errors, string> = {
  date: "Date",
  creneau: "Créneau",
  nom: "Nom",
};

export function ReservationSection() {
  const id = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  const fid = (name: string) => `${id}-${name}`;
  const eid = (name: string) => `${id}-${name}-error`;
  const hasErrors = Object.keys(errors).length > 0;

  // Déplace le focus vers le récapitulatif d'erreurs pour l'annoncer aux lecteurs d'écran.
  useEffect(() => {
    if (hasErrors) summaryRef.current?.focus();
  }, [errors, hasErrors]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next = validate(data);
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  }

  function describedBy(name: keyof Errors) {
    return errors[name] ? eid(name) : undefined;
  }

  return (
    <section id="reservation" className="bg-ivoire px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading index="07" eyebrow="Réservation" title="Votre table à l'aube des saisons" />
            <p className="mt-9 max-w-[44ch] text-lg leading-relaxed text-nuit/75">
              Choisissez une date, un créneau et le nombre de convives. Ce parcours est une
              démonstration : rien n&rsquo;est envoyé ni conservé.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="border-l-2 border-laiton bg-pierre/40 px-5 py-4 text-sm text-nuit/80">
              Démonstration — ce formulaire n&rsquo;envoie aucune réservation et n&rsquo;enregistre
              aucune donnée.
            </p>

            {submitted ? (
              <div role="status" className="mt-8 border border-sauge/50 bg-sauge/10 px-7 py-9">
                <p className="font-display text-2xl font-medium">Simulation réussie</p>
                <p className="mt-3 max-w-[48ch] leading-relaxed text-nuit/75">
                  Aucune réservation n&rsquo;a été transmise et aucune donnée n&rsquo;a été
                  enregistrée. Dans la version finale, votre demande serait confirmée ici.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setErrors({});
                  }}
                  className="mt-7 inline-flex min-h-11 items-center border border-nuit/30 px-6 text-sm font-medium transition duration-[var(--dur-micro)] ease-[var(--ease-standard)] hover:border-laiton-fonce hover:text-laiton-fonce active:translate-y-px"
                >
                  Revenir au formulaire
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-8">
                {hasErrors && (
                  <div
                    ref={summaryRef}
                    role="alert"
                    tabIndex={-1}
                    className="mb-6 border border-[#a3311d]/40 bg-[#a3311d]/5 px-5 py-4 focus-visible:outline-2"
                  >
                    <p className={`text-sm font-medium ${errorText}`}>
                      Veuillez corriger {Object.keys(errors).length}{" "}
                      {Object.keys(errors).length > 1 ? "champs" : "champ"} :
                    </p>
                    <ul className="mt-2 flex flex-col gap-1 text-sm">
                      {(Object.keys(errors) as (keyof Errors)[]).map((key) => (
                        <li key={key}>
                          <a href={`#${fid(key)}`} className={`underline ${errorText}`}>
                            {errorLabels[key]} — {errors[key]}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor={fid("date")} className="text-sm font-medium">
                      Date <span className="text-nuit/65">(requis)</span>
                    </label>
                    <input
                      id={fid("date")}
                      name="date"
                      type="date"
                      aria-required="true"
                      aria-invalid={errors.date ? "true" : undefined}
                      aria-describedby={describedBy("date")}
                      className={`${fieldBase} ${errors.date ? "border-[#a3311d]" : "border-nuit/25"}`}
                    />
                    {errors.date && (
                      <p id={eid("date")} className={`mt-1.5 text-sm ${errorText}`}>
                        {errors.date}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor={fid("creneau")} className="text-sm font-medium">
                      Créneau <span className="text-nuit/65">(requis)</span>
                    </label>
                    <select
                      id={fid("creneau")}
                      name="creneau"
                      defaultValue=""
                      aria-required="true"
                      aria-invalid={errors.creneau ? "true" : undefined}
                      aria-describedby={describedBy("creneau")}
                      className={`${fieldBase} ${errors.creneau ? "border-[#a3311d]" : "border-nuit/25"}`}
                    >
                      <option value="" disabled>
                        Choisir un service
                      </option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.creneau && (
                      <p id={eid("creneau")} className={`mt-1.5 text-sm ${errorText}`}>
                        {errors.creneau}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor={fid("convives")} className="text-sm font-medium">
                      Convives
                    </label>
                    <select
                      id={fid("convives")}
                      name="convives"
                      defaultValue="2"
                      className={`${fieldBase} border-nuit/25`}
                    >
                      {partySizes.map((n) => (
                        <option key={n} value={n}>
                          {n} {n > 1 ? "personnes" : "personne"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor={fid("nom")} className="text-sm font-medium">
                      Nom <span className="text-nuit/65">(requis)</span>
                    </label>
                    <input
                      id={fid("nom")}
                      name="nom"
                      type="text"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={errors.nom ? "true" : undefined}
                      aria-describedby={describedBy("nom")}
                      className={`${fieldBase} ${errors.nom ? "border-[#a3311d]" : "border-nuit/25"}`}
                    />
                    {errors.nom && (
                      <p id={eid("nom")} className={`mt-1.5 text-sm ${errorText}`}>
                        {errors.nom}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor={fid("allergies")} className="text-sm font-medium">
                      Allergies ou intolérances{" "}
                      <span className="text-nuit/65">(facultatif)</span>
                    </label>
                    <input
                      id={fid("allergies")}
                      name="allergies"
                      type="text"
                      placeholder="Gluten, fruits à coque, lactose…"
                      className={`${fieldBase} border-nuit/25`}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor={fid("demande")} className="text-sm font-medium">
                      Demande spéciale <span className="text-nuit/65">(facultatif)</span>
                    </label>
                    <textarea
                      id={fid("demande")}
                      name="demande"
                      rows={3}
                      placeholder="Occasion particulière, place près de la fenêtre…"
                      className="mt-2 w-full resize-y border border-nuit/25 bg-white px-4 py-3 text-nuit transition-colors duration-[var(--dur-micro)] hover:border-nuit/40 focus-visible:border-laiton-fonce"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button type="submit" className={buttonClasses("primary", "w-full sm:w-auto")}>
                      Simuler la demande
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
