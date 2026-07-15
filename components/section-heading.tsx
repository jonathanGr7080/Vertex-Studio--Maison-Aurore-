type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  tone?: "light" | "dark";
};

/** En-tête de section : numérotation discrète, ligne fine, titre éditorial. */
export function SectionHeading({ index, eyebrow, title, tone = "light" }: SectionHeadingProps) {
  const accent = tone === "light" ? "text-laiton-fonce" : "text-laiton";
  const muted = tone === "light" ? "text-nuit/65" : "text-ivoire/60";
  const rule = tone === "light" ? "bg-nuit/25" : "bg-ivoire/25";

  return (
    <div>
      <p className={`flex items-center gap-4 text-[12px] uppercase tracking-[0.2em] ${muted}`}>
        <span className={`font-display text-sm tracking-normal ${accent}`}>{index}</span>
        <span aria-hidden className={`h-px w-10 ${rule}`} />
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12]">
        {title}
      </h2>
    </div>
  );
}
